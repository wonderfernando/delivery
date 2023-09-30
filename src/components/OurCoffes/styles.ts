import styled from "styled-components";

export const OurCoffesContainer = styled.section`
    width: 100%;
    margin-top: 2rem;
`

export const CoffeeList = styled.div`
width: 100%;
display: grid;
grid-template-columns: repeat(4, 1fr);
row-gap: 2.5rem;
column-gap: 2rem;
margin-top: 3.5rem;
@media (max-width:900px) {
    grid-template-columns: repeat(3, 1fr);  
}
@media (max-width:670px) {
    grid-template-columns: repeat(2, 1fr);  
}
@media (max-width:500px) {
    grid-template-columns: 1fr;  
}


`