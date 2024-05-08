import { Input, InputProps } from "@/components/ui/input";
import { HTMLInputTypeAttribute } from "react";

export const CustomInput = (
  props: InputProps,
  type: HTMLInputTypeAttribute,
) => (
  <Input
    type={type}
    {...props}
    className="form-input border-gray-300 focus:ring-indigo-500 rounded-lg border px-4 py-3 text-center shadow-sm outline-0 transition duration-300 ease-in-out focus:ring focus:ring-opacity-60 focus-visible:ring-0"
  />

);
