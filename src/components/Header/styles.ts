import styled, { css } from "styled-components";


export const HeaderContainer = styled.header`
    width: 100%;
    height: 6.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: sticky;
    top: 0;
    left: 0;
    z-index: 9999;
    background: ${props=>props.theme.colors["base-background"]};
    > div{
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
`

export const HeaderButtonContainer = styled.div`
    display: flex;
    align-items: center;
    gap: .75rem;
`
interface HeaderButtonProps {
    $variant: "purple" | "yellow"
}
export const HeaderButton = styled.button<HeaderButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
    min-height: 2.3rem;
    height: 2.3rem;
    border: none;
    border-radius: 6px;
    padding: 0 0.5rem;
    position: relative;
    span{
        background: ${props => props.theme.colors[`brand-yellow-dark`]};
        color:#fff;
        width:1.25rem;
        height: 1.25rem;
        padding:0;
        display:flex;
        align-items:center;
        justify-content:center;
        border-radius:50%;
        position:absolute;
        right:0;
        top: calc(-1.25rem / 2);
        font-size: 0.75rem
    }
    font-size: ${({theme})=> theme.textSizes["text-regular-s"]};
    svg{
        color: ${props=> props.$variant == "purple" && props.theme.colors["brand-purple"]}
    }
    ${
        props => css`
           background: ${ props.theme.colors[`brand-${props.$variant}-light`]};
            color: ${props.theme.colors[`brand-${props.$variant}-dark`]}`
    }

   
`