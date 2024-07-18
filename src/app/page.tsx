"use client";

import { NavigationBar } from "@/components";
import navigationOptions from "@/components/NavBar/data";
import { FlexContainer } from "@/components/PageStruct/style";
import { Homepage } from "@/screens";

const Home = () => {
  return (
    <FlexContainer
      $backgroundColor="#F5F5F5"
      $full>
      <Homepage />
      <NavigationBar
        color="#F8FCF6"
        $highlightTextColor="#7AC143"
        options={navigationOptions}
      />
    </FlexContainer>
  );
};

export default Home;
