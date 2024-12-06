"use client";

import { navLinks } from "@/utlis/constants";
import { Button } from "@repo/ui/components/ui/button";
import { cn } from "@repo/ui/lib/utils";
import { ZapOff } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Navabar() {
  const pathname = usePathname();
  return (
    <nav className="max-w-7xl mx-auto py-4 px-2 border-b border-neutral-700 flex items-center justify-between">
      <Logo />

      <div className="flex items-center gap-4">
        {navLinks.map((items) => (
          <Link
            href={items.link}
            key={items.id}
            className={cn(
              `font-medium text-base text-white/70 hover:text-white transition`,
              pathname === items.link ? "text-white" : ""
            )}
          >
            {items.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <Button className="text-white text-base font-medium hover:text-white/70">
          Login
        </Button>
        <Button className=" text-base font-medium" variant={"secondary"}>
          Sign Up
        </Button>
      </div>
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
