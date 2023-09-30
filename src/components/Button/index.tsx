import { ReactNode } from "react";
import { ButtonContainer } from "./styles";

 
export default function Button({children,type}: {children: ReactNode,type: string}) {
    return (
        <ButtonContainer type={type}>{children}</ButtonContainer>
    )
}