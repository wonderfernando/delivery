import styled from "styled-components";

export const OrderConfirmedContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    margin-top: 5rem;
    h1{
        color: ${({theme})=> theme.colors["brand-yellow-dark"]};
    }
    >section{
        display: flex;
        align-items: center;
        justify-content: space-between;

        img{

        }
    }
    @media (max-width:960px) {
        > section > img{
            display: none;
        }
        &{
            justify-content: center;
            align-items: center;
        }
    }
  
`

export const OrderDetailsConfiremed = styled.div`
    padding: 2.5rem;
    border-radius: 6px 36px 6px 36px;
    background: ${({theme})=>theme.colors["base-background"]};
    display: flex;
    flex-direction: column;
    gap: 2rem;
    position: relative;
    min-width: 32rem;
    border: 1px solid #dbac2c;
    &::before{
        content: "";
        inset: -1px;
        border-radius: 7px 37px 7px 37px;
        background: linear-gradient(102.89deg, #dbac2c 2.61%,#8047f8 98.76%);
    }
`