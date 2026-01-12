import { useEffect, useState } from 'react';
import HeroCard from "../components/HeroCard";
import Slider from "../components/Slider";
import { sanityClient } from '../lib/sanity';

export default function Home() {
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`
        *[_type == "heroSection"] | order(order asc) {
          title,
          subtitle,
          "image": image.asset->url,
          buttonText,
          buttonLink
        }
      `)
      .then(setHeroes)
      .catch(console.error);
  }, []);

  return (
    <div>
      {heroes.map((hero, index) => (
        <HeroCard
          key={index}
          image={hero.image}
          title={hero.title}
          subtitle={hero.subtitle}
          buttonText={hero.buttonText}
          buttonLink={hero.buttonLink}
        />
      ))}

      <Slider />
    </div>
  );
}
