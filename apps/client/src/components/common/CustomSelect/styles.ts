import styled from "styled-components";

export const SelectComponent = styled.select`
  width: 100%;
  height: 100%;
  padding-top: 4px;
  outline: 0;
  border: none;
  font-weight: 400;
  font-size: 1rem;
  line-height: 24px;
  align-items: center;
  letter-spacing: 0.5px;
  resize: none;
  background: transparent;
  color: #77757b;
`;

export const CustomOption = styled.option`
  display: flex;
  align-items: center;
  background-color: #ebf6e3;
  padding-bottom: 10px;
  width: 20px;
  border-radius: 0;
  border: none;
  font-size: 16px;
`;
