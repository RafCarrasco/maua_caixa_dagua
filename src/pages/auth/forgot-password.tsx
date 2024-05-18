import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import {
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { CardContainer } from "./components/card-container";
import { CardHeaderContainer } from "./components/card-header";
import { CardContentContainer } from "./components/card-content";
import { CardFooterContainer } from "./components/card-footer";
import { CustomInput } from "./components/custom-input";

export function ForgotPassword() {
  return (
    <CardContainer className="flex h-[31.75rem] w-[31.25rem] flex-col  gap-12 rounded-2xl border-0 px-4 shadow-lg shadow-ring">
      <CardHeaderContainer className="flex items-center">
        <CardTitle>Esqueci minha senha</CardTitle>
      </CardHeaderContainer>
      <CardContentContainer className="flex flex-col gap-8">
        <div className="flex items-center gap-2 space-x-4">
          <Label htmlFor="email" className="text-lg">
            <Mail size={24} />
          </Label>
          <CustomInput
            id="email"
            type="email"
            placeholder="Digite seu email"
            autoComplete="email"
            autoFocus
            required
          />
        </div>
      </CardContentContainer>
      <CardFooterContainer className="flex flex-1 flex-col items-center justify-between">
        <Button className="text-md w-full font-bold shadow-sm shadow-gray-light ">
          Redefinir
        </Button>
        <Link to={"/login"}>
          <span className="text-sm font-bold underline">
            Voltar a tela de login
          </span>
        </Link>
      </CardFooterContainer>
    </CardContainer>
  );
}
