import styled from "styled-components";

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-footer);
    height: 100px;
    width: 100%;
    bottom: 0;

    a{
        color: var(--color-text);
        transition: 0.3s;
    }
    a:hover{
        transition: 0.3s;
        opacity: 80%;
    }
`;