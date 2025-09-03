import { Badge as ShBadge } from "@/components/ui/badge";

export interface BadgeProps {
  label: string;
  variant: "default" | "secondary" | "destructive" | "outline";
}

export const Badge = ({ variant, label, ...props }: BadgeProps) => {
  return (
    <div className="">
      <ShBadge variant={variant} {...props}>
        {label}
      </ShBadge>
    </div>
  );
};
