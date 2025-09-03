import { Input } from "./Input";
import { Button2 } from "./Button2";
import { TextArea } from "./Textarea";
import { Selector } from "./Selector";

import { useForm, SubmitHandler } from "react-hook-form";

export interface TicketFormProps {
  onSubmit: SubmitHandler<TicketFormSchema>;
  valueToLabel: Map<string, string>;
}

export type TicketFormSchema = {
  name: string;
  time: string;
  adults: number;
  children: number;
  notes: string;
};
export function TicketForm({ onSubmit, valueToLabel }: TicketFormProps) {
  const { handleSubmit } = useForm<TicketFormSchema>();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Selector
        label="時間"
        valueToLabel={valueToLabel}
        placeholder="時間帯を選択"
      />
      <Input label="名前" placeholder="みけ" />
      <div className="flex justify-center">
        <Input label="大人" placeholder="1" type="number" />
        <Input label="子供" placeholder="0" type="number" />
      </div>
      <TextArea label="備考欄" placeholder="車いすあり" />

      <Button2 label="Submit" type="submit" />
    </form>
  );
}
