"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@repo/ui/components/ui/alert-dialog";
import { Button } from "@repo/ui/components/ui/button";
import { PenBox } from "lucide-react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateProfileSchema, updateProfileSchemaType } from "@repo/common";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@repo/ui/components/ui/form";
import { Input } from "@repo/ui/components/ui/input";
import { toast } from "sonner";
import axios from "axios";

export function EditProfile() {
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_BACKEND_URL;

  const form = useForm<updateProfileSchemaType>({
    resolver: zodResolver(updateProfileSchema),
    defaultValues: {
      email: "",
      name: "",
    },
  });

  async function onSubmit(values: updateProfileSchemaType) {
    try {
      const res = await axios.put(
        `${URL}/api/v1/user/edit`,
        {
          name: values.name,
          email: values.email,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status == 200) {
        router.push("/profile");
        toast.success("Profile updated successfully!");
      } else {
        toast.error("Error while login! Please try again");
      }
    } catch (error) {
      toast.error("Error while updating! Please try again");
    }
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button>
          <span>Edit Profile</span>
          <PenBox />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Update Your Profile</AlertDialogTitle>
          <AlertDialogDescription>
            Are your sure, you want to update your profile
          </AlertDialogDescription>
          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-lg text-slate-300">
                        Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Update your name..."
                          {...field}
                          type="name"
                          className="text-zinc-400 py-5 text-lg border border-zinc-200"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

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
                          placeholder="Update your email..."
                          {...field}
                          type="email"
                          className="text-zinc-400 py-5 text-lg border border-zinc-200"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction type="submit">
                    Save Changes
                  </AlertDialogAction>
                </AlertDialogFooter>
              </form>
            </Form>
          </div>
        </AlertDialogHeader>
      </AlertDialogContent>
    </AlertDialog>
  );
}
