import styled from "styled-components";

export const HTMLInput = styled.input`
  display: none;
`;

export const Img = styled.button`
  border: none;
  border-width: 3px;
  
  border-style: solid;
  border-color: #DE1D8F;
  background-image: url("https://i.postimg.cc/mgYftKRg/disenador-de-moda.jpg");
  width: 7em;
  height: 7em;
  padding: 0;
  border-radius: 60em;

  img {
    display: block;
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: cover;
  }
`;

export const InputsContainer = styled.div`
  margin: auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
  label {
    color: #DE1D8F;
    font-weight: bold;
    display: flex;
    flex-direction: column;

    input {
      margin-top: 0.5em;
      border-width: 3px;
      border-style: solid;
      border-color: #DE1D8F;
      border-radius: 10px;
    }
  }
`;

export const ErrorMsg = styled.span`
  margin-top: 0.4em;
  font-weight: normal;
  font-size: 0.8em;
  background-color: #112556AA;
  color: #73b9fc;
  padding: 0.4em;
  border-radius: 0.4em;
`;

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 25em;
  min-height: 100%;
  margin: 2em auto;
`;

export const ButtonsContainer = styled.div`
  margin-top: auto;
  margin-bottom: 5em;
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
    border-color: #DE1D8F;
  }
`;

