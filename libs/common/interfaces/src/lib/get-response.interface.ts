export interface ApiResponseToGet<T> {
  timestamp: number;
  message: string;
  result: T;
}
