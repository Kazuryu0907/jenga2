import {
  FormProvider,
  useForm,
  FieldValues,
  useFormContext,
} from "react-hook-form";
import { FC, ReactElement } from "react";
import { StoryFn } from "@storybook/nextjs-vite";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { isDefined } from "@/lib/utils";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type YupSchemaType =
  | yup.ObjectSchema<FieldValues, any, unknown, any>
  | undefined;

export const StorybookFormProvider = ({
  children,
  yupSchema,
}: {
  children: React.ReactNode;
  yupSchema: YupSchemaType;
}) => {
  const props = isDefined(yupSchema)
    ? { resolver: yupResolver(yupSchema) }
    : {};
  const methods = useForm(props);
  return <FormProvider {...methods}>{children}</FormProvider>;
};

const SubmitButton = () => {
  const { handleSubmit } = useFormContext();
  return (
    <button
      hidden
      role="button"
      id="DEBUG_SUBMIT"
      type="submit"
      onClick={handleSubmit(console.log)}
    >
      DEBUG SUBMIT
    </button>
  );
};

/**
 * Storybookで`FormProvider`を使うための関数 \
 * 引数にyupのschemaを指定することで，validationのテストも行える
 * @example
 * ```ts
 * const meta = {
 *  title: "Example",
 *  component: Button,
 *  decorators: [withRHF()]
 * } satisfies Meta<typeof Button>
 * ```
 * @param schema validation用のyup schema
 * @returns
 */
// eslint-disable-next-line react/display-name
export const withRHF =
  (schema: YupSchemaType = undefined) =>
  (Story: FC): ReturnType<StoryFn<ReactElement>> => {
    return (
      <StorybookFormProvider yupSchema={schema}>
        <Story />
        <SubmitButton />
      </StorybookFormProvider>
    );
  };
