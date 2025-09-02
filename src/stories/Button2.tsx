import { Button } from "@/components/ui/button";

export interface ButtonProps {
  outline?: boolean;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button2 = ({
  label,
  onClick,
  disabled,
  outline: primary,
  type,
  ...props
}: ButtonProps) => {
  const variant = primary ? "default" : "outline";
  return (
    <div>
      <Button
        variant={variant}
        onClick={onClick}
        type={type}
        disabled={disabled}
        {...props}
      >
        {label}
      </Button>
    </div>
  );
};
