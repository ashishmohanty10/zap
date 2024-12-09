import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const publicRoutes = ["/login", "/register", "/"];

  const protectedRoutes = ["/dashboard", "/profile", "/settings"];

  const token = req.cookies.get("access_Token");

  if (token) {
    if (publicRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  if (protectedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL("/register", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/", "/login", "/register", "/dashboard"],
};
