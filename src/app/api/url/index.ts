const baseUrl = process.env.BASE_URL ?? "";

const apiBaseUrl = `${baseUrl}api/`;

export const issueUrl = `${apiBaseUrl}issues/`;
export const ticketUrl = `${apiBaseUrl}tickets/`;
