"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@repo/ui/components/ui/form";
import { useForm } from "react-hook-form";
import { loginSchema, loginSchemaType } from "@repo/common";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@repo/ui/components/ui/input";
import { Button } from "@repo/ui/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const router = useRouter();
  const form = useForm<loginSchemaType>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: loginSchemaType) {
    try {
      const res = await axios.post(
        `${URL}/api/v1/user/login`,
        {
          email: values.email,
          password: values.password,
        },
        {
          withCredentials: true,
        }
      );
      localStorage.setItem("token", res.data.access_Token);
      if (res.status === 200) {
        router.push("/dashboard");
      } else {
        console.log("Login failed: Invalid response status or missing token");
      }
    } catch (error) {
      console.log("Error while Login", error);
    }
  }

  return (
    <div className="flex items-center justify-center h-screen w-full mx-auto">
      <div className="w-1/2 h-screen">
        <Image
          priority
          src="https://images.unsplash.com/photo-1672062518694-9d86f3b6f000?q=80&w=1896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="radom_img"
          className=" h-screen object-cover"
          width={800}
          height={800}
        />
      </div>
      <div className="p-5 w-full h-screen flex items-center justify-center max-w-5xl bg-zinc-800">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg text-slate-300">
                    Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email..."
                      {...field}
                      type="email"
                      className="text-zinc-400 py-5 text-lg"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
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
                      className="text-zinc-400 py-5 text-lg"
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" variant="secondary" className="w-full py-5">
              Submit
            </Button>

            <div className="text-zinc-400">
              <span>Don't have an account yet? Sign up</span>{" "}
              <Link href="/register" className="underline text-zinc-200">
                now
              </Link>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
