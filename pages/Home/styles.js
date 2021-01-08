import styled from "styled-components";

export const Container = styled.body`
    background-color: var(--color-background);
    max-width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 767px) {
        img{
            min-height: 30vh;
            width: auto;
        }
    }
`;