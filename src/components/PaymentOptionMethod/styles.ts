import styled from "styled-components";


export const PaymentOptionMethodContainer = styled.div`
display: flex;
flex-direction: column;
gap: .4rem;
>div{
display: flex;
align-items: center;
justify-content: space-between;
@media (max-width:500px){
    flex-direction: column;
}
}
>p{
    color: ${({theme})=>theme.colors["base-error"]};
}
`