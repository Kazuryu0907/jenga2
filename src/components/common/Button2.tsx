import { Button } from "@/components/ui/button";

export interface ButtonProps {
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export const Button2 = ({
  label,
  onClick,
  disabled,
  variant = "default",
  type,
  ...props
}: ButtonProps) => {
  return (
    <div className="mt-3 flex flex-wrap items-center gap-2 md:flex-row">
      <Button
        variant={variant}
        onClick={onClick}
        type={type}
        role="button"
        aria-label={label}
        disabled={disabled}
        {...props}
      >
        {label}
      </Button>
    </div>
  );
};
