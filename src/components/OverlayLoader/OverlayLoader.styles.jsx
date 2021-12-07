import styled, { keyframes } from "styled-components";

export const SpinKF = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }

`;

export const OverlayRelativeContainer = styled.div`
  position: relative;
  margin: 0;
  display: block;
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: #ffacacd5;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 1.8em;
    font-weight: bold;
    color: #a7176b;
    i {
      animation: ${SpinKF} 500ms infinite;
    }
  }
`;
