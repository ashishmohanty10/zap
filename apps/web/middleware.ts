import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const publicRoutes = ["/login", "/register", "/"];

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/dashboard")) {
    const token = req.cookies.get("access_Token");

    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
