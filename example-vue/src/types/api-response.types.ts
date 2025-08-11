export interface ApiResponse<T> {
  meta: {
    status: Number;
    message: string;
  };
  data: T;
}
