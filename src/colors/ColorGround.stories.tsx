import { ColorItem, ColorPalette, Meta } from "@storybook/blocks";
import ColorItemList from "./ColorItems";

export default {
  title: "Design System/Palette",
  component: ColorItemList,
  tags: ["autodocs"],
};

export const ColorDocs = () => (
  <>
    <Meta title="Design System/Palette" />
    <ColorPalette>
      <ColorItemList />
    </ColorPalette>
  </>
);

ColorDocs.parameters = {
  docs: {
    page: () => (
      <>
        <Meta title="Design System/Palette" />

        <ColorPalette>
          <ColorItemList />
        </ColorPalette>
      </>
    ),
  },
};
