"use client";

import { PageContainer } from "@/styles";
import Image from "next/image";

const Loading = () => {
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
};

export default Loading;
