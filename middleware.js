import { cookies } from "next/headers";

export function middleware(request) {
  const cookieStore = cookies();
  const myCookie = cookieStore.get("authUser")?.value;

  if (!myCookie && request.nextUrl.pathname == "/") {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !myCookie &&
    request.nextUrl.pathname.startsWith("/pages/addcategory")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !myCookie &&
    request.nextUrl.pathname.startsWith("/pages/codeitem")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !myCookie &&
    request.nextUrl.pathname.startsWith("/pages/addcodeitem")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !myCookie &&
    request.nextUrl.pathname.startsWith("/pages/downloads/")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !myCookie &&
    request.nextUrl.pathname.startsWith("/pages/msges")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !myCookie &&
    request.nextUrl.pathname.startsWith("/pages/users")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    myCookie &&
    request.nextUrl.pathname.startsWith("/pages/sign")
  ) {
    return Response.redirect(new URL("/", request.url));
  }
}

// export const config = {
//   matcher: "/pages/:path*",
//   // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
