import { Textarea as ShaTextarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export interface TextareaProps {
  /** react-hook-formで使用するname **/
  name: string;
  /** The placeholder text for the textarea */
  placeholder?: string;
  /** A label for the textarea */
  label?: string;
  //Textareaをdisableにすることはないと思うので実装しない
}

export const TextArea = ({
  name,
  placeholder,
  label,
  ...props
}: TextareaProps) => {
  const textareaId = `textarea-${name}`;
  return (
    <div className="mt-3 grid w-full max-w-sm items-center gap-3">
      {!!label && <Label htmlFor={textareaId}>{label}</Label>}
      <ShaTextarea id={textareaId} placeholder={placeholder} {...props} />
    </div>
  );
};
