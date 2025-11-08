import HeroCard from "../components/HeroCard";
import Slider from "../components/Slider";


export default function Home() {
  return (
    <div>
      <HeroCard
        image="/kantoorwit.jpg"
        title="JSM Adviesbureau"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Meer informatie"
        buttonLink="/projects"
        textColor="text-white"
      />

        <HeroCard
        image="/Zeeland.png"
        title="Voorbeeld"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Meer informatie"
        buttonLink="/projects"
        textColor="text-white"
      />

      <HeroCard
        image="/dordrechtskyline.jpg"
        title="Tweede voorbeeld"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
        buttonText="Meer informatie"
        buttonLink="/projects"
      />

      <Slider/>
    </div>
  );
}
