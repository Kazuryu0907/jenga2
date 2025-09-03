import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Input } from "./Input";

const meta = {
  title: "Example/Input",
  component: Input,
  parameters: {},
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Label: Story = {
  args: {
    label: "Label",
  },
};

export const PlaceholderAndLabel: Story = {
  args: {
    placeholder: "Enter text here",
    label: "Label",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Enter text here",
    label: "Label",
    disabled: true,
  },
};
