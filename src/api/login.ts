import { api } from "@/lib/axios";
import { jwtDecode } from "jwt-decode";

interface SignInProps {
  username: string;
  password: string;
}

export interface SignInResponseProps {
  token: string
}
export interface LoginResponseProps {
  email: string
  isAdmin: boolean
  username: string
}

export async function login({ username, password }: SignInProps): Promise<LoginResponseProps | undefined> {
  try {
    const response = await api.post<SignInResponseProps>('/login/user', { username, password });
    localStorage.setItem("auth_token", response.data.token);

    let responseDecoded = jwtDecode<LoginResponseProps>(response.data.token);
    return {
      email: responseDecoded.email,
      isAdmin: responseDecoded.isAdmin,
      username: responseDecoded.username,
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error.message);
      throw new Error("Email ou senha inválidos, por favor tente novamente.");
    }
    console.log("An unknown error occurred.");
    throw new Error("An unknown error occurred, please try again.");
  }
}

const TOKEN_KEY = 'auth_token';

export function getToken(): string | null {
  return localStorage.getItem(TOKEN_KEY);
}

export function removeToken(): void {
  localStorage.removeItem(TOKEN_KEY);
}
