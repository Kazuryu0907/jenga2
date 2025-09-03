import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "./Input";
import { withRHF } from "./withRHF";
import * as yup from "yup";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
  decorators: [withRHF()],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    name: "test",
    label: "Label",
  },
};

export const PlaceholderAndLabel: Story = {
  args: {
    name: "test",
    placeholder: "Enter text here",
    label: "Label",
  },
};

export const Required: Story = {
  args: {
    name: "test",
    placeholder: "Enter text here",
    label: "Label",
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "test",
    placeholder: "Enter text here",
    label: "Label",
    disabled: true,
  },
};
export const Validated: Story = {
  args: {
    name: "test",
    placeholder: "Enter text here",
    label: "Label",
    disabled: true,
  },
  decorators: [withRHF(yup.object({ test: yup.string().required() }))],
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("DEBUG SUBMIT"));
  },
};
