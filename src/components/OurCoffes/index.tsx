import CoffeCard from "../CoffeCard";
import { TitleText } from "../Typograph";
import { CoffeeList, OurCoffesContainer } from "./styles";
import { coffees } from "../../data/coffees";
export default function OurCoffes() {
    return (
        <OurCoffesContainer className="container">
            <TitleText $size="l">
                Nossos Cafés
            </TitleText>


           <CoffeeList>
                {
                    coffees.map(coffe => (
                        <CoffeCard key={coffe.id} coffee={coffe}/>
                    ))
                }
           </CoffeeList>
        </OurCoffesContainer>
    )
}