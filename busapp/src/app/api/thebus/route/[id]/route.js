import { NextResponse } from "next/server";

const API_KEY = process.env.THEBUS_API_KEY;

export async function GET(request) {
  const ROUTE_NUM = request.url.slice(request.url.lastIndexOf("/") + 1);
  const URL = `http://api.thebus.org/routeJSON/?key=${API_KEY}&route=${ROUTE_NUM}`;

  const res = await fetch(URL);
  const data = await res.json();

  if (!data) return NextResponse.json({ message: "Not found" });

  return NextResponse.json(data);
}
