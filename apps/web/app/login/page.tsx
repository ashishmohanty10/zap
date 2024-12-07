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
      console.log(URL);
      const res = await axios.post(`${URL}/api/v1/user/login`, {
        email: values.email,
        password: values.password,
      });
      localStorage.setItem("token", res.data.access_Token);
      if (res.status === 200) {
        localStorage.setItem("token", res.data.access_Token);
        router.push("/dashboard");
      } else {
        console.log("Login failed: Invalid response status or missing token");
      }
    } catch (error) {
      console.log("Error while Login", error);
    }
  }

  return (
    <div className="background">
      <div className="flex items-center justify-center h-screen max-w-7xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Email..."
                      {...field}
                      type="email"
                      className="text-zinc-400"
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Password..."
                      {...field}
                      className="text-zinc-400"
                      type="password"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
