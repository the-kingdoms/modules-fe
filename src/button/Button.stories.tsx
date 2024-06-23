import { Meta, StoryFn } from "@storybook/react";
import TestButton, { buttonStyle } from "./Button";
import TestButton2 from "./Button2";
import { getColorInfo, renderInfo } from "./getColorInfo";

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
        options: ["primary", "outline", "border", "danger", "disabled"],
      },
    },
    size: {
      control: { type: "select", options: ["L", "M", "S", "full"] },
    },
  },
} as Meta<typeof TestButton>;

const Template: StoryFn<typeof TestButton> = (args) => {
  const color = getColorInfo(args, buttonStyle);
  return (
    <>
      <TestButton {...args} />
      {renderInfo(args, color)}
    </>
  );
};
export const CustomButton = Template.bind({});
CustomButton.args = {
  size: "M",
  text: "Hello Button",
  type: "primary",
  isClicked: false,
  inactive: false,
  className: "",
};

const Template2: StoryFn<typeof TestButton2> = (args) => {
  const color = getColorInfo(args, buttonStyle);
  return (
    <>
      <TestButton2 {...args} />
      {renderInfo(args, color)}
    </>
  );
};
export const CustomButton2 = Template2.bind({});
CustomButton2.args = {
  size: "M",
  text: "Hello Button",
  type: "primary",
  isClicked: false,
  inactive: false,
  className: "",
};
