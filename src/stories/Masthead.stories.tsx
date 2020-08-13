import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import { Masthead, Props } from "../components/Masthead/Masthead";

export default {
  title: "Components/Masthead",
  component: Masthead,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = (args) => <Masthead {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
