import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "./assets/root.css";
import Alert from "../Components/Helpers/Components/Alert";
import { useState } from "react";

export default {
  text: "Helpers/Alert",
  component: Alert,
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args) => (
  <Alert text="Текст уведомления" />
);
export const Primary = Template.bind({});
Primary.args = {};
