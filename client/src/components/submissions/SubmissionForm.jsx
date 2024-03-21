import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FormError } from "../common/FormError";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight, Loader2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { createSubmission } from "@/redux/submissionSlice";
import { Textarea } from "../ui/textarea";

const languages = [
  "C",
  "C++",
  "Java",
  "JavaScript",
  "Python",
  "Rust",
  "TypeScript",
  "Go",
  "R",
  "Shell",
  "SQL",
];

const SubmissionForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [language, setLanguage] = useState([]);
  const { isLoading } = useSelector((state) => state.submission);

  const handleSubmission = async (data) => {
    data.language = language;

    console.log(data);

    const response = await dispatch(createSubmission(data));
    if (response.meta.requestStatus === "fulfilled") {
      navigate("/submissions");
    }
  };

  return (
    <div className="container flex flex-col w-full py-4 gap-y-8">
      <form onSubmit={handleSubmit(handleSubmission)}>
        <div className="grid gap-6 py-4">
          <div className="grid items-center gap-2">
            <Label htmlFor="username" className="text-base font-medium">
              Username
            </Label>
            <Input
              type="text"
              className="border border-border/80"
              placeholder="Enter your username"
              {...register("username", {
                required: "Username is required",
                minLength: {
                  value: 3,
                  message: "Name should be atleast 3 characters",
                },
              })}
            />
            {errors.name && <FormError message={errors.name.message} />}
          </div>

          <div className="grid items-center gap-2">
            <Label htmlFor="language" className="text-base font-medium">
              Preferred language
            </Label>
            <Select required={true} onValueChange={(e) => setLanguage(e)}>
              <SelectTrigger className="border border-border/80">
                <SelectValue placeholder="Choose language" />
              </SelectTrigger>
              <SelectContent className="border border-border/80">
                <SelectGroup>
                  {languages.map((language, index) => {
                    return (
                      <SelectItem key={index} value={language}>
                        {language}
                      </SelectItem>
                    );
                  })}
                </SelectGroup>
              </SelectContent>
            </Select>
            {errors.language && <FormError message={errors.language.message} />}
          </div>

          <div className="grid items-center gap-2">
            <Label htmlFor="stdin" className="text-base font-medium">
              Standard Input
            </Label>
            <Textarea
              id="stdin"
              placeholder="Enter standard input here"
              {...register("stdin", {
                required: "Standard input is required",
              })}
              className="col-span-3 border border-border/80"
            />
            {errors.stdin && <FormError message={errors.stdin.message} />}
          </div>

          <div className="grid items-center gap-2">
            <Label htmlFor="sourceCode" className="text-base font-medium">
              Source Code
            </Label>
            <Textarea
              id="sourceCode"
              placeholder="Enter your source code here"
              {...register("sourceCode", {
                required: "Source code is required",
              })}
              className="col-span-3 border border-border/80"
            />
            {errors.sourceCode && (
              <FormError message={errors.sourceCode.message} />
            )}
          </div>

          <div>
            <Button className="w-full mt-6 font-semibold" type="submit">
              {isLoading ? (
                <>
                  Submitting
                  <Loader2 className="w-4 h-4 ml-2 font-semibold animate-spin" />
                </>
              ) : (
                <>
                  Submit <ArrowRight className="ml-2" size={16} />
                </>
              )}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SubmissionForm;
