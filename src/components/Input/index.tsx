import React, { forwardRef } from "react";
import { InputStyledContainer, InputWrapper } from "./styles";
import { RegularText } from "../Typograph";

type InputType = React.InputHTMLAttributes<HTMLInputElement> & {
    errors?: string,
    className?:string
}
 
const Input = forwardRef<HTMLInputElement, InputType>(({className,errors,...props} , ref) =>{
        return  (
            <InputWrapper className={className}>
                <InputStyledContainer errors={errors} ref={ref} {...props}/>
                {errors &&<RegularText $size="s">{errors}</RegularText>}
            </InputWrapper>
        )
})
export default Input