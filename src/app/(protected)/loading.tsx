"use client";

import { Skeleton, SkeletonContainer } from "@/components";
import { PageContainer } from "@/styles";

const Loading = () => (
  <PageContainer>
    <SkeletonContainer>
      <div>
        <Skeleton type="text" />
      </div>
      <Skeleton type="page" />
    </SkeletonContainer>
  </PageContainer>
);

export default Loading;
