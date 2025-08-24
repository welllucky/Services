const baseUrl = process.env.APIS_BASE_URL ?? "";

export const resolveUrl = `${baseUrl}/v1/core/resolve`;
export const ticketUrl = `${baseUrl}/v1/core/tickets`;
export const accountUrl = `${baseUrl}/v1/account`;
export const userUrl = `${baseUrl}/v1/core/users`;
export const sectorUrl = `${baseUrl}/v1/core/sector`;
export const roleUrl = `${baseUrl}/v1/core/role`;
export const sessionUrl = `${baseUrl}/v1/core/sessions`;
export const accessUrl = `${baseUrl}/v1/auth`;
