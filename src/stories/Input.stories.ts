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

export const Plane: Story = {
  args: {},
};

export const Placeholder: Story = {
  args: {
    placeholder: "Enter text here",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Enter text here",
    disabled: true,
  },
};
