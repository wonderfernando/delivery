import styled from "styled-components";
import { SectionBaseStyle } from "../../pages/CompleteOrder/styles";

export const CompleteOrderFormContainer = styled.div`
display: flex;
flex-direction: column;
gap: .875rem;
width: 40rem;
@media (max-width: 950px) {
    width: 100%;
    max-width: 900px;
}
`


export const FormSectionContainer = styled(SectionBaseStyle)`
    display: flex;
    flex-direction: column;
    gap: 2rem;

`