import React, { forwardRef, HTMLInputTypeAttribute } from "react";
import { Input, InputProps } from "@/components/ui/input";

type CustomInputProps = InputProps & {
  type: HTMLInputTypeAttribute;
};

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ type, ...props }, ref) => (
    <Input
      type={type}
      ref={ref}
      {...props}
      className="form-input border-gray-300 focus:ring-indigo-500 rounded-lg border px-4 py-3 text-center shadow-sm outline-0 transition duration-300 ease-in-out placeholder:text-primary focus:ring focus:ring-opacity-60 focus-visible:ring-0"
    />
  ),
);

CustomInput.displayName = "CustomInput";
