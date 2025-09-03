import { Input } from "./Input";
import { Button2 } from "./Button2";
import { TextArea } from "./Textarea";
import { Selector } from "./Selector";

import {
  useForm,
  SubmitHandler,
  useWatch,
  FormProvider,
} from "react-hook-form";
import { Separator } from "@/components/ui/separator";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  ticketFormSchema,
  TicketFormType,
} from "@/business/validate/ticketFormValidate";
import { createContext } from "react";

export interface TicketFormProps {
  onSubmit: SubmitHandler<TicketFormType>;
  valueToLabel: Map<string, string>;
}

export function TicketForm({ onSubmit, valueToLabel }: TicketFormProps) {
  const form = useForm({
    resolver: yupResolver(ticketFormSchema),
  });
  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Selector
          label="時間"
          valueToLabel={valueToLabel}
          placeholder="時間帯を選択"
          required
          {...register("time")}
        />
        <Input {...register("name")} label="名前" placeholder="みけ" required />
        <div className="flex justify-center">
          <Input
            {...register("adults")}
            label="大人"
            placeholder="1"
            type="number"
            required
          />
          <Input
            {...register("children")}
            label="子供"
            placeholder="0"
            type="number"
            required
          />
        </div>
        <Separator className="my-5" />
        <TextArea
          {...register("notes")}
          label="備考欄"
          placeholder="車いすあり"
        />

        <Button2 label="Submit" type="submit" />
      </form>
    </FormProvider>
  );
}
