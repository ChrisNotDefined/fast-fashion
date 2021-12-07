import styled from "styled-components";

export const HTMLInput = styled.input`
  display: none;
`;

export const Img = styled.img`
  border: none;
  border-width: 3px;
  border-style: solid;
  border-color: #de1d8f;
  background-image: url("https://i.postimg.cc/mgYftKRg/disenador-de-moda.jpg");
  width: 7em;
  height: 7em;
  padding: 0;
  border-radius: 60em;
`;

export const InputsContainer = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
  label {
    color: #de1d8f;
    font-weight: bold;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 0.5em;
      border-width: 3px;
      border-style: solid;
      border-color: #de1d8f;
      border-radius: 10px;
    }
  }
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 25em;
  min-height: 100vh;
  margin: 0 auto;

  h1 {
    color: #de1d8f;
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }
`;

export const ButtonsContainer = styled.div`
  margin: auto 0;
  margin-top: 4em;
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  gap: 0.5em;

  button {
    width: 80%;
    margin: auto;
    font-weight: bold;
    border-radius: 10px;
    border-style: solid;
    border-color: #de1d8f;
  }
`;
