import styled from "styled-components";



export const IconWrapper = styled.button.attrs({
    type:"button"
})`
    border:none;
    width: 0.875rem;
    height: 0.875rem;
    background-color:  transparent ;
    color: ${({theme})=>theme.colors["brand-purple"]};
   &:disabled{
    opacity : 0.4;
   }
   &:not(:disabled):hover{
    color:  ${({theme})=>theme.colors["brand-purple-dark"]};;
   }
`

export const QuantityInputContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    border-radius: 6px;
    background-color: ${({theme})=>theme.colors["base-button"]};
    padding: 0.5rem;

    input{
        text-align: center;
        background: none;
        border: 0;
        color: ${({theme})=>theme.colors["base-title"]};
        width: 100%;
        &:focus{
            outline: none;
        }
    }
`