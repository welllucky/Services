"use client";

import { PageContainer } from "@/styles";
import Image from "next/image";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <PageContainer>
      <Image
        width={120}
        height={120}
        alt="Services logo"
        src="/Icon.png"
      />
    </PageContainer>
  );
}
