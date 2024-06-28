import { Meta, StoryFn } from "@storybook/react/*";
import Icon, { iconKey, IconCategory } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta<typeof Icon>;

const Template: StoryFn<typeof Icon> = (args) => <Icon {...args} />;

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: "Bell_Table",
  size: 24,
};
