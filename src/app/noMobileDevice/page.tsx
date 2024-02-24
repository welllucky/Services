import { NoMobileDevicePage } from "@/screens";
import { getTextTheme } from "@/screens/no-mobile-device/themeTitle";

export default function NoDeviceMobile() {
  return <NoMobileDevicePage theme={getTextTheme()} />;
}
