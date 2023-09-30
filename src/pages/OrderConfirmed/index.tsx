import { RegularText, TitleText } from "../../components/Typograph";
import { OrderConfirmedContainer, OrderDetailsConfiremed } from "./styles";
import imgOrder from "../../assets/confirmed-order.svg"
import InfoWithIcon from "../../components/InfoWithIcon";
import { Clock, CurrencyDollar, MapPin } from "phosphor-react";
import {useTheme} from "styled-components"
import {useLocation} from "react-router-dom"
import { formDataType } from "../CompleteOrder";
import { paymentsMethods } from "../../components/PaymentOptionMethod";
import { useNavigate } from "react-router-dom";
import {useEffect} from "react"
export default function OrderConfirmed() {
    const navigate = useNavigate()
  
    const {colors} = useTheme()
    interface Idata{
        data: formDataType
    }
    interface IState{
        state: Idata
    }
   
    const {state} = useLocation() as unknown as IState
    useEffect( () => {
        if(!state){
            navigate("/")
        }
      
    },[])
    if (!state) {
        return <></>
    }
    return (
        <OrderConfirmedContainer className="container">
            <div>
                <TitleText $size="l">Uhu! Pedido confirmado</TitleText>
                <RegularText $size="l" $color="subtitle">Agora é só aguardar que logo o café chegará até você</RegularText>
            </div>
            <section>
                <OrderDetailsConfiremed>
                    <InfoWithIcon icon={<MapPin weight="fill"/>}  iconBg={colors["brand-purple"]} text={
                        <RegularText>
                            Entrega em <strong>{state.data.street}</strong>
                            <br />
                           {state.data.bairro}
                        </RegularText>
                } />
                    <InfoWithIcon icon={<Clock weight="fill"/>}  iconBg={colors["brand-yellow"]} text={
                        <RegularText>
                             Previsão de entrega <br />
                             <strong>20min - 30min</strong>
                        </RegularText>
                } />
                    <InfoWithIcon icon={<CurrencyDollar weight="fill"/>}  iconBg={colors["brand-yellow-dark"]} text={
                        <RegularText>
                          Pagamento na entrega<br />
                             <strong>{paymentsMethods[state.data.paymentmethod].label}</strong>
                        </RegularText>
                } />
                </OrderDetailsConfiremed>
                <img src={imgOrder}/>
            </section>
        </OrderConfirmedContainer>
    )
}