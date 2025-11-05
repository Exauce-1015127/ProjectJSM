import HeroCard from "../components/HeroCard";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <HeroCard
        image="/src/assets/skyline_asia.jpg"
        title="Voorbeeldproject"
        subtitle="Project met subtiele uitleg"
        buttonText="Meer informatie"
        buttonLink="/projects"
        textColor="text-white"
      />

      <HeroCard
        image="/src/assets/skyline_york.jpg"
        title="Tweede project"
        subtitle="Supercharged by M3."
        buttonText="Bekijk meer"
        buttonLink="/projects"
      />

      <Slider/>
    </div>
  );
}
