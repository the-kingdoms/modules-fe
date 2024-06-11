import { ColorItem, ColorPalette, Meta } from "@storybook/blocks";
import ColorItemList from "./ColorItems";

export default {
  title: "Components/Color Ground",
  component: ColorItemList,
  tags: ["autodocs"],
};

export const Docs = () => (
  <>
    <Meta title="Components/Color Ground" />
    <ColorPalette>
      <ColorItemList />
    </ColorPalette>
  </>
);

Docs.parameters = {
  docs: {
    page: () => (
      <>
        <Meta title="Components/Color Ground" />

        <ColorPalette>
          <ColorItemList />
        </ColorPalette>
      </>
    ),
  },
};
