"use client";

import React, { useEffect, useState } from "react";

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
    <div className="p-3">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          getHolocardData(cardNumber, securityCode);
        }}
      >
        <div>card number</div>
        <input
          placeholder="Card Number"
          onChange={(e) => {
            setCardNumber(e.target.value);
          }}
        />
        <div>security code</div>
        <input
          placeholder="Security Code"
          onChange={(e) => {
            setSecurityCode(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
        <div className="flex items-center">
          <div className="flex h-4 w-4 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
            <div className="h-2 w-2 rounded-full bg-white"></div>
          </div>
          Processing...
        </div>
      <div>{holocardData}</div>
    </div>
  );
};

export default HolocardPage;
