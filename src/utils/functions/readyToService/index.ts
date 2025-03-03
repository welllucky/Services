import { enableMapSet, enablePatches } from "immer";

export const readyToService = async () => {
  // eslint-disable-next-line no-console
  console.log("3, 2, 1... Ready to service!");
  enableMapSet();
  enablePatches();
};
