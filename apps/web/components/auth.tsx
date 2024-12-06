import { Button } from "@repo/ui/components/ui/button";
import Link from "next/link";

export function AuthButton() {
  return (
    <div className="flex items-center space-x-3">
      <Button
        asChild
        className="px-8 text-stone-200 hover:text-stone-200 text-base
          font-medium border border-stone-700 hover:border-stone-700
          hover:bg-stone-700"
        variant={"ghost"}
      >
        <Link href="/login">Log in</Link>
      </Button>
      <Button
        className="px-8 bg-stone-700 hover:bg-stone-800 text-base text-stone-300 font-medium"
        variant={"secondary"}
        asChild
      >
        <Link href="/register">Sign Up</Link>
      </Button>
    </div>
  );
}
