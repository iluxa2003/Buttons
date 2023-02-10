import React from "react";
import CustomSearch from "../components/CustomSearch/CustomSearch";
import buttonIcons from "../icons/button-icons";

export default {
  title: "CustomSearch",
  component: CustomSearch,
  argTypes: {
    icon: {
      options: { ...buttonIcons },
      control: { type: "select" },
    },
  },
};

const Template = (args) => <CustomSearch {...args} />;

export const DefaultSearch = Template.bind({});
DefaultSearch.args = {};

export const SearchWithUmbrella = Template.bind({});
SearchWithUmbrella.args = {
  leftSvg: buttonIcons.umbrella,
};
