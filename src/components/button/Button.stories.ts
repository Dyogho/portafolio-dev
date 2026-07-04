import "./Button.css";
import Button from "./Button.astro";

export default {
  title: "Components/Button",
  component: Button,
};

export const Default = {
  args: {
    label: "View projects",
  },
};

export const Link = {
  args: {
    label: "Contact me",
    href: "#contact",
  },
};
