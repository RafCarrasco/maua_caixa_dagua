import { useTheme } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  const { theme } = useTheme();
  return (
    <div className="flex justify-between border-b-2 bg-card p-2 shadow-sm shadow-ring">
      {theme === "dark" ? (
        <img
          height={50}
          width={150}
          src="/public/logo-maua.png"
          alt=""
          className="height-10 align-middle"
        />
      ) : (
        <img
          height={50}
          width={150}
          src="/public/logo-IMT.png"
          alt=""
          className="height-10 align-middle"
        />
      )}

      <div className="flex h-16 items-center gap-6 px-6">
        <div className=" ml-auto flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
