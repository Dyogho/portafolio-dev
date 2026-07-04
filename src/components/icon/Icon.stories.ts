import "./Icon.css";
import Icon from "./Icon.astro";

export default {
  title: "Components/Icon",
  component: Icon,
};

export const Arrow = {
  args: {
    name: "arrow",
    label: "Arrow icon",
  },
};

export const Github = {
  args: {
    name: "github",
    label: "GitHub icon",
  },
};
