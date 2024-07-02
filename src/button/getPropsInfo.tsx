import { TestButtonProps, buttonStyle } from "./Button";

export const getStateInfo = (args: TestButtonProps, styles: any) => {
  const type = args.type || "primary";
  let state = "default";

  if (args.inactive) {
    state = "disabled";
  } else if (args.isClicked) {
    state = "focus";
  } else if (args.isClicked === false && !args.inactive) {
    state = "active";
  }

  return styles[type][state] || styles[type].default || "";
};

export const getPropsInfo = (args: TestButtonProps, color: string) => {
  let variant = args.variant || "default";
  let type = args.type || "primary";

  let className = `${color} ${buttonStyle[type]?.[variant] || ""}`;
  return (
    <div style={{ marginTop: "16px" }}>
      <strong>Type:</strong> {args.type}
      <br />
      <strong>Variant:</strong> {args.variant}
      <br />
      <strong>Size:</strong> {args.size}
      <br />
      <strong>State:</strong>{" "}
      {args.inactive ? "disabled" : args.isClicked ? "focus" : "active"}
      <br />
      <strong>ClassName:</strong> {className}
    </div>
  );
};
