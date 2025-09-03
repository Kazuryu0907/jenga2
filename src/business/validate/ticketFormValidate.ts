import * as yup from "yup";

export const ticketFormSchema = yup.object({
  name: yup.string().required("必須項目です"),
  time: yup.string().required("必須項目です"),
  adults: yup.number().min(0, "整数で入力してください").required(),
  children: yup.number().min(0, "整数で入力してください").required(),
  notes: yup.string(),
});

export type TicketFormType = yup.InferType<typeof ticketFormSchema>;
