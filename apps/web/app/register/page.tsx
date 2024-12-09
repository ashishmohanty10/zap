"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signupSchema, signupSchemaType } from "@repo/common";
import axios from "axios";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";

export default function Register() {
  const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const router = useRouter();

  const register = useForm<signupSchemaType>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
    },
  });

  async function onSubmit(values: signupSchemaType) {
    try {
      const res = await axios.post(
        `${URL}/api/v1/user/register`,
        {
          email: values.email,
          name: values.name,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 201) {
        router.push("/dashboard");
      } else {
        console.log("Register failed: Please try again after some time");
      }
    } catch (error) {
      console.log("Error while signup", error);
    }
  }
  return (
    <div className="flex items-center justify-center h-screen w-full mx-auto">
      <div className="">
        <Image
          priority
          src="https://images.unsplash.com/photo-1629046148352-386169868a82?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="random_img"
          width={800}
          className="h-screen"
          height={800}
        />
      </div>
      <div className="p-5 w-full h-screen flex items-center justify-center max-w-5xl bg-zinc-800">
        <Form {...register}>
          <form
            onSubmit={register.handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <FormField
              control={register.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-slate-300 ">
                    Username
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username..."
                      {...field}
                      type="text"
                      className="text-zinc-400 py-5 text-lg border border-zinc-200"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={register.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-slate-300 ">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email..."
                      {...field}
                      type="email"
                      className="text-zinc-400 py-5 text-lg border border-zinc-200"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={register.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-slate-300">
                    Password
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password..."
                      {...field}
                      className="text-zinc-400 py-5 text-lg border border-zinc-200"
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" variant="secondary">
              Submit
            </Button>

            <div className="text-zinc-400">
              <span>Already Registered User?</span>{" "}
              <Link href="/login" className="underline text-zinc-200">
                Click here
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
