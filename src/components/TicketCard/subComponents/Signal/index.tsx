import { StampIcon } from "@/assets";
import { buildTestIds } from "@/utils";
import { SignalContainer } from "./styles";

export const Signal = () => (
  <SignalContainer {...buildTestIds("icone-selo")}>
    <StampIcon />
  </SignalContainer>
);
