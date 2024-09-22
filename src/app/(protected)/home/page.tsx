"use client";

import { NavigationBar } from "@/components";

import navigationOptions from "@/components/NavBar/data";

import { Homepage } from "@/screens";

const Home = () => (
  <>
    <Homepage />

    <NavigationBar
      color="#F8FCF6"
      $highlightTextColor="#7AC143"
      options={navigationOptions}
    />
  </>
);

export default Home;
