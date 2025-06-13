"use client";

import { UseFormReturn, FieldValues, Path } from "react-hook-form";
import { FormControl, FormField, FormMessage } from "../ui/form";

import { FormItem } from "../ui/form";
import { Input } from "../ui/input";

type FormInputProps<T extends FieldValues = FieldValues> = {
  form: UseFormReturn<T>;
  name: Path<T>;
  label: string;
  placeholder?: string;
};

export default function FormInput<T extends FieldValues>({
  form,
  name,
  label,
  placeholder = "",
}: FormInputProps<T>) {
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
