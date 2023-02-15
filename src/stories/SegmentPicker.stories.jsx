import React from "react";
import SegmentPicker from "../components/SegmentPicker/SegmentPicker";

const items = [
  {
    text: "item1",
    value: "first item",
  },
  {
    text: "item2",
    value: "second item",
  },
  {
    text: "item3",
    value: "third item",
  },
  {
    text: "item4",
    value: "fourth item",
  },
];

export default {
  title: "SegmentPicker",
  component: SegmentPicker,
};

function Template(args) {
  return <SegmentPicker {...args} />;
}
export const Picker = Template.bind({});
Picker.args = {
  list: items,
};
