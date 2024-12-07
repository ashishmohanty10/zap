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
      const res = await axios.post(`${URL}/api/v1/user/register`, {
        email: values.email,
        name: values.name,
        password: values.password,
      });

      if (res.status === 201) {
        localStorage.setItem("token", res.data.access_Token);
        router.push("/dashboard");
      } else {
        console.log("Register failed: Please try again after some time");
      }
    } catch (error) {
      console.log("Error while signup", error);
    }
  }
  return (
    <div className="background">
      <div className="flex items-center justify-center h-screen max-w-7xl mx-auto">
        <Form {...register}>
          <form
            onSubmit={register.handleSubmit(onSubmit)}
            className="space-y-8"
          >
            <FormField
              control={register.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Username..."
                      {...field}
                      type="text"
                      className="text-zinc-400"
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
              control={register.control}
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
