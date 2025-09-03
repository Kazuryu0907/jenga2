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

type YupSchemaType =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yup.ObjectSchema<FieldValues, any, unknown, any> | undefined;

/**
 *
 * @param param0
 * @returns
 */
export const StorybookFormProvider = ({
  children,
  yupSchema,
  defaultValues,
}: {
  children: React.ReactNode;
  /** validationをする場合のyup schema */
  yupSchema: YupSchemaType;
  /** Formのデフォルト値 */
  defaultValues?: FieldValues;
}) => {
  // yupのschemaが指定された時だけvalidationする
  const props = isDefined(yupSchema)
    ? { resolver: yupResolver(yupSchema) }
    : {};
  const methods = useForm({ ...props, defaultValues });
  return <FormProvider {...methods}>{children}</FormProvider>;
};

const SubmitButton = () => {
  const { handleSubmit } = useFormContext();
  return (
    <button type="submit" onClick={handleSubmit(console.log)}>
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
 * @param defaultValues Formのデフォルト値
 * @returns
 */
export const withRHF =
  (schema: YupSchemaType = undefined, defaultValues?: FieldValues) =>
  // eslint-disable-next-line react/display-name
  (Story: FC): ReturnType<StoryFn<ReactElement>> => {
    return (
      <StorybookFormProvider yupSchema={schema} defaultValues={defaultValues}>
        <Story />
        {/* validationが必要な時だけ，getByRolesでsubmitボタンを取得するため出現させる */}
        {isDefined(schema) && <SubmitButton />}
      </StorybookFormProvider>
    );
  };
