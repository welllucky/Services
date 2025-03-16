"use client";

import { Skeleton } from "..";
import { SkeletonContainer } from "../Skeleton.styles";

const TicketPageSkeleton = () => (
  <SkeletonContainer
    alignItems="start"
    gap="1rem">
    <Skeleton
      type="text"
      width="5rem"
    />
    <Skeleton
      type="text"
      width="18rem"
      height="1.8rem"
    />
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
        alignItems: "start",
      }}>
      <Skeleton
        height="56px"
        width="100%"
      />
      <Skeleton
        height="128px"
        width="100%"
      />
      <div style={{ display: "flex", gap: "1rem", width: "100%" }}>
        <Skeleton
          height="56px"
          width="70%"
        />
        <Skeleton
          height="56px"
          width="30%"
        />
      </div>
      <Skeleton
        height="56px"
        width="100%"
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          width: "100%",
        }}>
        <Skeleton
          height="16px"
          width="20%"
        />
        <Skeleton
          height="32px"
          width="100%"
        />
        <Skeleton
          height="32px"
          width="100%"
        />
        <Skeleton
          height="32px"
          width="100%"
        />
        <Skeleton
          height="32px"
          width="100%"
        />
      </div>
    </div>
  </SkeletonContainer>
);

export default TicketPageSkeleton;
