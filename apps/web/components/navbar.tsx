import { Button } from "@repo/ui/components/ui/button";
import { ZapOff } from "lucide-react";
import Link from "next/link";

export function Navabar() {
  return (
    <nav className="max-w-7xl mx-auto py-4">
      <Logo />
      <Button />
    </nav>
  );
}

export function Logo() {
  return (
    <Link href="/">
      <ZapOff className="text-white" />
    </Link>
  );
}
