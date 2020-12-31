import styled from "styled-components";

export const ContainerAnuncios = styled.div`
    display: grid;
    justify-content: center;
    align-items: flex-start;
    grid-template-columns: repeat(3, 1fr);
    background-color: var(--background-white);
    margin: 30px 0;
    width: 80%;
    border-radius: 2px;
    box-shadow: 0 0 0.5em #d3d3d3;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
`;

export const Anuncio = styled.div`
    flex-basis: 20%;
    width: 200px;
    height: 350px;
    border: 1px solid var(--color-primary-lighter);
    margin: 20px 40px;
    
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