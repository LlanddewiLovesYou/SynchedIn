import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import { Selector, Props } from "../components/Selector/Selector";
import { companies } from "../response.js";

const props = { companies };

export default {
  title: "Components/Selector",
  component: Selector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = () => <Selector {...props}></Selector>;

export const SelectContacts = Template.bind({});
