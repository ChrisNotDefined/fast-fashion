import styled from "styled-components";

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1em;
  margin-bottom: 1em;
  > label {
    color: #DE1D8F;
    font-weight: bold;
    display: flex;
    flex-direction: column;

    > input {
      margin-top: 0.5em;
    }
  }
`;

export const ErrorMsg = styled.span`
  margin-top: 0.4em;
  font-weight: normal;
  font-size: 0.8em;
  background-color: #ffd4ed;
  color: #9c27b0;
  padding: 0.4em;
  border-radius: 0.4em;
`;
