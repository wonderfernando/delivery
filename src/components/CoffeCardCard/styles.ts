import styled from "styled-components";

export const CoffeCardCardContainer = styled.div`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    border-bottom:  1px solid ${({theme})=>theme.colors["base-button"]};
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    >div{
        display: flex;
        align-items: center;
        gap: 1.25rem;
        img{
            width: 4rem;
            height: 4rem;
        }
    }
    >p{
        align-self: flex-start;
        font-weight: 700;
    }
`
export const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    height: 2rem;
    gap:0.5rem;
    margin-top: 0.5rem;
    >div{
        max-width: 4.5rem;
    }
`
export const ConfirmactionSectionContainer = styled.section`
    display: flex;
    flex-direction:column;
    gap: 0.75rem;
    >div{
        color: ${ ({theme}) => theme.colors["base-text"]};
        display: flex;
        justify-content: space-between;
    }
`
export const RemoveButton = styled.button`
    border: 0;
    height: 100%;
    padding: 0 0.5rem;
    display: flex;
    align-items: center;
    font-size: 0.75rem;
    border-radius: 6px;
    gap: 0.25rem;
    transition: 0.4s;
    background: ${ ({theme}) => theme.colors["base-button"] };
    color: ${ ({theme}) => theme.colors["base-text"] };
    svg{
        color: ${ ({theme}) => theme.colors["brand-purple"] };
    }
    &:hover{
        background: ${ ({theme}) => theme.colors["base-hover"] };
    }
`