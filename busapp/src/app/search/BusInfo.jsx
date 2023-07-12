import React from "react";

const BusInfo = ({ arrival }) => {
  return (
    <li className="py-3 divide-y-2 border-b">
      <div>
        <div>
          {arrival.route} {arrival.headsign.replace("&amp;", "&")}
        </div>
        <div className="text-sm">
          <div>{arrival.direction}</div>
          <div>Bus {arrival.vehicle.replace("???", "Scheduled")}</div>
          <div>Arriving at {arrival.stopTime}</div>
        </div>
      </div>
    </li>
  );
};

export default BusInfo;
