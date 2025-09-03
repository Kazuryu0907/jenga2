import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { TicketForm } from "./TicketForm";

const meta = {
  title: "Example/TicketForm",
  component: TicketForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  // argTypes: {

  // }
} satisfies Meta<typeof TicketForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onSubmit: (data) => {
      console.log(data);
    },
    valueToLabel: new Map([
      ["morning", "Morning"],
      ["afternoon", "Afternoon"],
      ["evening", "Evening"],
    ]),
  },
};
