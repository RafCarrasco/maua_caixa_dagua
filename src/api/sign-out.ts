import { useNavigate } from "react-router-dom";
import { removeToken } from "./login";

export function logout(): void {
    removeToken();
    const navigate = useNavigate();
    navigate("/");
}