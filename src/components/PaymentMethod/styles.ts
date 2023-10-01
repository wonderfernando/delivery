import styled from "styled-components";

export const PaymentMethodContainer = styled.div`
   
    input{
        visibility: hidden;
        appearance: none;
    }
    input:checked + label div{
        background: ${({theme})=>theme.colors["brand-purple-light"]};
        border: 1px solid ${({theme})=>theme.colors["brand-purple"]};
    }
    @media (max-width:500px){
        width: 100%;
    }
`

export const ContentContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0 1rem;
    gap: 0.75rem;
    font-size: 0.75rem;
    height: 3rem;
    border-radius: 6px;
    cursor: pointer;
    transition: 0.4s;
    background: ${({theme})=> theme.colors["base-button"]};
    color: ${({theme})=> theme.colors["base-text"]};
    user-select: none;
    &:hover{
        background: ${({theme})=> theme.colors["base-hover"]};
    }
    svg{
        color: ${({theme})=> theme.colors["brand-purple"]};
    }
    @media (max-width:500px){
        width: 100%;
    }
`