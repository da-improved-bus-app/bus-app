import { NextResponse } from "next/server";

const URL = "https://www.holocard.net/umbraco/api/PublicApi/CheckCardDetails";

export async function POST(request) {
  const { CardNumber, SecurityCode } = await request.json();
  console.log("cardnumber: ", CardNumber, "security code:", SecurityCode);

  if (!CardNumber || !SecurityCode) return NextResponse.json({"message": "missing required data"});

  const res = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      CardNumber, SecurityCode, Locale: "en"
    })
  })

  const cardDetails = await res.json();
  console.log("cardDetails", cardDetails);

  return NextResponse.json(cardDetails);
}
