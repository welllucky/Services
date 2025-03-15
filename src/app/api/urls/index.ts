const baseUrl = process.env.APIS_BASE_URL ?? "";

export const resolveUrl = `${baseUrl}resolve`;
export const ticketUrl = `${baseUrl}tickets`;
export const accountUrl = `${baseUrl}account`;
export const userUrl = `${baseUrl}users`;
export const sectorUrl = `${baseUrl}sector`;
export const roleUrl = `${baseUrl}role`;
export const sessionUrl = `${baseUrl}sessions`;
