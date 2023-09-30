import { Trash } from "phosphor-react";
import QuantityInput from "../QuantityInput";
import { RegularText } from "../Typograph";
import { ActionContainer, CoffeCardCardContainer, RemoveButton } from "./styles";
import {ICartItem} from "../../hooks/Context/CartContext"
import { useCart } from "../../hooks/useCart";
import {formatMoney} from "../../utils/FormatyMoney"

interface ICoffeeCard{
    item: ICartItem;
}
export default function CoffeCardCard({item} : ICoffeeCard) {

    const{changeCartItemQuantity,removeCartItem} = useCart()
   function addQuantity() {
        changeCartItemQuantity(item.id,"add")
   }
   function handleRemoveCartItem() {
        removeCartItem(item.id)
   }
   function decreaseQuantity() {
        changeCartItemQuantity(item.id,"decrease")
   }
    return (
        <CoffeCardCardContainer>
            <div>
                <div>
                    <img src={`coffees/${item.photo}`}/>
                </div>
                <div>
                    <RegularText color="subtitle">
                       {item.name}
                    </RegularText>
                    <ActionContainer>
                        <QuantityInput  addQuantity={addQuantity} decreaseQuantity={decreaseQuantity} quantity={item.quantity}/>
                        <RemoveButton onClick={handleRemoveCartItem}>
                            <Trash size={16}/> Remover
                        </RemoveButton>
                    </ActionContainer>
                </div>
            </div>
            <p>{formatMoney(item.quantity * item.price)}</p>
        </CoffeCardCardContainer>
    )
}