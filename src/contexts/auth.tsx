import { loginUser } from "@/api";
import { getToken, LoginResponseProps, removeToken } from "@/api/login";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextProps {
  isAuthenticated: boolean;
  signIn: (username: string, password: string) => Promise<void>;
  logout: () => void;
  user: LoginResponseProps | null;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<LoginResponseProps>({
    isAdmin: false,
    username: "",
    email: "",
  });
  useEffect(() => {
    const token = getToken();
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const signIn = async (username: string, password: string) => {
    try {
      let response = await loginUser(username, password);
      if (response) {
        setIsAuthenticated(true);
        setUser({
          username: response?.username,
          isAdmin: response?.isAdmin,
          email: response?.email,
        });
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const logout = () => {
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, logout, user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextProps => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
