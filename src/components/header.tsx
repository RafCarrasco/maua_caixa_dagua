import { Link } from "react-router-dom";
import { AccountMenu } from "./account-menu";
import { ThemeToggle } from "./theme/theme-toggle";
import { HomeIcon } from "lucide-react";

interface HeaderProps {
  headerTitle: string;
}
export function Header({ headerTitle }: HeaderProps) {
  return (
    <div className="shadow-sm shadow-ring ">
      <div className="flex h-16 items-center gap-6 px-8">
        <h1 className="font-mono text-3xl">{headerTitle}</h1>
        <div className="ml-auto flex items-center gap-4">
          <Link to={"/dashboard"}>
            <HomeIcon size={32} alignmentBaseline="middle" />
          </Link>
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
