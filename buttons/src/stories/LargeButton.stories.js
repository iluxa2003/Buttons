import React from "react";
import LargeButton from "../components/CustomButton/LargeButton.js";
import telegram from "../icons/telegram.svg";
import buttonIcons from "../icons/button-icons";

export default {
  title: "LargeButton",
  component: LargeButton,
  argTypes: {
    icon: {
      options: { ...buttonIcons },
      control: { type: "select" },
    },
  },
};

const Template = (args) => <LargeButton {...args} />;

export const LargeBlueButtonNoIcon = Template.bind({});
LargeBlueButtonNoIcon.args = {
  children: "Telegram",
};

export const LargeBlueButtonIconLeftSide = Template.bind({});
LargeBlueButtonIconLeftSide.args = {
  icon: telegram,
  children: "Telegram",
};

export const LargeBlueButtonIconCenter = Template.bind({});
LargeBlueButtonIconCenter.args = {
  icon: telegram,
  iconPosition: "center",
  children: "Telegram",
};

export const LargeDarkButtonNoIcon = Template.bind({});
LargeDarkButtonNoIcon.args = {
  darkTheme: true,
  children: "Telegram",
};

export const LargeDarkButtonIconleftSide = Template.bind({});
LargeDarkButtonIconleftSide.args = {
  darkTheme: true,
  icon: telegram,
  children: "Telegram",
};

export const LargeDarkButtonIconCenter = Template.bind({});
LargeDarkButtonIconCenter.args = {
  darkTheme: true,
  icon: telegram,
  iconPosition: "center",
  children: "Telegram",
};
