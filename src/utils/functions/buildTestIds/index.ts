interface ITestIds {
  "data-testid": string;
}

export const buildTestIds = (id: string): ITestIds => {
  id = id.replace(/ /g, "-").toLowerCase();
  return { "data-testid": id };
};
