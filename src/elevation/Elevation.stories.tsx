import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FlexBox } from "src/layout";

export default {
  title: "Components/Elevation",
  parameters: {
    layout: "centered",
    backgrounds: { default: "light" },
  },
  tags: ["autodocs"],
} as Meta;

const ElevationBox: React.FC<{ className: string; label: string }> = ({
  className,
  label,
}) => (
  <FlexBox direction="row">
    <div className={`p-6 ${className} rounded-lg mb-4`}>
      <p>{label}</p>
    </div>
    <div className="ml-5">
      <p className="font-bold">className: {className}</p>
    </div>
  </FlexBox>
);

const Template: StoryFn = () => (
  <div>
    <ElevationBox
      className="shadow-elevation-light-1 bg-Gray-10"
      label="Elevation Light 1"
    />
    <ElevationBox
      className="shadow-elevation-light-1 bg-Gray-10"
      label="Elevation Light 2"
    />
    <ElevationBox
      className="shadow-elevation-dark-1 bg-Gray-90 text-white"
      label="Elevation Dark 1"
    />
    <ElevationBox
      className="shadow-elevation-dark-2 bg-Gray-90 text-white"
      label="Elevation Dark 2"
    />
  </div>
);

export const Elevations = Template.bind({});
