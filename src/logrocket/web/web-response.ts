type WebResponse = {
  reqId: string,
  status?: number,
  headers: Record<string, (string | undefined)>,
  body?: string,
  method: string
};

export type {
  WebResponse
};
