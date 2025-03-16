"use client";

// eslint-disable-next-line import/no-unresolved
import { PageContainer } from "@/styles";
import { Skeleton } from "..";
import { SkeletonContainer } from "../Skeleton.styles";

const CommonPageSkeleton = () => {
  return (
    <PageContainer>
      <SkeletonContainer width="100%">
        <div>
          <Skeleton type="text" />
        </div>
        <Skeleton type="page" />
      </SkeletonContainer>
    </PageContainer>
  );
};

export default CommonPageSkeleton;
