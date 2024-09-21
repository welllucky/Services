import styled from "styled-components";

export const InfoUnityContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  min-height: 32px;
  gap: 10px;
  padding: 8px;
`;

export const InfoUnityDescription = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  max-width: 250px;
  width: 100%;
  line-height: 114%;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const InfoUnityIcon = styled.div`
  width: 32px;
  height: 32px;
  background-color: #d9d9d9;
  border-radius: 50%;
`;

export const InfoUnityId = styled.div`
  font-size: 1rem;
`;
