import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import { SendingModal, Props } from "../components/SendingModal/SendingModal";

export default {
  title: "Components/SendingModal",
  component: SendingModal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = (args) => <SendingModal {...args} />;

export const Complete = Template.bind({});
Complete.args = { open: true, recipientNames: "John Doe, Jane Doe" };
export const Loading = Template.bind({});
Loading.args = { open: true, loading: true };
