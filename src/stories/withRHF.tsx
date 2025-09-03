import { FormProvider, useForm } from "react-hook-form";

export const StorybookFormProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const methods = useForm();
  return <FormProvider {...methods}>{children}</FormProvider>;
};
