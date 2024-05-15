import { Button } from "@/components/ui/button";
import { Mail, Key } from "lucide-react";
import { CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { CardContainer } from "./components/card-container";
import { CardHeaderContainer } from "./components/card-header";
import { CardContentContainer } from "./components/card-content";
import { CardFooterContainer } from "./components/card-footer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { CustomInput } from "./components/custom-input";

const validationSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(submit: ValidationSchema) {
    console.log(submit);
  }

  return (
    <CardContainer>
      <CardHeaderContainer>
        <CardTitle>Realizar Login</CardTitle>
      </CardHeaderContainer>
      <CardContentContainer>
        <form
          action="POST"
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-stretch gap-8"
        >
          <div className="flex items-center gap-2 space-x-4">
            <Label htmlFor="email" className="text-lg">
              <Mail size={24} />
            </Label>
            <CustomInput
              {...register("email", { required: true })}
              id="email"
              type="email"
              placeholder="joao@exemplo.com"
              autoComplete="email"
              autoFocus
              required
            />
          </div>
          <div className="flex items-center gap-2 space-x-4">
            <Label htmlFor="password" className="text-lg">
              <Key size={24} />
            </Label>
            <CustomInput
              {...register("password", { required: true })}
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <Button
            type="submit"
            className="text-md w-full font-bold shadow-sm shadow-gray-light "
          >
            Entrar
          </Button>
        </form>
      </CardContentContainer>
      <CardFooterContainer className="flex-col justify-between">
        <Link to={"/login/forgot-password"}>
          <span className="text-sm font-bold underline">
            Esqueceu a senha? Redefinir
          </span>
        </Link>
      </CardFooterContainer>
    </CardContainer>
  );
}
