import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import { Splash, Props } from "../components/Splash/Splash";

export default {
  title: "Components/Splash",
  component: Splash,
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

const Template: Story<Props> = (args) => <Splash {...args} />;

export const SplashPage = Template.bind({});
SplashPage.args = {};
