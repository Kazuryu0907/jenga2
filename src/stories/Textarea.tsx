import { Textarea as ShaTextarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export interface TextareaProps {
  /** The placeholder text for the textarea */
  placeholder?: string;
  /** A label for the textarea */
  label?: string;
  //Textareaをdisableにすることはないと思うので実装しない
}

export const TextArea = ({ placeholder, label, ...props }: TextareaProps) => {
  return (
    <div className="mt-3 grid w-full max-w-sm items-center gap-3">
      {!!label && <Label>{label}</Label>}
      <ShaTextarea placeholder={placeholder} {...props} />
    </div>
  );
};
