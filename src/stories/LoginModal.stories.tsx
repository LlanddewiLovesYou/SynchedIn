import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import { LoginModal, Props } from "../components/LoginModal/LoginModal";

const props = { loading: true };

export default {
  title: "Components/LoginModal",
  component: LoginModal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = () => <LoginModal {...props}></LoginModal>;

export const Modal = Template.bind({});
