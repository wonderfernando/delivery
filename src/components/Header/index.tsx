import { HeaderButton, HeaderButtonContainer, HeaderContainer } from "./styles";
import coffeLogo from "../../assets/coffee-delivery-logo.svg"
import {MapPin, ShoppingCart} from "phosphor-react"
import { NavLink } from "react-router-dom";
import {useCart} from "../../hooks/useCart" 
export default function Header() {

    const {quantityItemsCart} = useCart()
    
    return (
        <HeaderContainer>
            <div className="container">
            <NavLink to="/">  <img src={coffeLogo}/></NavLink>
                <HeaderButtonContainer>
                    <HeaderButton $variant="purple"><MapPin size={20} weight="fill"/>Luanda, Bairro Prenda</HeaderButton>
                    <NavLink to="/order">
                        <HeaderButton $variant="yellow">
                            {quantityItemsCart !== 0 && <span>{quantityItemsCart}</span>}
                            <ShoppingCart size={20} weight="fill"/>
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonContainer>
            </div>
        </HeaderContainer>
    )
}