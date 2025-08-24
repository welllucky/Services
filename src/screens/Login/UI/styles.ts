import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100dvh;
  padding: 40px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
`;

export const ActionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1rem;

  span,
  a {
    font-weight: 500;
    text-align: center;
  }
  span {
    font-size: 14px;
  }
  p {
    font-size: 16px;
    color: #131312;
  }

  p > a {
    color: #2b6c01;
    font-size: 16px;
  }
`;

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;

  @media (max-width: 450px) {
    ${LoginContainer} {
      display: flex;
      flex-direction: column;
    }
    background-color: #ffffff;
  }
`;
