import { NextResponse } from "next/server";

export function GET(request: Request) {
  // for (const key of request.headers.keys()) {
  //   console.log(key);
  // }

  return NextResponse.json({
    sessionId: request.headers.get("X-Session-Id"),
  });
}
