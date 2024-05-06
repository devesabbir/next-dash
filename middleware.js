import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  if (pathname.startsWith("/dashboard")) {
    const isLoggedIn = cookies().get("login")?.value === "true";

    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  if (pathname.startsWith("/login")) {
    const isLoggedIn = cookies().get("login")?.value === "true";
    if (isLoggedIn) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    // '/'
  ],
};
