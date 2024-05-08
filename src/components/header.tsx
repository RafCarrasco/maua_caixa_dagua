import { AccountMenu } from "./account-menu";
import { ThemeToggle } from "./theme/theme-toggle";

export function Header() {
  return (
    <div className="shadow-sm shadow-ring ">
      <div className="flex h-16 items-center gap-6 px-6">
        <h1 className="text-3xl font-mono">Visão Geral</h1>
        <div className=" ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
