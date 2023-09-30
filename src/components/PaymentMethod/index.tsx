import { ContentContainer, PaymentMethodContainer } from "./styles";
import {useFormContext} from "react-hook-form"
interface PaymentMethodProps{
    icon: React.ReactNode,
    description: string,
    id: string
}


export default function PaymentMethod({id,icon, description}: PaymentMethodProps) {
   const {register} = useFormContext()
    return(
    <PaymentMethodContainer>
         <input id={id} {...register("paymentmethod")} value={id} type="radio" name="paymentmethod"/>
        <label htmlFor={id}>
            <ContentContainer>
            {icon}
            <span>{description}</span>
            </ContentContainer>
        </label>
     
    </PaymentMethodContainer>
   ) 
}  