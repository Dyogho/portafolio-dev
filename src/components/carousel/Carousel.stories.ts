import "./Carousel.css";
import Carousel from "./Carousel.astro";

export default {
  title: "Components/Carousel",
  component: Carousel,
};

export const Basic = {
  args: {
    ariaLabel: "Featured items",
    items: [
      {
        title: "Frontend",
        description: "Interfaces modernas, rápidas y accesibles.",
      },
      {
        title: "Design Systems",
        description: "Componentes reutilizables y consistentes.",
      },
      {
        title: "Performance",
        description: "Optimización de carga, UX y Core Web Vitals.",
      },
    ],
  },
};
