"use client";

import { sidebar } from "@/utlis/constants";
import { cn } from "@repo/ui/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { UserProfile } from "../profile/user-profile";

export function DashboardItems() {
  const pathname = usePathname();
  return (
    <div className="flex flex-1 flex-col justify-between items-center h-full">
      <div className="flex flex-col items-center justify-center space-y-3">
        {sidebar.map((items, idx) => (
          <Link
            href={items.href}
            className={cn(
              `p-4 rounded-full`,
              pathname === items.href
                ? "bg-zinc-700  hover:bg-zinc-800"
                : "hover:bg-zinc-700 border border-zinc-700"
            )}
            key={idx}
          >
            <items.icon />
          </Link>
        ))}
      </div>

      <div>
        <UserProfile />
      </div>
    </div>
  );
}
