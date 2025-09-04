import { Input as ShaInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "./Badge";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export interface InputProps {
  label: string;
  /** react-hook-formで使用するname
   * nameはstringじゃないといけない
   */
  name: string;
  placeholder?: string;
  defaultValue?: string | number;
  type?: string;
  disabled?: boolean;
  /** validation Messageを表示させるかどうか */
  hiddenValidationMessage?: boolean;
  required?: boolean;
}

export const Input = ({
  placeholder,
  name,
  type,
  defaultValue,
  disabled,
  label,
  hiddenValidationMessage = false,
  required = false,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputId = `input-${name}`;
  return (
    <div className="mt-3 grid w-full max-w-sm items-center gap-3">
      <Label htmlFor={inputId}>
        {label}
        {required && <Badge variant="destructive" label="必須" />}
      </Label>
      <ShaInput
        id={inputId}
        placeholder={placeholder}
        type={type}
        defaultValue={defaultValue}
        disabled={disabled}
        {...props}
        {...register(name)}
      />
      {/* validation Message */}
      {!hiddenValidationMessage && (
        <ErrorMessage
          errors={errors}
          name={name as string}
          render={({ message }) => <p className="text-red-500">{message}</p>}
        />
      )}
    </div>
  );
};
