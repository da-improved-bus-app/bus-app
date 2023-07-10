import Card from "@/components/Card";
import Container from "@/components/Container";
import React from "react";

const page = () => {
  return (
    <Container>
      <div className="flex justify-center">
        <div className="rounded-2xl bg-white flex px-3 py-2 w-full md:w-96 text-sm border">
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
            className="outline-none"
          />
        </div>
      </div>
      <Card>Hello</Card>
    </Container>
  );
};

export default page;
