import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
display: flex;
gap: 2rem;
justify-content: space-between;
@media (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
 
`
export const SectionBaseStyle = styled.div`
width: 100%;
background: ${({theme})=> theme.colors["base-card"]};
border-radius: 6px;
padding: 2.5rem;

`

