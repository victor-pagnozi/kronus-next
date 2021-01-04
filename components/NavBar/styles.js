import styled from "styled-components";

export const ContainerNav = styled.header`
  height: 70px;
  background-color: var(--color-primary);
  top: 0%;
  width: 100%;

  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    color: #fff;
    font: 600 2rem "Poppins", sans-serif;
    text-decoration: none;
    transition: 0.2s;
  }

  a:hover {
    transition: 0.2s;
    opacity: 0.7;
  }

  .logo {
    height: 100%;
  }

  img {
    max-width: 100% !important;
    max-height: 100% !important;
  }
`;
