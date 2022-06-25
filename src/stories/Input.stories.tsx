import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "./assets/root.css";
import Input from "../Components/Helpers/Components/Input";
import { useState } from "react";

export default {
  text: "Helpers/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const [value, setValue] = useState("input value");
  return <Input value={value} setValue={setValue} label="LABEL" />;
};

export const Primary = Template.bind({});
Primary.args = {};
