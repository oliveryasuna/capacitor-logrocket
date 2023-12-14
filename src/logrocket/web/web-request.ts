type WebRequest = {
  reqId: string,
  url: string,
  headers: Record<string, (string | undefined)>,
  body?: string,
  method: string,
  referrer?: string,
  mode?: string,
  credentials?: string
};

export type {
  WebRequest
};
