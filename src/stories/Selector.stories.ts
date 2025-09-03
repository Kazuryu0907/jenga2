import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Selector } from "./Selector";
import { withRHF } from "./withRHF";
import * as yup from "yup";

const meta = {
  title: "Example/Selector",
  component: Selector,
  tags: ["autodocs"],
  decorators: [
    withRHF(
      yup.object({
        test: yup.string().required(),
      }),
    ),
  ],
} satisfies Meta<typeof Selector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Select an option",
    name: "test",
    placeholder: "Please select",
    valueToLabel: new Map([
      ["option1", "Option 1"],
      ["option2", "Option 2"],
      ["option3", "Option 3"],
    ]),
    width: "w-[180px]",
  },
};

export const Required: Story = {
  args: {
    label: "Select an option",
    name: "test",
    placeholder: "Please select",
    valueToLabel: new Map([
      ["option1", "Option 1"],
      ["option2", "Option 2"],
      ["option3", "Option 3"],
    ]),
    width: "w-[180px]",
    required: true,
  },
};

export const Validated: Story = {
  args: {
    label: "Select an option",
    name: "test",
    placeholder: "Please select",
    valueToLabel: new Map([
      ["option1", "Option 1"],
      ["option2", "Option 2"],
      ["option3", "Option 3"],
    ]),
    width: "w-[180px]",
    required: true,
  },
  play: async ({ canvas, userEvent }) => {
    userEvent.click(canvas.getByTestId("DEBUG_SUBMIT"));
  },
};
