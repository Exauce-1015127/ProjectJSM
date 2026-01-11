import HeroCard from "../components/HeroCard";
import Slider from "../components/Slider";


export default function Home() {
  return (
    <div>
      <HeroCard
        image="/kantoorwit.jpg"
        title="JSM Adviesbureau"
        subtitle="Één doel, één passie - omgevingsmanagement"
        buttonText="Meer informatie"
        buttonLink="/about"
        textColor="text-white"
      />

        <HeroCard
        image="/test2bannerMB.png"
        title="Voorbeeld"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        buttonText="Meer informatie"
        buttonLink="https://www.google.com"
        textColor="text-white"
      />

      <HeroCard
        image="/dordrechtskyline.jpg"
        title="Tweede voorbeeld"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.."
        buttonText="Meer informatie"
        buttonLink="https://www.google.com"
      />

      <Slider/>
    </div>
  );
}
