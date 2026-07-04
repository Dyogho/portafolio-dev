import "./Icon.css";
import Icon from "./Icon.astro";

export default {
  title: "Components/Icon",
  component: Icon,
};

export const BuiltIn = {
  args: {
    name: "arrow",
    label: "Arrow icon",
  },
};

export const RemoteUrl = {
  args: {
    url: "https://api.iconify.design/simple-icons:astro.svg",
    label: "Astro icon",
  },
};

export const LocalPublicSvg = {
  args: {
    local: "/favicon.svg",
    label: "Local favicon",
  },
};

export const InlineSvg = {
  args: {
    label: "Inline code icon",
    svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m8 9-4 3 4 3"/><path d="m16 9 4 3-4 3"/><path d="m14 4-4 16"/></svg>',
  },
};
