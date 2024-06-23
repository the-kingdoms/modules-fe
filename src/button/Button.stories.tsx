import { Meta, StoryFn } from "@storybook/react/*";
import TestButton, { buttonStyle } from "./Button";

export default {
  title: "Components/Button",
  component: TestButton,
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
};

const Template: StoryFn<typeof TestButton> = (args) => {
  const getColorInfo = () => {
    const type = args.type || "filled";
    const state = args.isClicked
      ? "clicked"
      : args.inactive
        ? "inactive"
        : "active";

    if (type === "filled" || type === "outline") {
      return buttonStyle[type][state];
    } else if (type === "border" || type === "danger") {
      return buttonStyle[type][
        args.inactive ? "default" : args.isClicked ? "active" : "hover"
      ];
    } else {
      return buttonStyle[type].default;
    }
  };

  const color = getColorInfo();
  const className = color
    .split(" ")
    .map((cls) => `.${cls}`)
    .join(" ");

  return (
    <>
      <TestButton {...args} />
      <div style={{ marginTop: "16px" }}>
        <strong>Token:</strong> {args.type}
        <br />
        <strong>State:</strong>{" "}
        {args.isClicked ? "clicked" : args.inactive ? "inactive" : "active"}
        <br />
        <strong>Color:</strong>{" "}
        {color.includes("bg-") ? color.replace("bg-", "") : "N/A"}
        <br />
        <strong>ClassName:</strong> {className}
      </div>
    </>
  );
};
export const CustomButton = Template.bind({});
CustomButton.args = {
  size: "M",
  text: "Custom Button",
  type: "filled",
  isClicked: false,
  inactive: false,
  className: "",
};
