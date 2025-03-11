// eslint-disable-next-line import/no-unresolved
import { HttpAgentAbstractionProps, HTTPMethods, IHttpAbstract } from "@/types";

class HttpAbstraction implements IHttpAbstract {
  private readonly instance = fetch;

  private abortController: AbortController | null = null;

  private signal: AbortSignal | null = null;

  fetch(
    url: string,
    method: HTTPMethods,
    options: Partial<Omit<HttpAgentAbstractionProps, "url" | "method">>,
  ): Promise<Response> {
    this.abortController = new AbortController();
    this.signal = this.abortController.signal;

    return this.instance(url, {
      method: method as string,
      // eslint-disable-next-line no-undef
      ...(options?.headers && { headers: options.headers as HeadersInit }),
      ...(options?.body && { body: JSON.stringify(options.body) }),
      cache: options?.cache ?? "default",
      keepalive: options?.keepalive ?? false,
      // eslint-disable-next-line no-undef
      credentials: options?.credentials ?? "same-origin",
      referrer: options?.referrer ?? "",
      referrerPolicy: options?.referrerPolicy ?? "no-referrer-when-downgrade",
      signal: this.signal,
      next: {
        tags: options.tags,
        revalidate: options.revalidate,
      },
    });
  }

  abort(): void {
    if (this.signal && !this.signal.aborted) {
      this.abortController?.abort();
    }
  }
}

export default HttpAbstraction;
