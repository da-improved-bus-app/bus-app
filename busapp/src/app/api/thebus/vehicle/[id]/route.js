import { NextResponse } from "next/server";
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const API_KEY = process.env.THEBUS_API_KEY;

export async function GET(request) {
  const VEHICLE_NUM = request.url.slice(request.url.lastIndexOf("/") + 1);
  const URL = `http://api.thebus.org/vehicle/?key=${API_KEY}&num=${VEHICLE_NUM}`;

  // const dom = await JSDOM.fromURL(URL);
  // const data = await dom.serialize();
  const res = await fetch(URL);
  const data = await res.text();
  console.log(data);
  
  // console.log(res.data)
  // const data = await parser.parseStringPromise(res);
  // const xmlDocument = new DOMParser().parseFromString(data, "text/xml");
  const dom = new JSDOM(data);
  const vehicles = dom.window.document.querySelectorAll("vehicle");

  for (const vehicle of vehicles) {
    const number = vehicle.querySelector("number").textContent;
    const trip = vehicle.querySelector("trip").textContent;
    const driver = vehicle.querySelector("driver").textContent;
    const latitude = vehicle.querySelector("latitude").textContent;
    const longitude = vehicle.querySelector("longitude").textContent;
    const adherence = vehicle.querySelector("adherence").textContent;
    const last_message = vehicle.querySelector("last_message").textContent;
    const route_short_name = vehicle.querySelector("route_short_name").textContent;
    const headsign = vehicle.querySelector("headsign").textContent;

    const obj = {
      "number": number,
      "trip": trip,
      "driver": driver,
      "latitude": latitude,
      "longitude": longitude,
      "adherence": adherence,
      "last_message": last_message,
      "route_short_name": route_short_name,
      "headsign": headsign
    }

    console.log(obj)
  }

  if (!data) return NextResponse.json({ message: "Not found" });

  return NextResponse.json(data);
}