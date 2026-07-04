import "../../styles/global.css";
import "./Switch.css";
import Switch from "./Switch.astro";

export default {
  title: "Components/Switch",
  component: Switch,
};

export const Stack = {
  args: {
    name: "stack",
    label: "Filtrar stack",
    value: "frontend",
    options: [
      { label: "Front", value: "frontend" },
      { label: "Back", value: "backend" },
    ],
  },
};

export const Theme = {
  args: {
    name: "theme",
    label: "Cambiar tema",
    value: "light",
    options: [
      { label: "Light", value: "light" },
      { label: "Dark", value: "dark" },
    ],
  },
};
