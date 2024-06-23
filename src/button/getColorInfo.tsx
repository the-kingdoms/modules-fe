import { TestButtonProps } from "./Button";

export const getColorInfo = (args: TestButtonProps, styles: any) => {
  const type = args.type || "primary";
  const state = args.isClicked
    ? "clicked"
    : args.inactive
      ? "inactive"
      : "active";

  if (type === "primary" || type === "secondary") {
    return styles[type][state];
  } else if (type === "border" || type === "danger") {
    return styles[type][
      args.inactive ? "default" : args.isClicked ? "active" : "hover"
    ];
  } else {
    return styles[type].default;
  }
};

const getClassName = (color: string) => {
  return color
    .split(" ")
    .map((cls) => `.${cls}`)
    .join(" ");
};

export const renderInfo = (args: TestButtonProps, color: string) => (
  <div style={{ marginTop: "16px" }}>
    <strong>Token:</strong> {args.type}
    <br />
    <strong>State:</strong>{" "}
    {args.isClicked ? "clicked" : args.inactive ? "inactive" : "active"}
    <br />
    <strong>Color:</strong>{" "}
    {color.includes("bg-") ? color.replace("bg-", "") : "N/A"}
    <br />
    <strong>ClassName:</strong> {getClassName(color)}
  </div>
);
