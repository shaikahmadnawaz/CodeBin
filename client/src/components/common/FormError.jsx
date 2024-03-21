/* eslint-disable react/prop-types */
import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

export const FormError = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-center p-3 text-sm rounded-md bg-destructive/15 gap-x-2 text-destructive">
      <ExclamationTriangleIcon />
      <p>{message}</p>
    </div>
  );
};
