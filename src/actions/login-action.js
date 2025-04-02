"use server";

import { signIn } from "@/auth";
import { redirect } from "next/navigation";

export const loginAction = async  (formData) => {
  const email = formData.get("email");
  const password = formData.get("password");

  console.log(email)
  console.log(password)


  await signIn("credentials", {
    email,
    password,
    redirect: false,
  });
  redirect("/")

};