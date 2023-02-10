import React from "react";
import CustomRange from "../components/CustomRange/CustomRange.js";

export default {
  title: "CustomRange",
  component: CustomRange,
};

const Template = (args) => <CustomRange {...args} />;

export const Range = Template.bind({});
Range.args = {};

export const RangeWithCurrentNumber = Template.bind({});
RangeWithCurrentNumber.args = {
  currentValue: true,
};

export const RangeedRange = Template.bind({});
RangeedRange.args = {
  min: 100,
  max: 1000,
  step: 10,
  showRange: true,
};

export const AllRange = Template.bind({});
RangeedRange.args = {
  currentValue: true,
  showRange: true,
};
