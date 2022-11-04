import { useState, useEffect } from "react";
import * as L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import styled from "styled-components";
import LocationMarker from "./LocationMarker";

// Icon imports
import { MdMyLocation } from "react-icons/md";

//////////////////////////// our custom icon

const locationOnIcon = L.divIcon({
  html: `<svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" border="0.5rem" border-color="var(--primary-black)" fill="var(--primary-black)"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
  className: "",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
});

//////////////////////////// our map component

export default function Map({ showMap, toggleMap, nestingboxes }) {
  return (
    <StyledMapContainer
      center={[49.119475, 8.278373]}
      zoom={34}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FocusButton
        onClick={() => {
          map.locate();
        }}
      >
        <MdMyLocation size="1.5rem" color="var(--primary-white)" />
      </FocusButton>
      {nestingboxes.map((nestingbox) => {
        return (
          <Marker
            key={nestingbox.id}
            position={[nestingbox.latitude, nestingbox.longitude]}
            icon={locationOnIcon}
          >
            <Popup>
              <p>{nestingbox.count} bats</p>
              <p>Nestingbox no. {nestingbox.boxnumber}</p>
            </Popup>
          </Marker>
        );
      })}

      <LocationMarker />
    </StyledMapContainer>
  );
}

const StyledMapContainer = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
`;

const FocusButton = styled.button`
  width: 3.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: fixed;
  top: 16rem;
  right: 1rem;
  background-color: var(--primary-black);
  color: var(--primary-white);
  border: none;
  z-index: 401;
  :hover {
    background-color: var(--primary-gray);
    cursor: pointer;
  }
`;
