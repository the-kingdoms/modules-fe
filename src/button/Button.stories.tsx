import { Meta, StoryFn } from "@storybook/react";
import TestButton, { buttonStyle } from "./Button";
import { getStateInfo, getPropsInfo } from "./getPropsInfo";

export default {
  title: "Components/Button",
  component: TestButton,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  argTypes: {
    type: {
      control: {
        type: "select",
        options: ["primary", "secondary", "border", "ghost"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["L", "M", "S", "full"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["default", "danger", "elevated"],
      },
    },
  },
} as Meta<typeof TestButton>;

const Template: StoryFn<typeof TestButton> = (args) => {
  const color = getStateInfo(args, buttonStyle);

  return (
    <>
      <TestButton {...args} />
      {getPropsInfo(args, color)}
    </>
  );
};
export const CustomButton = Template.bind({});
CustomButton.args = {
  size: "L",
  text: "Button",
  type: "primary",
  variant: "default",
  isClicked: false,
  inactive: false,
  className: "",
};
