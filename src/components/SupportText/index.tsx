import styled from "styled-components";

export const SupportText = styled.span<{ color?: string }>`
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: ${({ color }) => color ?? "#1c1b1f"};
  font-weight: 500;
`;

export const ErrorText = styled(SupportText)`
  color: #b3261e;
`;

export const WarningText = styled(SupportText)`
  color: #f2994a;
`;
