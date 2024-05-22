import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Key } from "lucide-react";
import { CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Link, useNavigate } from "react-router-dom";
import { CardContainer } from "./components/card-container";
import { CardHeaderContainer } from "./components/card-header";
import { CardContentContainer } from "./components/card-content";
import { CardFooterContainer } from "./components/card-footer";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { CustomInput } from "./components/custom-input";
import { useAuth } from "@/contexts/auth";

const validationSchema = z.object({
  username: z.string().email(),
  password: z.string(),
});

type ValidationSchema = z.infer<typeof validationSchema>;

export function Login() {
  const [error, setError] = useState<string | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigator = useNavigate();
  const { signIn } = useAuth();
  const { register, handleSubmit } = useForm<ValidationSchema>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(submit: ValidationSchema) {
    setButtonDisabled(true);
    try {
      await signIn(submit.username, submit.password);
      setError(null);
      navigator("/dashboard");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
    setButtonDisabled(false);
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
          {error && <div className="text-red-500 text-center">{error}</div>}
          <div className="flex items-center gap-2 space-x-4">
            <Label htmlFor="email" className="text-lg">
              <Mail size={24} />
            </Label>
            <CustomInput
              {...register("username", { required: true })}
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
            disabled={buttonDisabled}
            type="submit"
            className="text-md w-full font-bold"
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
