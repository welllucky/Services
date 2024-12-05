import { NoMobileDevicePage } from "@/screens";
import { getTextTheme } from "@/screens/NoMobileDevice/themeTitle";

const NoMobileDevice = () => {
  const theme = getTextTheme();
  const { text, title } = theme;

  return (
    <NoMobileDevicePage
      text={text}
      title={title}
    />
  );
};

export default NoMobileDevice;
