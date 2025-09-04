import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Badge } from "../components/common/Badge";

const meta = {
  title: "Example/Badge",
  component: Badge,
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Badge",
    variant: "default",
  },
};
export const Secondary: Story = {
  args: {
    label: "Badge",
    variant: "secondary",
  },
};
export const Destructive: Story = {
  args: {
    label: "Badge",
    variant: "destructive",
  },
};
export const Outline: Story = {
  args: {
    label: "Badge",
    variant: "outline",
  },
};
