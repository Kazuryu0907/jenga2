import { Input } from "../common/Input";
import { Button } from "../common/Button";
import { TextArea } from "../common/Textarea";
import { Selector } from "../common/Selector";

import { SubmitHandler, useFormContext, FieldValues } from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { TicketFormType } from "@/business/validate/ticketFormValidate";

export interface TicketFormProps {
  onSubmit: SubmitHandler<FieldValues>;
  valueToLabel: Map<string, string>;
}

export function TicketForm({ onSubmit, valueToLabel }: TicketFormProps) {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useFormContext<TicketFormType>();
  /** 大人と子供のエラーをまとめて扱うための変数*/
  const adultsAndChildrenErrors = errors.adults || errors.children;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Selector
        name="time"
        label="時間"
        valueToLabel={valueToLabel}
        placeholder="時間帯を選択"
        required
      />
      <Input name="name" label="名前" placeholder="みけ" required />
      <div className="flex justify-center">
        {/* validation messageを2つに表示させると，片方だけerrorがでるとlayoutが崩れる */}
        <Input
          name="adults"
          label="大人"
          defaultValue={0}
          type="number"
          hiddenValidationMessage
          required
        />
        <Input
          name="children"
          label="子供"
          defaultValue={0}
          type="number"
          hiddenValidationMessage
          required
        />
      </div>
      {/* validation Messageを非表示にして，下に別でまとめて表示させる */}
      <p className="text-red-500">{adultsAndChildrenErrors?.message}</p>
      <Separator className="my-5" />
      <TextArea
        {...register("notes")}
        label="備考欄"
        placeholder="車いすあり"
      />
      <Button label="Submit" type="submit" />
    </form>
  );
}
