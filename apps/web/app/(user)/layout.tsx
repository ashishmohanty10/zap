import { DashboardItems } from "@/components/dashboard/dashboard-items";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import "@repo/ui/globals.css";
import { ZapOff } from "lucide-react";
import Link from "next/link";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className={`antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="grid grid-cols-2 min-h-screen md:grid-cols-[80px_1fr]">
            <div className="hidden md:block">
              <div className="flex flex-col justify-center min-h-screen gap-2">
                <div className="lg:h-[60px] flex items-center justify-center border-b border-r border-zinc-700">
                  <Link href="/" className="">
                    <ZapOff />
                  </Link>
                </div>

                <div className="flex-1 border-r border-zinc-700">
                  <DashboardItems />
                </div>
              </div>
            </div>

            <div>
              <div className="h-[60px] border-b border-zinc-700 flex items-center justify-end px-10">
                <ThemeToggle />
              </div>
              <div className="p-5">{children}</div>
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
}
