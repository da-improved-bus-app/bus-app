"use client"

import Card from "@/components/Card";
import Container from "@/components/Container";
import React, { useState } from "react";

const page = () => {
  const [search, setSearch] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("on submit search is:", search);
    getArrivals(search);
  }

  async function getArrivals(stopNumber) {
    const res = await fetch(`/api/thebus/arrivals/${stopNumber}`);
    const status = await res.status;

    if (status === 404) {
      console.log("invalid route");
      return;
    }

    const data = await res.json();
    console.log("data", data);

  }

  return (
    <Container>
      <div className="flex justify-center">
        <form className="rounded-2xl bg-white flex px-3 py-2 w-full md:w-96 text-sm border" onSubmit={handleSubmit}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#BEBEBE"
            className="w-6 h-6 pr-2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            placeholder="Search"
            className="outline-none w-full"
            type="number"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button hidden type="submit"/>
        </form>
      </div>
      <Card>Hello</Card>
    </Container>
  );
};

export default page;
