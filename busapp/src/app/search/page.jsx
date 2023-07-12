"use client"

import Card from "@/components/Card";
import Container from "@/components/Container";
import SearchIcon from "@/components/SearchIcon";
import React, { useState } from "react";
import BusInfo from "./BusInfo";

const page = () => {
  const [search, setSearch] = useState(0);
  const [busses, setBusses] = useState(null);

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
    setBusses(data);

  }

  return (
    <Container>
      <div className="flex justify-center">
        <form className="rounded-2xl bg-white flex px-3 py-2 w-full md:w-96 text-sm border" onSubmit={handleSubmit}>
          <SearchIcon />
          <input
            placeholder="Search"
            className="outline-none w-full"
            type="number"
            onChange={(e) => setSearch(e.target.value)}
          />
          <button hidden type="submit"/>
        </form>
      </div>
      <Card>
        {console.log("busses", busses)}
        { busses && (
          <ul>
            {
              busses.arrivals.map((arrival, index) => {
                return (
                  <BusInfo arrival={arrival} key={index}/>
                )
              }
            )}
          </ul>
        )}
      </Card>
    </Container>
  );
};

export default page;
