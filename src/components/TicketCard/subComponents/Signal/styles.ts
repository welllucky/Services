import styled from "styled-components";

export const SignalContainer = styled.div`
  position: relative;
  width: 1rem;
  z-index: 2;
  top: 10px;
  left: 2px;

  & > svg {
    position: absolute;
    top: -10%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;
