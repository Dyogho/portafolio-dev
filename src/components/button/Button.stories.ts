import "./Button.css";
import Button from "./Button.astro";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  args: {
    label: "View projects",
    variant: "default",
  },
};

export const Dark = {
  args: {
    label: "Contact me",
    variant: "dark",
    href: "#contact",
  },
};
