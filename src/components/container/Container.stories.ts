import "./Container.css";
import Container from "./Container.astro";

export default {
  title: "Components/Container",
  component: Container,
};

export const Default = {
  args: {
    variant: "default",
  },
};

export const Minimal = {
  args: {
    variant: "minimal",
  },
};
