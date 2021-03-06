import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-footer);
    line-height: 5.4vh;
    width: 100%;
    font-size: 1.6rem;

    a{
        color: var(--color-text);
        transition: 0.3s;
    }
    a:hover{
        transition: 0.3s;
        opacity: 80%;
    }
`;