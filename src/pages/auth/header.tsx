import { AccountMenu } from "@/components/account-menu";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  return (
    <div className="flex justify-between border-b-2 bg-card p-2 shadow-sm shadow-ring">
      <img
        src="/public/logo-maua.png"
        alt=""
        className="height-10 align-middle"
      />
      <div className="flex h-16 items-center gap-6 px-6">
        <div className=" ml-auto flex items-center gap-2">
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
