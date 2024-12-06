import { Button } from "@repo/ui/components/ui/button";

export function AuthButton() {
  return (
    <div className="flex items-center gap-6">
      <Button
        className="px-8 text-white text-base font-medium hover:text-black border border-slate-700 hover:border-slate-200"
        variant={"ghost"}
      >
        Log in
      </Button>
      <Button className="px-8  text-base font-medium" variant={"secondary"}>
        Sign Up
      </Button>
    </div>
  );
}
