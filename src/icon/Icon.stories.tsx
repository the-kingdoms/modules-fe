import { Meta, StoryFn } from "@storybook/react/*";
import Icon, { iconKey, IconCategory } from "./Icon";
import { FlexBox} from "../layout";

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

export const ListOfIcons: StoryFn = (args) => (
  <div>
    {Object.entries(IconCategory).map(([category, icon]) => (
      <div className="px-4 pt-4" key={category}>
        <div className="font-bold">{category}</div>
        <FlexBox direction="row" className="gap-7 p-4">
          {Object.keys(icon).map((icon) => (
            <FlexBox direction="col" key={icon} className="items-center">
              <Icon {...args} icon={icon as iconKey} size={24} />
              <span className="text-black">{icon}</span>
            </FlexBox>
          ))}
        </FlexBox>
      </div>
    ))}
  </div>
);

ListOfIcons.parameters = {
  layout: "",
  controls : { disable : true },
  actions : { disable : true },
};
