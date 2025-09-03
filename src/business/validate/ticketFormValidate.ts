import * as yup from "yup";

export const ticketFormSchema = yup.object({
  name: yup.string().required("必須項目です"),
  time: yup.string().required("必須項目です"),
  adults: yup.number().required(),
  children: yup.number().required(),
  notes: yup.string(),
});

export type TicketFormType = yup.InferType<typeof ticketFormSchema>;
