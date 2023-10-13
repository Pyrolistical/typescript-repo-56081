import { useForm } from "react-hook-form";
import { Prisma } from "./client";

export default function Home() {
  const form = useForm<Prisma.UserCreateInput>();

  return form.register("email");
}
