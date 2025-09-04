import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/internal/test";

import { Button2 } from "../components/common/Button2";

const meta = {
  title: "Example/Button2",
  component: Button2,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    // backgroundColor: { control: "color" },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};
export const Outline: Story = {
  args: {
    label: "Button",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};
