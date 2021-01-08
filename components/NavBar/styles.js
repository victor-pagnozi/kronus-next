import styled from "styled-components";

export const ContainerNav = styled.header`
  background-color: var(--color-primary);
  display: flex;

  .menu {
    margin: 0;
    padding: 0;
    width: 100%;
    list-style: none;
    overflow: hidden;
  }

  .menu li a {
    display: block;
    color: #fff;
    padding: 20px;
    font: 600 2rem "Poppins", sans-serif;
    text-decoration: none;
    transition: 0.2s;
    background-color: var(--color-primary);
  }

  a:hover {
    transition: 0.2s;
    opacity: 0.7;
  }

  .logo {
    height: 100%;
  }

  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
  }

  .menu-btn {
    display: none;
  }

  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }

  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }

  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }

  .menu-icon .navicon:before {
    top: 5px;
  }

  .menu-icon .navicon:after {
    top: -5px;
  }

  .menu-btn:checked ~ .menu {
    max-height: 240px;
  }

  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }

  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }

  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }

  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }

  @media screen and (min-width: 767px) {
    background-color: var(--color-primary);
    box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
    width: 100%;
    z-index: 3;
    display: flex;
    justify-content: space-around;
    align-items: center;

    img {
      max-width: 100% !important;
      max-height: 100% !important;
      cursor: pointer;
    }

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    .menu {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
    }
    .menu li a {
      font: 500 1.8rem "Poppins", sans-serif;
    }
  }

  @media (min-width: 48em) {
  }
`;
