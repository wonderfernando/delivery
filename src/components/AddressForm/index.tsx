import { formDataType } from "../../pages/CompleteOrder";
import Input from "../Input";
import { AddressFormContainer } from "./styles";
import {useFormContext} from "react-hook-form"
export default function AddressForm() {
    const {register, formState}  = useFormContext<formDataType>()
    const {errors} = formState
    return (
        <AddressFormContainer>
            <Input errors={errors.cep?.message} placeholder="CEP" {...register("cep")} className="cep"   />
            <Input errors={errors.street?.message} placeholder="Rua" {...register("street")}  className="street"  />
            <Input errors={errors.numero?.message} placeholder="Numero" {...register("numero")}   />
            <Input placeholder="Complemento" {...register("complemento")}  className="complemento"/>
            <Input  placeholder="Bairro" {...register("bairro")} />
            <Input  placeholder="Cidade" {...register("city")}  />
            <Input  placeholder="UF" {...register("uf")} />
        </AddressFormContainer>
    )
}