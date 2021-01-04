import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-background);
  flex-direction: column;
  overflow: hidden;
  position: relative;
  max-width: 100%;
  height: 100%;
  margin: 30px 0;

  .container-cadastro{
    background-color: var(--background-white);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    border-radius: 4px;
    box-shadow: 0 0 0.5em #d3d3d3;
    padding-bottom: 30px;
  }

  label {
    margin-right: 20px;
    bottom: 0;
    color: #000;
  }

  label,
  input,
  textarea {
    font: 300 18px "Poppins", sans-serif;
    width: 50rem;
  }

  div {
    margin-top: 10px;
  }

  .label-float > div {
    position: relative;
  }

  .text-area {
      display: grid;
      justify-content: center;
      align-items: center;
  }

  .desc-canvas{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 50px;
  }

  .desc-canvas span{
    font: 500 16px 'Roboto', sans-serif;
    color: var(--color-primary);
    text-transform: uppercase; 
  }
  .desc-canvas p{
    font: 200 14px 'Roboto', sans-serif;
    font-style: italic;
    margin-top: 8px;
    color: var(--color-gray);
  }

  .button-step{
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
  }

  .btn{
    width: 10rem;
  }
`;
