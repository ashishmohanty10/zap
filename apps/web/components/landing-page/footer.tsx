import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full py-12 text-slate-400">
      <div className="px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ZapFlow</h3>
            <p className="text-sm">
              Automate your workflows with ease and boost your productivity.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-slate-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/features" className="hover:text-slate-400">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-slate-400">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#Blog" className="hover:text-slate-400">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#service" className="hover:text-slate-400">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#policy" className="hover:text-slate-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for the latest updates and features.
            </p>
            <form className="flex space-x-2">
              <Input
                type="email"
                placeholder="Your email"
                className="py-4 text-slate-400"
              />
              <Button type="submit" className="bg-slate-700 hover:bg-slate-900">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-700 text-center text-sm">
          © {new Date().getFullYear()} ZapFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
