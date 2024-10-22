import styled from "styled-components";

export const LoginMobile = styled.div`
  display: flex;
  width: 100%;
  height: 100lvh;
  padding: 0px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #f5f5f5;
`;

export const ButtonSection = styled.div`
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
  transition: 1s ease-in-out;

  @media (max-width: 450px) {
    ${LoginMobile} {
      display: flex;
      flex-direction: column;
    }
    background-color: #ffffff;
  }
`;
