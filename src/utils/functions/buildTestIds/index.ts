interface ITestIds {
	"data-testid": string;
	"data-cy": string;
}

export const buildTestIds = (id: string): ITestIds => {
	return { "data-testid": id, "data-cy": `[data-cy='${id}']` };
};
