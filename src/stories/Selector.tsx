import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "./Badge";
import { clsx } from "clsx";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
export interface SelectorProps {
  label: string;
  name: string;
  selectLabel?: string;
  placeholder: string;
  width?: string;
  valueToLabel: Map<string, string>;
  required?: boolean;
}

export const Selector = ({
  label,
  name,
  selectLabel,
  placeholder,
  width,
  valueToLabel,
  required = false,
}: SelectorProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const selectItemsComponent = Array.from(valueToLabel.entries()).map(
    ([value, label]) => (
      <SelectItem key={value} value={value}>
        {label}
      </SelectItem>
    ),
  );
  console.log(errors);
  return (
    <div className="mt-3">
      <Label className="mb-3">
        {label}
        {required && <Badge variant="destructive" label="必須" />}
      </Label>
      <Select {...register(name)}>
        <SelectTrigger className={clsx(width)}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{selectLabel}</SelectLabel>
            {selectItemsComponent}
          </SelectGroup>
        </SelectContent>
      </Select>
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <p className="text-red-500">{message}</p>}
      />
    </div>
  );
};
