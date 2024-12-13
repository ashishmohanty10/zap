"use client";

import { Button } from "@repo/ui/components/ui/button";
import axios from "axios";
import { Loader, LucideLogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function Logout({ text }: { text: string }) {
  const router = useRouter();
  const [loader, setLoader] = useState(false);

  const URL = process.env.NEXT_PUBLIC_BACKEND_URL;
  const logoutfunc = async () => {
    try {
      setLoader(true);
      await axios.post(
        `${URL}/api/v1/user/logout`,
        {},
        { withCredentials: true }
      );
      router.push("/");
      setLoader(false);
      toast.success("Logout successfull!!");
    } catch (error) {
      console.log("Error while logging out", error);
      toast.error("Unfortunately !! could not log out!!");
    }
  };

  return (
    <Button
      onClick={logoutfunc}
      className="px-8 w-24 bg-red-600 flex items-center justify-center"
      variant="destructive"
    >
      {loader ? (
        <Loader className="animate-spin" />
      ) : (
        <div className="flex items-center gap-2">
          <p>{text}</p>
          <LucideLogOut />
        </div>
      )}
    </Button>
  );
}
