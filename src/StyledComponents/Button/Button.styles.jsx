import styled from "styled-components";

export const Button = styled.button`
  border: solid white 0.2px;
  color: white;
  padding: 1em 2em;
  font-size: 0.8em;
  font-weight: bold;
  background: #FD0581;
  transition: box-shadow 200ms;

  :focus {
    outline: none;
  }

  :hover, :focus {
    box-shadow: #fffa 0 0 0px 2px;
  }
`;