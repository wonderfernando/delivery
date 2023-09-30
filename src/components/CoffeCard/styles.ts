import styled from "styled-components";
import { RegularText, TitleText } from "../Typograph";

export const CoffeCardContainer = styled.div`
    width: 100%;
    background: ${ ({theme}) => theme.colors["base-card"] };
    padding: 1.25rem;
    border-radius: 6px 36px 6px 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0;
text-align: center;
    img{
        margin-top: -1.25rem;
    }
`
export const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
   
  > div{
    display: flex;
    gap: 3px;
    align-items:center;
    p{
        line-height: 0.75rem;
    }
 }
`
export const Name = styled(TitleText).attrs({
    size: "s",
    color: "subtitle",
    weight :700 ,
})`
    
margin-bottom: 0.5rem;
`
export const Description = styled(RegularText).attrs({
    size: "s",
    color: "text",
  
})`
    
margin-bottom: 2rem
`
export const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    margin-top: 1rem;
    margin-bottom: 1.25rem;
    justify-content: center;
    flex-wrap: wrap;

    span{
        background-color: ${({theme})=> theme.colors["brand-yellow-light"]};
        color: ${({theme})=> theme.colors["brand-yellow-dark"]};
        font-size: ${({theme})=> theme.textSizes["components-tag"]};
        text-transform: uppercase;
        padding: 0.25rem 0.5rem;
        border-radius: 999px;
        font-weight: 700;
    }
`
export const AddCardWrapper = styled.div`
    width: 7.5rem;
   >button{
    width: 2.375rem;
    height: 2.375rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.3rem;
    border-radius: 6px;
    border: none;
    background-color: ${({theme})=> theme.colors["brand-purple-dark"]};
    color: ${({theme})=> theme.colors["base-card"]}; 
    transition: .4s;
    &:hover{
        background-color: ${({theme})=> theme.colors["brand-purple"]};
    }
   }
`