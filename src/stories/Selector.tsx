import {
  Select,
  SelectTrigger,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import {
  SelectContent,
  SelectGroup,
  SelectLabel,
} from "@radix-ui/react-select";
import { clsx } from "clsx";
export interface SelectorProps {
  label: string;
  selectLabel?: string;
  placeholder: string;
  width?: string;
  valueToLabel: Map<string, string>;
}

export const Selector = ({
  label,
  selectLabel,
  placeholder,
  width,
  valueToLabel,
}: SelectorProps) => {
  const selectItemsComponent = Array.from(valueToLabel.entries()).map(
    ([value, label]) => (
      <SelectItem key={value} value={value}>
        {label}
      </SelectItem>
    ),
  );
  return (
    <div className="mt-3">
      <Label className="mb-3">{label}</Label>
      <Select>
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
    </div>
  );
};
