import { CurrencyDollar, MapPinLine } from "phosphor-react";
import SectionTitle from "../SectionTitle";
import { TitleText } from "../Typograph";
import { CompleteOrderFormContainer, FormSectionContainer } from "./styles";
import { useTheme } from "styled-components";
import AddressForm from "../AddressForm";
import PaymentOptionMethod from "../PaymentOptionMethod";
export default function CompleteOrderForm() {
    const {colors} = useTheme()
    return (
        <CompleteOrderFormContainer>
            <TitleText $size="xs" color="subtitle">Complete o seu pedido</TitleText>
            <FormSectionContainer>
                <SectionTitle icon={<MapPinLine size={22} color={colors["brand-yellow-dark"]}/>} subtitle="Informe o endereco onde deseja receber seu pedido"  title="Endereco de entrega"/>
                <AddressForm />
            </FormSectionContainer>

            <FormSectionContainer>
                <SectionTitle title="Pagamento" subtitle="O pagamento é feito na entrega. Escolhe a forma que deseja pagar." icon={<CurrencyDollar color={colors["brand-purple"]} size={22}/>}/>
               <PaymentOptionMethod/>
            </FormSectionContainer>
        </CompleteOrderFormContainer>
    )
}