import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { Selector } from "./Selector";

const meta = {
  title: "Example/Selector",
  component: Selector,
  tags: ["autodocs"],
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select an option",
    placeholder: "Please select",
    valueToLabel: new Map([
      ["option1", "Option 1"],
      ["option2", "Option 2"],
      ["option3", "Option 3"],
    ]),
    width: "w-[180px]",
  },
};
