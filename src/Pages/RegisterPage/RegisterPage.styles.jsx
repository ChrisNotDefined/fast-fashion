import styled from "styled-components";
import { FieldsContainer } from "../../StyledComponents/FieldsContainer";

export const FormContainer = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 25em;
  min-height: 100%;
  margin: 2em auto;

  & > ${FieldsContainer} {
    margin: auto 0;
  }

  h1 {
    color: #DE1D8F;
    font-weight: bold;
    display: flex;
    flex-direction: column;
  }

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
    border-radius: 10px;
    border-style: solid;
    border-color: #DE1D8F;
  }
`;
