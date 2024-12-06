import { Button } from "@repo/ui/components/ui/button";

export function AuthButton() {
  return (
    <div className="flex items-center space-x-3">
      <Button
        className="px-8 text-stone-300 text-base font-medium hover:text-black border border-slate-700 hover:border-stone-700"
        variant={"ghost"}
      >
        Log in
      </Button>
      <Button
        className="px-8 bg-stone-700 hover:bg-stone-800 text-base text-stone-300 font-medium"
        variant={"secondary"}
      >
        Sign Up
      </Button>
    </div>
  );
}
