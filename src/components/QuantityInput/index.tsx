import { Minus, Plus } from "phosphor-react";
import { IconWrapper, QuantityInputContainer } from "./styles";

interface IQuantityInput{
    addQuantity: () => void,
    decreaseQuantity : () => void,
    quantity: number
}
export default function QuantityInput({addQuantity, decreaseQuantity,quantity} : IQuantityInput) {
    return (
        <QuantityInputContainer>
            <IconWrapper disabled={quantity===1} onClick={decreaseQuantity}>
                <Minus size={14} weight="fill"/>
            </IconWrapper>
            <input type="number" value={quantity} readOnly/>
            <IconWrapper  onClick={addQuantity}>
                <Plus size={14} weight="fill"/>
            </IconWrapper>
        </QuantityInputContainer>
    )
}