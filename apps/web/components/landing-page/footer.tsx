import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full py-12 text-gray-300">
      <div className="container px-4 md:px-6">
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
                <Link href="#" className="hover:text-stone-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#features" className="hover:text-stone-300">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="hover:text-stone-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-stone-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-stone-300">
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
                className="py-4 text-stone-300"
              />
              <Button type="submit" className="bg-stone-700 hover:bg-stone-900">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-stone-700 text-center text-sm">
          © {new Date().getFullYear()} ZapFlow. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
