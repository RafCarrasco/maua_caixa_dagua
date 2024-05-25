import { Link, useNavigate } from "react-router-dom";
import { AccountMenu } from "./account-menu";
import { ThemeToggle } from "./theme/theme-toggle";
import { HomeIcon, PersonStandingIcon } from "lucide-react";
import { useAuth } from "@/contexts/auth";

interface HeaderProps {
  headerTitle: string;
}
export function Header({ headerTitle }: HeaderProps) {
  const navigator = useNavigate();
  const { user } = useAuth();
  return (
    <div className="shadow-sm shadow-ring ">
      <div className="flex h-16 items-center gap-8 px-8">
        <h1 className="font-mono text-3xl" onClick={() => navigator(-1)}>
          {headerTitle}
        </h1>
        <div className="ml-auto flex items-center gap-8">
          <Link to={"/dashboard"}>
            <HomeIcon size={32} alignmentBaseline="middle" />
          </Link>
          {user?.isAdmin ? (
            <div className="">
              <Link to={"/dashboard/admin"} className="flex items-center">
                <span className="text-md font-bold">GMS</span>
                <PersonStandingIcon size={24} />
              </Link>
            </div>
          ) : (
            <>
              <Link to={"/profile"}>Profile</Link>
            </>
          )}
          <ThemeToggle />
          <AccountMenu />
        </div>
      </div>
    </div>
  );
}
