import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./styles";
import introImg from "../../assets/intro-img.png"
import { RegularText } from "../Typograph";
import {useTheme} from "styled-components"
import InfoWithIcon from "../InfoWithIcon";
import {ShoppingCart,Package,Timer} from "phosphor-react"
 
export default function Intro () {
    alert(window.innerWidth)
    const {colors} = useTheme()
    return <IntroContainer>
        <IntroContent className="container">
            <div>
                <section>
                    <IntroTitle $size="xl">Encontre o café perfeito para qualquer hora do dia</IntroTitle>
                    <RegularText $size="l" $color="subtitle">
                        Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
                    </RegularText>
                </section>
                <BenefitsContainer>
                    <InfoWithIcon icon={<ShoppingCart weight="fill"/>} iconBg={colors["brand-yellow-dark"]} text="Compra simples e segura"/>        
                    <InfoWithIcon icon={<Package weight="fill"/>} iconBg={colors["base-text"]} text="A embalagem mantem o cafe intacto"/>        
                    <InfoWithIcon icon={<Timer weight="fill"/>} iconBg={colors["brand-yellow"]} text="Entrega rápida e rastreavel"/>        
                    <InfoWithIcon icon={<ShoppingCart weight="fill"/>} iconBg={colors["brand-purple"]} text="O café chega fresquinho ate você"/>                
                </BenefitsContainer>
            </div>
 
            <img src={introImg} alt="" />
 
        </IntroContent>
    </IntroContainer>
}