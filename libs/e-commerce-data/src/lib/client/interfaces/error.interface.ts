export interface ErrorInterface {
  headers: {
    normalizedNames: unknown;
    lazyUpdate: unknown;
  };
  status: number;
  statusText: string;
  url: string;
  ok: boolean;
  name: string;
  message: string;
  error: string;
}
