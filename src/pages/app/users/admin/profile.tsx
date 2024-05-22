import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "@/contexts/auth";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { useState } from "react";
const waterTankSchema = z.object({
  latitude: z.string(),
  longitude: z.string(),
  waterTankName: z.string(),
  sensorAmount: z.number().min(1),
});

type ValidationSchema = z.infer<typeof waterTankSchema>;

export function AdminProfile() {
  const [error, setError] = useState<string | null>(null);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const { user } = useAuth();
  const navigator = useNavigate();

  const { register, handleSubmit } = useForm<ValidationSchema>({
    defaultValues: {
      latitude: "",
      longitude: "",
      waterTankName: "",
    },
  });

  async function onSubmit(submit: ValidationSchema) {
    setButtonDisabled(true);
    try {
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
    <>
      <div className="flex h-full flex-col items-center justify-around">
        <form
          action="POST"
          className="flex flex-col items-center space-y-12 rounded-md p-4 shadow-md shadow-ring"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            type="text"
            placeholder="Caixa d'Água"
            {...register("waterTankName")}
          />
          <Input type="text" placeholder="Latitude" {...register("latitude")} />
          <Input
            type="text"
            placeholder="Longitude"
            {...register("longitude")}
          />
          <Input
            type="number"
            placeholder="Quantidade de Sensores"
            {...register("sensorAmount")}
          />
          <Button
            type="submit"
            className="text-md flex items-center justify-center px-12 font-bold"
          >
            Adicionar Nova Caixa d'Água
          </Button>
        </form>
        <Button onClick={() => navigator("/dashboard/admin/manager-dashboard")}>
          Ir para Dashboard
        </Button>
      </div>
    </>
  );
}
