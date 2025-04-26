import { NoMobileDevicePage } from "@/screens";
import { getTextTheme } from "@/screens/NoMobileDevice/themeFn";

const NoMobileDevice = async () => {
  const theme = await getTextTheme();
  const { text, title } = theme;

  return (
    <NoMobileDevicePage
      text={text}
      title={title}
    />
  );
};

export default NoMobileDevice;
