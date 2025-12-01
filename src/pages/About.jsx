import ImageCard from "../components/ImageCard.jsx";
import TextCard from "../components/TextCard.jsx";
import Slider from "../components/Slider.jsx";

export default function About(){
    return(
        <>
        <div>
            <ImageCard
                image="/JSMBanner2.png"
                title=""
                subtitle=""
            />
        </div>
        <div>
            <TextCard
                title="Over mij"
                subtitle="Ik ben een ervaren zelfstandige professional met een sterk ontwikkelde omgevingssensitiviteit en gevoel voor politiek-bestuurlijke belangen. In alles wat ik doe, geloof ik in het vinden van een aanvaardbaar evenwicht. Mijn overtuiging is dat alles met elkaar in verbinding staat. Een mismatch tussen verwachtingen en realiteit kan leiden tot onder andere onderlinge irritaties, wantrouwen, (juridische) strijd en politiek-maatschappelijk onrust. Door mijn opgedane kennis en ervaring aan zowel opdrachtgevers (overheden)- als opdrachtnemerskant (aannemers), ben ik beter in staat de uitdagingen waar beide partijen mee te maken hebben in projecten te doorgronden, de issues te overzien en sneller te anticiperen op mogelijke kansen en risico’s.

Ik bied klanten advies op maat bij de aanpak van dilemma’s in de menselijke interacties zonder daarbij de doelstellingen van projecten en/of programma’s uit het oog te verliezen."
            />
        </div>
        <div>
            <Slider/>
        </div>
    </>
    )
}