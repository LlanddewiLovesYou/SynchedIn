import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import {
  MessageTextArea,
  Props,
} from "../components/MessageTextArea/MessageTextArea";

const props = {};

export default {
  title: "Components/MessageTextArea",
  component: MessageTextArea,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = () => (
  <MessageTextArea {...props}></MessageTextArea>
);

export const TextArea = Template.bind({});
