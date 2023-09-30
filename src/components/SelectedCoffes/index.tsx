
import Button from "../Button";
import CoffeCardCard from "../CoffeCardCard";
import { ConfirmactionSectionContainer } from "../CoffeCardCard/styles";
import { RegularText, TitleText } from "../Typograph";
import { DetailsContainer, SelectedCoffesContainer } from "./styles";
import {useCart} from "../../hooks/useCart"
import { formatMoney } from "../../utils/FormatyMoney";
export default function SelectedCoffes() {
    const {cartItems,quantityItemsCart,totalValue} = useCart()
    return (
        <SelectedCoffesContainer>
            <TitleText $size="xs" color="subtitle">
                Cafés selecionados
            </TitleText>
            <DetailsContainer>
                {
                    cartItems.map(cartItem =>(
                        <CoffeCardCard key={cartItem.id} item={cartItem}/>
                    ))
                }
                

            <ConfirmactionSectionContainer>
                    <div>
                        <RegularText $size="s">
                            Total de itens
                        </RegularText>
                        <RegularText>
                        {quantityItemsCart}
                        </RegularText>
                    </div>
                    <div>
                        <RegularText $size="s">
                            Entrega
                        </RegularText>
                        <RegularText>
                            R$ 0.00
                        </RegularText>
                    </div>
                    <div>
                        <RegularText $weight={700} $size="l" $color="subtitle">
                            Total
                        </RegularText>
                        <RegularText>
                            {formatMoney(totalValue)}
                        </RegularText>
                    </div>
               <Button type="submit">Confirmar pedido</Button>
            </ConfirmactionSectionContainer>
            </DetailsContainer>
     


        </SelectedCoffesContainer>
    )
}