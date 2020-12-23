import styled from "styled-components";

export const Container = styled.body`
    background-color: var(--color-background);
    max-width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ImgDivulgacao = styled.div`
    width: 100vw;
    height: 40%;
    background-size: cover;

    img{
        width: 100%;
        height: 350px;
    }
`;