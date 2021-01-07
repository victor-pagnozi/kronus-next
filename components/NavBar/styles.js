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
    cursor: pointer;
  }

  @media screen and (max-width: 767px) {
    .control-nav {
      position: absolute;
      right: 20px;
      top: 20px;
      display: block;
      width: 30px;
      padding: 5px 0;
      border: solid #333;
      border-width: 3px 0;
      z-index: 2;
      cursor: pointer;
    }

    .control-nav:before {
      content: "";
      display: block;
      height: 3px;
      background: #333;
    }
  }
`;
