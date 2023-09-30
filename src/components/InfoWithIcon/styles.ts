import styled from "styled-components";
 
export const InfoWithIconContainer = styled.div`
   display: flex;
   align-items: center;
   gap: 0.75rem;
`
interface IconBgProps{
    $iconBg: string
}
export const IconContainer = styled.div<IconBgProps>`
   width: 2rem;
   height: 2rem;
   border-radius: 999rem;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #fff;
   background-color: ${props=>props.$iconBg};
`
 