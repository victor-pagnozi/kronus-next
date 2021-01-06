import styled from "styled-components";

export const ContainerContact = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 2.4rem 0;
  width: 100%;
  height: 100%;
  padding-top: 1.5rem;

  h2 {
    font: 500 3rem "Poppins", sans-serif;
    color: var(--color-dark);
  }

  h5 {
    font: 300 1.8rem "Poppins", sans-serif;
    color: var(--color-gray);
  }

  .label-float > div {
    position: relative;
  }
`;

export const FormContact = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  background-color: var(--background-white);
  width: 80%;
  height: 100%;
  padding: 2rem 8rem;
  border-radius: 4px;
  box-shadow: 0 0 0.5rem #d3d3d3;
  
  min-height: calc(76.6vh - 70px);

  h2{
      color: #000;
      font: 600 4rem "Poppins", sans-serif;
  }

  .texto-contato {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    margin-right: 50px;
  }

  p:nth-child(2) {
    font: 400 2.2rem "Poppins", sans-serif;
  }

  p:nth-child(3) {
    font: 300 1.5rem "Poppins", sans-serif;
  }

  .form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }

  form{
      width: 100%;
      display: flex;
      flex-direction: column;
  }

  button{
      align-self: flex-end;
      margin: 20px 0;
  }

  button:focus{
  }
`;
