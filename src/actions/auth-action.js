"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const loginAction = async (_, formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  redirect("/");
};