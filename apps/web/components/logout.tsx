"use client";

import { Button } from "@repo/ui/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";

export function Logout({ text }: { text: string }) {
  const router = useRouter();
  const URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const logoutfunc = async () => {
    try {
      const res = await axios.post(
        `${URL}/api/v1/user/logout`,
        {},
        { withCredentials: true }
      );
      router.push("/");
      console.log("Logged out successfully", res.data);
    } catch (error) {
      console.log("Error while logging out", error);
    }
  };
  return (
    <Button
      onClick={logoutfunc}
      className="px-8 text-stone-200 hover:text-stone-200 text-base
          font-medium border border-zinc-700 hover:border-zinc-700
          hover:bg-zinc-700"
      variant={"ghost"}
    >
      {text}
    </Button>
  );
}
