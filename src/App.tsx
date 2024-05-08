import { RouterProvider } from "react-router-dom";
import "./globals.css";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme/theme-provider";
export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="front-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
