import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: var(--color-background);
  flex-direction: column;
  overflow: hidden;
  max-width: 100%;
  height: 100vh;

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
`;
