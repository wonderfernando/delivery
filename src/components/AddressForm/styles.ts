import styled from "styled-components";

export const AddressFormContainer = styled.div`
width: 100%;
display: grid;
grid-template-columns: 12.5rem 17.25rem 3.75rem;
column-gap:.75rem;
row-gap:1rem;
grid-auto-flow: auto;

    .cep{
        grid-column: span 3;
        max-width: 12.5rem;
    }
    .street{
        grid-column: span 3;
    }
    .complemento{
        grid-column: span 2;
    }

`