import React, { useReducer } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";
import { Action } from "../interfaces/Action.interface";

import {
  ContactSelector,
  Props,
} from "../components/ContactSelector/ContactSelector";
import { contacts } from "../response2.js";
import { formReducer } from "../reducers/formReducer";

const props = { contacts, dispatch: () => {} };

export default {
  title: "Components/ContactSelector",
  component: ContactSelector,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = () => (
  <ContactSelector {...props}></ContactSelector>
);

export const SelectContacts = Template.bind({});
