import { RouterProvider } from "react-router-dom";
import "./globals.css";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ApplicationProvider } from "./contexts";
export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="front-theme">
      <ApplicationProvider>
        <RouterProvider router={router} />
      </ApplicationProvider>
    </ThemeProvider>
  );
}
