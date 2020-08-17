import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import { MessageForm, Props } from "../components/MessageForm/MessageForm";

export default {
  title: "Components/MessageForm",
  component: MessageForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = (args) => (
  <MessageForm {...args}>
    <textarea />
  </MessageForm>
);

export const Form = Template.bind({});
Form.args = {};
