import "../container/Container.css";
import "./StatsCard.css";
import StatsCard from "./StatsCard.astro";

export default {
  title: "Components/StatsCard",
  component: StatsCard,
};

export const Basic = {
  args: {
    title: "+4",
    description: "Años construyendo experiencias frontend.",
  },
};
