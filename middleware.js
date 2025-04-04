// // middleware.js
// import { NextResponse } from "next/server";

// export function middleware(req) {
//   const { pathname } = req.nextUrl;
//   console.log("Middleware triggered for:", pathname); // Check server logs

//   const disabledRoutes = ["/admin/dashboard", "/admin/reports", "/admin/billing"];
  
//   // Redirect if pathname starts with any disabled route
//   if (disabledRoutes.some((route) => pathname.startsWith(route))) {
//     return NextResponse.redirect(new URL("/admin", req.url));
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/admin/:path*"],
// };



// middleware.js
import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;
  
  // Normalize paths to handle trailing slashes
  const normalizedPath = pathname.replace(/\/$/, ""); // Remove trailing slash
  
  const disabledRoutes = [
    "/admin/dashboard",
    "/admin/reports",
    "/admin/billing"
  ];

  // Check for EXACT matches (not partial matches)
  if (disabledRoutes.includes(normalizedPath)) {
    console.log(`Redirecting ${normalizedPath} to /admin`);
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};