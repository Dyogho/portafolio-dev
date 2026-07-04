import "../icon/Icon.css";
import "./Card.css";
import Card from "./Card.astro";

export default {
  title: "Components/Card",
  component: Card,
};

export const Basic = {
  args: {
    title: "Portfolio project",
    description: "Short description about the project.",
    href: "#projects",
  },
};
