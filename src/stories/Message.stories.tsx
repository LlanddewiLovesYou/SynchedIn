import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import {
  SubmissionForm,
  Props,
} from "../components/SubmissionForm/SubmissionForm";

export default {
  title: "Components/SubmissionForm",
  component: SubmissionForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = (args) => (
  <SubmissionForm {...args}>
    <textarea />
  </SubmissionForm>
);

export const Form = Template.bind({});
Form.args = {};
