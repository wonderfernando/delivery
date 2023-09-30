import CompleteOrderForm from "../../components/CompleteOrderForm"
import SelectedCoffes from "../../components/SelectedCoffes"
 import {FormProvider,useForm} from "react-hook-form"
import { CompleteOrderContainer } from "./styles"
import * as zod from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
 import {useNavigate} from "react-router-dom"

 enum method{
    credit= "credit",
    debit= "debit",
    money= "money"
 } 
const confirOrderFormValidate = zod.object({
        cep: zod.string().min(1,"Campo obrigatorio"),
        street: zod.string().min(1,"Informe a Rua"),
        numero: zod.string().min(1,"Informe o numero"),
        complemento: zod.string(),
        bairro: zod.string(),
        city: zod.string(),
        uf: zod.string(),
        paymentmethod: zod.nativeEnum(method,{
            errorMap : () => {
                return {message: "Informe o metodo de pagamento"}
            }
        })
})
export type formDataType = zod.infer<typeof confirOrderFormValidate>

export default function CompleteOrder() {
    const navigate = useNavigate()
   const confirmForm = useForm<formDataType>({
    resolver: zodResolver(confirOrderFormValidate)
   })
   const {handleSubmit} = confirmForm
 
   function onSubmitOrder(data: formDataType) {
        navigate("/order-confirmed",{
            state: {
                data: data
            }
        })
   } 
   return (
        <FormProvider {...confirmForm} >
            <CompleteOrderContainer onSubmit={handleSubmit(onSubmitOrder)} className="container">
                <CompleteOrderForm/>
                <SelectedCoffes/>
            </CompleteOrderContainer>
        </FormProvider>
    )
}