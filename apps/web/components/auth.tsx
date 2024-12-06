import { Button } from "@repo/ui/components/ui/button";

export function AuthButton() {
  return (
    <div className="flex items-center gap-6">
      <Button
        className="px-4 text-white text-base font-medium hover:text-black"
        variant={"ghost"}
      >
        Log in
      </Button>
      <Button className="px-4  text-base font-medium" variant={"secondary"}>
        Sign Up
      </Button>
    </div>
  );
}
