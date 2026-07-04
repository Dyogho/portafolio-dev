import "../container/Container.css";
import "../icon/Icon.css";
import "./StackCard.css";
import StackCard from "./StackCard.astro";

export default {
  title: "Components/StackCard",
  component: StackCard,
};

export const React = {
  args: {
    title: "React",
    icon: "/icons/react.svg",
  },
};

export const Next = {
  args: {
    title: "Next.js",
    icon: "/icons/nextjs.svg",
  },
};
