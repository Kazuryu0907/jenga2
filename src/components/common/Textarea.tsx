import { Textarea as ShaTextarea } from "@/components/ui/textarea";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Badge } from "./Badge";
import { ErrorMessage } from "@hookform/error-message";

export interface TextareaProps {
  /** react-hook-formで使用するname **/
  name: string;
  /** The placeholder text for the textarea */
  placeholder?: string;
  /** A label for the textarea */
  label?: string;
  //Textareaをdisableにすることはないと思うので実装しない
  // disabled?: boolean;
  hiddenValidationMessage?: boolean;
  required?: boolean;
}

export const TextArea = ({
  name,
  placeholder,
  label,
  hiddenValidationMessage = false,
  required = false,
  ...props
}: TextareaProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const textareaId = `textarea-${name}`;
  return (
    <div className="mt-3 grid w-full max-w-sm items-center gap-3">
      {!!label && (
        <Label htmlFor={textareaId}>
          {label}
          {required && <Badge variant="destructive" label="必須" />}
        </Label>
      )}
      <ShaTextarea
        id={textareaId}
        placeholder={placeholder}
        {...props}
        {...register(name)}
      />
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
