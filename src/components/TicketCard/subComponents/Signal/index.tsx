import { Selo } from "@/assets";
import { buildTestIds } from "@/utils";
import { SignalContainer } from "./styles";

export const Signal = () => {
  return (
    <SignalContainer {...buildTestIds("icone-selo")}>
      <Selo />
    </SignalContainer>
  );

};