"use client";

import { NavigationBar } from "@/components";
import navigationOptions from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { NoMobileDevice } from "@/screens/NoMobileDevice";
import { Homepage } from "@/screens/home";
import { useApp } from "@/utils";

export default function Home() {
  const { isMobile } = useApp();

  if (!isMobile) {
    return <NoMobileDevice />;
  }

  return (
    <>
      <FlexContainer $backgroundColor={"#F5F5F5"} $full={true}>
        <Homepage />
        <NavigationBar
          color={"#F8FCF6"}
          $highlightTextColor={"#7AC143"}
          options={navigationOptions}
        />
      </FlexContainer>
    </>
  );
}
