import "../container/Container.css";
import "./Timeline.css";
import Timeline from "./Timeline.astro";

export default {
  title: "Components/Timeline",
  component: Timeline,
};

export const Basic = {
  args: {
    ariaLabel: "Experience timeline",
    items: [
      {
        period: "2024 — Actual",
        title: "Frontend Developer",
        subtitle: "Freelance",
        description: "Construcción de sitios rápidos, landing pages y componentes reutilizables.",
        challenges: ["Mejorar performance", "Crear componentes mantenibles", "Cuidar accesibilidad"],
      },
      {
        period: "2022 — 2024",
        title: "UI Developer",
        subtitle: "Digital Studio",
        description: "Implementación de interfaces responsive y colaboración con diseño/producto.",
        challenges: ["Traducir diseños a código", "Unificar estilos", "Reducir deuda visual"],
      },
    ],
  },
};
