import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // const headers = new Headers(request.headers);

  // Working example
  // headers.set("X-Session-Id", "session-id-displayed");
  // const response = NextResponse.next({ request: { headers } });

  /**
   * So it seems that there is only one way to set the headers that will work in
   * production with vercel in Edge Runtime.
   *
   * And that is the one shown above.
   *
   * Examples below will not work.
   */

  // Fail Example 1
  const response = NextResponse.next();
  response.headers.set("X-Session-Id", "session-id-displayed");

  // Fail Example 2
  // const response = NextResponse.next();
  // response.headers.append("X-Session-Id", "session-id-displayed");

  // Fail Example 3
  // const response = NextResponse.next({ request: { headers } });
  // response.headers.append/set("X-Session-Id", "session-id-displayed");

  return response;
}
