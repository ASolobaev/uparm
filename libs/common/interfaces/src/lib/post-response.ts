export interface ApiResponseToPost<T> {
  timestamp: number;
  hash: string;
  message: string;
  result: T
}
