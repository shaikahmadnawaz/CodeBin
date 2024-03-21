import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DataTable from "../ui/data-table";
import { SubmissionColumns } from "./SubmissionColumns";
import { getAllSubmissions } from "@/redux/submissionSlice";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";

const AllSubmissions = () => {
  const dispatch = useDispatch();
  const { submissions } = useSelector((state) => state.submission);
  console.log(submissions);

  useEffect(() => {
    dispatch(getAllSubmissions());
  }, [dispatch]);
  return (
    <div className="flex flex-col items-center w-full py-8 gap-y-8">
      <ScrollArea className="w-96 md:w-full whitespace-nowrap">
        <DataTable data={submissions} columns={SubmissionColumns} />
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default AllSubmissions;
