"use client";
import React, { useEffect, useState } from "react";
import Container from "../../../components/Container";
import Card from "../../../components/Card";

const HolocardPage = () => {
  const [holocardData, setHolocardData] = useState(null);
  const [cardNumber, setCardNumber] = useState("");
  const [securityCode, setSecurityCode] = useState("");

  async function getHolocardData(cardNumber, securityCode) {
    const res = await fetch("/api/holocard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        CardNumber: cardNumber,
        SecurityCode: securityCode,
      }),
    });
    const data = await res.json();
    if (data) {
      const balance = data.Data.Balance;
      setHolocardData(balance);
    } else {
      console.log("no data");
    }
  }

  return (
    <Container>
      <Card>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            getHolocardData(cardNumber, securityCode);
          }}
          className="flex md:gap-5"
        >
          <div>
            <div className="text-xs pl-[1px]">Card Number *</div>
            <input
              type="number"
              className="rounded border border-solid outline-none p-2 text-sm h-10"
              placeholder="Enter card number..."
              onChange={(e) => {
                setCardNumber(e.target.value);
              }}
            />
          </div>
          <div>
            <div className="text-xs pl-[1px]">Security Code *</div>
            <input
              type="number"
              className="rounded border border-solid outline-none p-2 text-sm h-10"
              placeholder="Security Code"
              onChange={(e) => {
                setSecurityCode(e.target.value);
              }}
            />
          </div>
          <button
            type="submit"
            className="border p-2 text-sm rounded h-10 self-end w-16"
          >
            Send
          </button>
        </form>
      </Card>
      {/* <div className="flex items-center">
        <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
          <div className="h-2 w-2 rounded-full bg-white"></div>
        </div>
        Processing...
      </div> */}
      <Card>
        <div className="h-96 p-6 flex items-center text-[6vw] font-light">
          <div>Your balance is: {holocardData ? `$${(holocardData/100).toFixed(2)}`: ""}</div>
        </div>
      </Card>
    </Container>
  );
};

export default HolocardPage;
