import { NextResponse } from "next/server";

const API_KEY = process.env.THEBUS_API_KEY;

export async function GET(request) {
  const STOP_ID = request.url.slice(request.url.lastIndexOf("/") + 1);
  const URL = `http://api.thebus.org/arrivalsJSON/?key=${API_KEY}&stop=${STOP_ID}`;

  const res = await fetch(URL);
  const data = await res.json();

  if (!data) return NextResponse.json({ message: "Not found" });

  return NextResponse.json(data);
}
