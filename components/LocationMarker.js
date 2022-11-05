import { useState, useEffect } from "react";
import * as L from "leaflet";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";

export default function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  useEffect(() => {
    map.locate();
  }, [map]);

  const locationSecondaryIcon = L.divIcon({
    html: `<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="var(--primary-black)"><path d="M0 0h24v24H0z" fill="none"/><path d="M0 0h24v24H0z" fill="none"/><path d="M2 12C2 6.48 6.48 2 12 2s10 4.48 10 10-4.48 10-10 10S2 17.52 2 12zm10 6c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6z"/></svg>`,
    className: "",
    iconSize: [24, 24],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });

  return (
    position && (
      <Marker position={position} icon={locationSecondaryIcon}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
}
