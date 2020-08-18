import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import { Selector, Props } from "../components/ContactSelector/ContactSelector";
import { contacts } from "../response2.js";

const props = { contacts };

export default {
  title: "Components/ContactSelector",
  component: Selector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = () => <Selector {...props}></Selector>;

export const SelectContacts = Template.bind({});
