import styled from "styled-components";
import introBg from "../../assets/intro-background.png"
import { TitleText } from "../Typograph";
export const IntroContainer = styled.section`
    width: 100%;
    display: flex;
    min-height:34rem;
    
    background: ${ () => `url(${introBg}) no-repeat center` };
    background-size: cover;
`
export const IntroContent = styled.section`
    display: flex;
    gap: 3.5rem;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 1000px) {
        h1{
           
        }
        p{
            
        }
        img{
            width: 25rem;
        }
    }
     @media (max-width: 1000px) {
        flex-direction: column;
        
     }
`
export const BenefitsContainer = styled.div`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2,1fr);
   row-gap: 1.25rem;
   margin-top: 4.25rem;
 
  
`
export const IntroTitle = styled(TitleText)`
   margin-bottom: 1rem;
`