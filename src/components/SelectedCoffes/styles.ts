import styled from "styled-components";
import { SectionBaseStyle } from "../../pages/CompleteOrder/styles";

export const SelectedCoffesContainer = styled.div`
display: flex;
flex-direction: column;
gap: 0.75rem;
width: 40rem;
@media (max-width: 950px) {
    width: 100%;
    max-width: 900px;
}
`

export const DetailsContainer = styled(SectionBaseStyle)`
    border-radius: 6px 44px 6px 44px;
    display: flex;
    flex-direction: column;
`