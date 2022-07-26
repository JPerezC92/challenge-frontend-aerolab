export interface Repository<R> {
  (signal?: AbortSignal): R;
}
