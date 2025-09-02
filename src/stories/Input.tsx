import { Input as ShaInput } from "@/components/ui/input";

export interface InputProps {
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  label?: string;
}

export const Input = ({ placeholder, type, disabled }: InputProps) => {
  return (
    <div>
      <ShaInput placeholder={placeholder} type={type} disabled={disabled} />
    </div>
  );
};
