import { NoMobileDevicePage } from "@/screens";
import { getTextTheme } from "@/screens/no-mobile-device/themeTitle";

const NoDeviceMobile = () => {
  return <NoMobileDevicePage theme={getTextTheme()} />;
};

export default NoDeviceMobile;
