import { Input as ShaInput } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export interface InputProps {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  /** Labelがないと，縦方向にずれるのでrequiredにする */
  label: string;
}

export const Input = ({
  placeholder,
  type,
  disabled,
  label,
  ...props
}: InputProps) => {
  return (
    <div className="mt-3 grid w-full max-w-sm items-center gap-3">
      <Label htmlFor="input-id">{label}</Label>
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
