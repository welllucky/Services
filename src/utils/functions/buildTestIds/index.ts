interface ITestIds {
  "data-testid": string;
}

export const buildTestIds = (id: string): ITestIds => {
  // eslint-disable-next-line no-param-reassign
  id = id.replace(/ /g, "-").toLowerCase();
  return { "data-testid": id };
};
