import { Meta, StoryFn } from "@storybook/react/*";
import Icon, { iconKeyList } from "./Icon";
import { FlexBox } from "../layout";

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
  icon: "bell",
  size: 24,
};

export const ListOfIcons: StoryFn = (args) => (
  <FlexBox direction="row" className="gap-7 p-4">
    {iconKeyList.map((icon) => (
      <FlexBox direction="col">
      <Icon {...args} key={icon} icon={icon} size={24} />
      <span className="text-black">{icon}</span>
      </FlexBox>
    ))}
  </FlexBox>
);

ListOfIcons.parameters = {
  layout: "", 
};
