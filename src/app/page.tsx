import { headers } from "next/headers";

export default function Home() {
  const msg = headers().get("X-Session-Id");
  return <div>SessionId: {msg === null ? "null" : msg}</div>;
}
