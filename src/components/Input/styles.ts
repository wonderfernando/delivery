import styled from "styled-components";
interface ErrorForm {
    errors?: string
}
export const InputStyledContainer = styled.input<ErrorForm>`
width: 100%;
    height: 2.625rem;
    border-radius: 4px;
    transition: 0.4s;
    font-size: 0.75rem;
    padding: 0 0.75rem;
    &:focus{
        border: 1px solid ${({theme})=>theme.colors["brand-yellow-dark"]};
    }
    &::placeholder{
        color: ${({theme})=>theme.colors["base-label"]};
    }
    color: ${({theme})=>theme.colors["base-text"]};
    border: 1px solid ${({theme,errors})=> errors ? theme.colors["base-error"] : theme.colors["base-button"]};
    background: ${({theme})=>theme.colors["base-input"]};
`

export const InputWrapper = styled.div`
display: flex;
flex-direction: column;
gap: .3rem;
>p {
    color: ${({theme})=> theme.colors["base-error"]};
}

`