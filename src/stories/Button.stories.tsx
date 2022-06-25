import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import "./assets/root.css";
import Button from "../Components/Helpers/Components/Button";

export default {
  text: "Helpers/Button",
  component: Button,
  args: {
    variant: "primary",
    text: "Текст кнопки",
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  text: "Текст кнопки",
};

export const Edit = Template.bind({});
Edit.args = {
  variant: "primary",
  text: "Редактировать",
  icon: "edit",
};

export const Add = Template.bind({});
Add.args = {
  variant: "primary",
  text: "Добавить",
  icon: "add",
};

export const Delete = Template.bind({});
Delete.args = {
  variant: "danger",
  text: "Удалить",
  icon: "delete",
};

export const EventClick = Template.bind({});
EventClick.args = {
  variant: "primary",
  text: "Кнопка с ивентом",
  icon: "edit",
  onClick: () => alert("Fire click!"),
};
