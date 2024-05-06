import { NextResponse } from "next/server";
import { cookies } from "next/headers";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  const url = request.nextUrl.clone();
  const { pathname } = url;

  // Check if the requested path starts with "/dashboard"
  if (pathname.startsWith("/dashboard")) {
    // Implement your logic to check login status (replace with your actual logic)
    const isLoggedIn =
      cookies().get("login")?.value ===
      "true"; /* Your logic to check user login state */

    if (!isLoggedIn) {
      // Redirect to /login if not logged in
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Pass through the request for other routes
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
