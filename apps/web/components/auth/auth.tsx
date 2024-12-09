"use client";

import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export function Signup({ text }: { text: string }) {
  return (
    <Button
      className="px-8 bg-zinc-700 hover:bg-zinc-800 text-base text-stone-300 font-medium"
      variant={"secondary"}
      asChild
    >
      <Link href="/register">{text}</Link>
    </Button>
  );
}

export function Login({ text }: { text: string }) {
  return (
    <Button
      asChild
      className="px-8 text-stone-200 hover:text-stone-200 text-base
        font-medium border border-zinc-700 hover:border-zinc-700
        hover:bg-zinc-700"
      variant={"ghost"}
    >
      <Link href="/login">{text}</Link>
    </Button>
  );
}
