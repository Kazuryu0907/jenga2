import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { withRHF } from "./withRHF";
import { TicketForm } from "./TicketForm";
import { ticketFormSchema } from "@/business/validate/ticketFormValidate";

const meta = {
  title: "Example/TicketForm",
  component: TicketForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [withRHF()],
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

export const Validated: Story = {
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
  decorators: [withRHF(ticketFormSchema, { adults: -1, children: -1 })],
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByText("DEBUG SUBMIT"));
  },
};
