import styled from "styled-components";

export const ButtonContainer = styled.button<{type:string}>`
    color: #fff;
    cursor: pointer;
    font-weight: 700;
    background: ${({theme})=> theme.colors["brand-yellow"]};
    border: none;
    border-radius: 6px;
    font-size: ${({theme})=> theme.textSizes["components-button-g"]};
    transition: 0.4s;
    line-height: 1.3rem;
    padding: 0.75rem 2.8rem;
    text-transform: uppercase;
    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }
    &:not(:disabled):hover{
        background: ${({theme})=> theme.colors["brand-yellow-dark"]};
    }
`