import React from "react";
import CustomChecker from "../components/CustomChecker/CustomChecker";

export default {
  title: "CustomChecker",
  component: CustomChecker,
};

function Template(args) {
  return <CustomChecker {...args} />;
}

export const DefaultChecker = Template.bind({});
DefaultChecker.args = {};

export const DisabledChecker = Template.bind({});
DisabledChecker.args = {
  disabled: true,
};
