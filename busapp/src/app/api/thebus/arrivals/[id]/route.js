import { NextResponse } from "next/server";

const API_KEY = process.env.THEBUS_API_KEY;

export async function GET(request) {
  const STOP_ID = request.url.slice(request.url.lastIndexOf("/") + 1);
  const URL = `http://api.thebus.org/arrivalsJSON/?key=${API_KEY}&stop=${STOP_ID}`;

  try {
    const res = await fetch(URL);
    const data = await res.json();
    
    if (res.status === 404 || Object.keys(data)[0] === "errorMessage") {
      return NextResponse.json(data, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.error(error);
  }
}