import { Input as ShaInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "./Badge";

export interface InputProps {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  /** Labelがないと，縦方向にずれるのでrequiredにする */
  label: string;
  required?: boolean;
}

export const Input = ({
  placeholder,
  type,
  disabled,
  label,
  required = false,
  ...props
}: InputProps) => {
  return (
    <div className="mt-3 grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="input-id">
        {label}
        {required && <Badge variant="destructive" label="必須" />}
      </Label>
      <ShaInput
        id="input-id"
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        {...props}
      />
    </div>
  );
};
