import Intro from "../../components/Intro";
import OurCoffes from "../../components/OurCoffes";
import { HomeContainer } from "./style";

export default function Home() {
    return (
        <HomeContainer>
            <Intro/>
            <OurCoffes/>
        </HomeContainer>
    )
}