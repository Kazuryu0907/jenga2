import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/internal/test";

import { Button } from "../components/common/Button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

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
export const Destructive: Story = {
  args: {
    label: "Button",
    variant: "destructive",
  },
};
export const Disabled: Story = {
  args: {
    label: "Button",
    disabled: true,
  },
};
