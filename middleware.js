export function middleware(request) {
  const currentUser = request.cookies.get('authUser').value

  if (!currentUser && request.nextUrl.pathname == "/") {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !currentUser &&
    request.nextUrl.pathname.startsWith("/pages/addcategory")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !currentUser &&
    request.nextUrl.pathname.startsWith("/pages/codeitem")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !currentUser &&
    request.nextUrl.pathname.startsWith("/pages/addcodeitem")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !currentUser &&
    request.nextUrl.pathname.startsWith("/pages/downloads/")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !currentUser &&
    request.nextUrl.pathname.startsWith("/pages/msges")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    !currentUser &&
    request.nextUrl.pathname.startsWith("/pages/users")
  ) {
    return Response.redirect(new URL("/pages/sign", request.url));
  } else if (
    currentUser &&
    request.nextUrl.pathname.startsWith("/pages/sign")
  ) {
    return Response.redirect(new URL("/", request.url));
  }
}

// export const config = {
//   matcher: "/pages/:path*",
//   // matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
// };
