interface CookieOptions {
  expires?: number | Date;
  path?: string;
  domain?: string;
  secure?: boolean;
  sameSite?: "Lax" | "Strict" | "None";
}

export const CookieManager = {
  set: (name: string, value: string, options: CookieOptions = {}): void => {
    if (typeof window === "undefined") {
      return;
    }
    const { expires, path = "/", domain, secure, sameSite = "Lax" } = options;

    let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}; path=${path};`;

    if (expires) {
      const date =
        typeof expires === "number"
          ? new Date(Date.now() + expires * 864e5)
          : expires;
      cookieString += ` expires=${date.toUTCString()};`;
    }

    if (domain) {
      cookieString += ` domain=${domain};`;
    }

    if (secure) {
      cookieString += " secure;";
    }

    cookieString += ` samesite=${sameSite};`;

    document.cookie = cookieString;
  },

  get: (name: string): string | null => {
    if (typeof window === "undefined") {
      return null;
    }

    const cookies = document.cookie.split("; ");
    // eslint-disable-next-line no-restricted-syntax
    for (const cookie of cookies) {
      const [key, value] = cookie.split("=");
      if (key === encodeURIComponent(name)) {
        // eslint-disable-next-line consistent-return
        return decodeURIComponent(value);
      }
    }
    return null;
  },

  remove: (name: string, options: CookieOptions = {}): void => {
    CookieManager.set(name, "", {
      ...options,
      expires: new Date(0),
    });
  },
};
