import type { User } from "./user.types";

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  user: User;
}
