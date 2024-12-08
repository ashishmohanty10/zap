"use client";

import { navLinks } from "@/utlis/constants";
import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Login, Signup } from "../auth";
import { motion } from "motion/react";
import { useEffect } from "react";
import axios from "axios";

export function Navbar() {
  useEffect(() => {
    axios.get("http://localhost:3002/healthy", { withCredentials: true });
  }, []);
  const pathname = usePathname();
  return (
    <motion.div className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm">
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="max-w-7xl mx-auto py-4 px-2 border-b border-neutral-700 flex items-center justify-between"
      >
        <Logo />

        <div className="flex items-center justify-center space-x-6 text-center">
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

        <div className="flex items-center space-x-4">
          <Login text="Login" />
          <Signup text="Signup" />
        </div>
      </motion.nav>
    </motion.div>
  );
}

export function Logo() {
  return (
    <Link
      href="/"
      className="text-3xl font-bold text-zinc-200 hover:text-stone-200 transition"
    >
      Zap<span className="text-white">Flow</span>
    </Link>
  );
}
