import { Bank, CreditCard, Money } from "phosphor-react";
import PaymentMethod from "../PaymentMethod";
import { PaymentOptionMethodContainer } from "./styles";
import {useFormContext} from "react-hook-form"
import { RegularText } from "../Typograph";

export const paymentsMethods   = {
    credit: {
        label: "Cartão de Credito",
        icon: <CreditCard size={16}/>
    },
    debit:{
        label: "Cartão de Debito",
        icon: <Bank size={16}/>
    },
    money:{
        label: "Dinheiro",
        icon: <Money size={16}/>
    }
}

export default  function PaymentOptionMethod() {
    const {formState} = useFormContext()
    return (
        <PaymentOptionMethodContainer>
            <div>      
                   {Object.entries(paymentsMethods).map(([key, {label,icon}])=>(
                    <PaymentMethod id={key} key={key} description={label} icon={icon} />
                )) }
            </div>
       
        {formState.errors.paymentmethod && <RegularText>{formState.errors?.paymentmethod?.message?.toString()}</RegularText>}
        </PaymentOptionMethodContainer>
    )
}