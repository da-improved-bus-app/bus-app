import React, { useState, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from 'leaflet'

const myIcon = new Icon({
  iconUrl: "/location.svg",
  iconSize: [32,32]
})


const OpenStreetMap = () => {
  const [center, setCenter] = useState({ lat: 21.3099, lng: -157.8581 });
  const ZOOM_LEVEL = 13;
  const mapRef = useRef();

  return (
    <div className="flex justify-center flex-col items-center">
      <MapContainer
        center={center}
        zoom={ZOOM_LEVEL}
        ref={mapRef}
        className="min-h-[600px] h-[80vh] w-3/4 rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[21.3099, -157.8581]} icon={myIcon}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default OpenStreetMap;
