import styled from "styled-components";

export const ContainerAnuncios = styled.div`
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
`;

export const Anuncio = styled.div`
    width: 200px;
    height: 350px;
    border: 1px solid var(--color-primary-lighter);
    margin: 20px 10px;
    
    img{
        max-width:100% !important;
        height: auto;
    }

    h2{
        font: 500 2rem 'Poppins', sans-serif;
        margin: 0.4rem 0.7rem;
    }
    
    .descricao{
        font: 400 1.4rem 'Poppins', sans-serif;
        margin: 0.1rem 0.7rem;
    }
`;