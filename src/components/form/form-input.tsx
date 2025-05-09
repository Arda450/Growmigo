"use client";

import { UseFormReturn } from "react-hook-form";
import { FormControl, FormField, FormMessage } from "../ui/form";

import { FormItem } from "../ui/form";
import { Input } from "../ui/input";

type FormInputProps = {
  form: UseFormReturn<any>;
  name: string;
  label: string;
  placeholder?: string;
};

export default function FormInput({
  form,
  name,
  label,
  placeholder = "",
}: FormInputProps) {
  return (
    <div className="space-y-1">
      <h3 className="lg:text-xl mb-1">{label}</h3>
      <FormField
        control={form.control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormControl>
              <Input placeholder={placeholder} {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
