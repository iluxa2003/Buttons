import React from "react";
import CustomChecker from "../components/CustomChecker/CustomChecker";

export default {
  title: "CustomChecker",
  component: CustomChecker,
};

const Template = (args) => <CustomChecker {...args} />;

export const DefaultChecker = Template.bind({});
DefaultChecker.args = {};

export const DisabledChecker = Template.bind({});
DisabledChecker.args = {
  disabled: true,
};
