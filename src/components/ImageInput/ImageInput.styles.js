import styled from "styled-components";

export const HTMLInput = styled.input`
  display: none;
`;

export const ImgButton = styled.button`
  border: none;
  background-color: pink;
  width: 7em;
  height: 7em;
  padding: 0;
  border-radius: 60em;
  cursor: pointer;
  transition: box-shadow 100ms;

  :hover, :focus {
    box-shadow: 0 0 0 3px #F005;
  }

  img {
    border-radius: inherit;
    display: block;
    width: 100%;
    height: 100%;
    margin: auto;
    object-fit: cover;
  }
`;
