"use client";

import { navLinks } from "@/utlis/constants";
import { cn } from "@repo/ui/lib/utils";
import { ZapOff } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AuthButton } from "../auth";
import { motion } from "motion/react";

export function Navbar() {
  const pathname = usePathname();
  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto py-4 px-2 border-b border-neutral-700 flex items-center justify-between"
    >
      <Logo></Logo>

      <div className="flex items-center space-x-6 text-center">
        {navLinks.map((items) => (
          <Link
            href={items.link}
            key={items.id}
            className={cn(
              `font-medium text-base text-slate-300/70 hover:text-stone-300 transition text-center`,
              pathname === items.link ? "text-stone-300" : ""
            )}
          >
            {items.label}
          </Link>
        ))}
      </div>

      <AuthButton></AuthButton>
    </motion.nav>
  );
}

export function Logo() {
  return (
    <Link href="/">
      <ZapOff
        className="text-zinc-400 hover:text-stone-200 transition"
        size={44}
      />
    </Link>
  );
}
