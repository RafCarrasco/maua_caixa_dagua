import { RouterProvider } from "react-router-dom";
import "./globals.css";
import { router } from "./routes";
import { ThemeProvider } from "./components/theme/theme-provider";
import { WaterTankProvider } from "./contexts/water-tank-provider";
export function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="front-theme">
      <WaterTankProvider>
        <RouterProvider router={router} />
      </WaterTankProvider>
    </ThemeProvider>
  );
}
