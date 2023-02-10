import React from "react";
import plus from "../icons/plus.svg";
import buttonIcons from "../icons/button-icons";
import NoTextButton from "../components/CustomButton/NoTextButton";

export default {
  title: "NoTextButton",
  component: NoTextButton,
  argTypes: {
    icon: {
      options: { ...buttonIcons },
      control: { type: "select" },
    },
  },
};

const Template = (args) => <NoTextButton {...args} />;
export const SmallBlueButton = Template.bind({});
SmallBlueButton.args = {
  icon: plus,
  size: "small",
};

export const MediumButton = Template.bind({});
MediumButton.args = {
  icon: buttonIcons.umbrella,
};
