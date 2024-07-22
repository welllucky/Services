import { NoMobileDevicePage } from "@/screens";
import { getTextTheme } from "@/screens/NoMobileDevice/themeTitle";

const NoDeviceMobile = () => {
  return <NoMobileDevicePage theme={getTextTheme()} />;
};

export default NoDeviceMobile;
