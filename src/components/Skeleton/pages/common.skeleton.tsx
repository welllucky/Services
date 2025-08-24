"use client";

// eslint-disable-next-line import/no-unresolved
import { PageContainer } from "@/styles";

import { Skeleton } from "../Skeleton.component";
import { SkeletonContainer } from "../Skeleton.styles";

const CommonPageSkeleton = () => {
  return (
    <PageContainer>
      <SkeletonContainer width="100%" padding="1rem">
        <div style={{ display: "flex", alignItems: "start", width: "100%" }}>
          <Skeleton type="text" height="1.5rem" width="8rem" />
        </div>
        <Skeleton type="page" />
      </SkeletonContainer>
    </PageContainer>
  );
};

export default CommonPageSkeleton;
