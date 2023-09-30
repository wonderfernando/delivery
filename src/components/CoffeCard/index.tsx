import { ShoppingCart } from "phosphor-react";
import { RegularText, TitleText } from "../Typograph";
import { AddCardWrapper, CardFooter, CoffeCardContainer, Description, Name, Tags } from "./styles";
import QuantityInput from "../QuantityInput";
import {useCart} from "../../hooks/useCart"
import { useState } from "react";
 
export interface ICoffeeProps{
    id: number,
    tags: String[],
    name: string,
    description: string,
    photo:string,
    price: number
} 
interface ICoffee{
    coffee : ICoffeeProps
}
 
export default function CoffeCard({coffee}: ICoffee) {
    const {addCoffeeToCart} = useCart()
    const [quantity,setQuantity] = useState(1)

    function addQuantity() {
        setQuantity(state => state + 1)
    }
    function decreaseQuantity() {
        setQuantity(state => state - 1)
    }
    function handleAddCoffee() {
        const coffeeNew = {
            ...coffee,
            quantity
        }
        addCoffeeToCart(coffeeNew)
    }
 
 return <CoffeCardContainer>
    
    <img src={`coffees/${coffee.photo}`} alt="" />
        <Tags>
         {coffee.tags.map(tag=>(
            <span key={`${coffee.id}${tag}`}>{tag}</span>
         ))}
        </Tags>
        <Name>{coffee.name}</Name>
        <Description>
          {coffee.description}
        </Description>
        <CardFooter>
            <div>
                <RegularText $size="s">R$</RegularText>
                <TitleText $size="m" color="text" as="strong">9,99</TitleText>
            </div>
            <AddCardWrapper>
                <QuantityInput addQuantity={addQuantity} decreaseQuantity={decreaseQuantity} quantity={quantity}/>
                <button type="button" onClick={handleAddCoffee}><ShoppingCart size={22} weight="fill"/></button>
            </AddCardWrapper>
        </CardFooter>
 </CoffeCardContainer>
}