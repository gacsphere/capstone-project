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

//////////////////////////// positions to map over

const positions = [
  { id: "42", name: "hier ist was", lat: 52, long: 8 },
  { id: "42b", name: "hier ist was anderes", lat: 51, long: 9 },
];

//////////////////////////// our custom icon

const greenIcon = L.icon({
  iconUrl: "leaf-green.png",
  shadowUrl: "leaf-shadow.png",

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

const goldIcon = new L.Icon({
  iconUrl:
    "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-gold.png",
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

//////////////////////////// this component should be in a separate file ;)

function LocationMarker() {
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

  return (
    position && (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    )
  );
}

//////////////////////////// our map component

export default function Map({ showMap, toggleMap, nestingboxes }) {
  return (
    <StyledMapContainer center={[50.11, 8.68]} zoom={34} scrollWheelZoom>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FocusButton
        onClick={() => {
          map.locate();
        }}
      >
        wo
      </FocusButton>
      {/* <MapButton
        onClick={() => {
          toggleMap();
        }}
      >
        {showMap ? "L" : "M"}
      </MapButton> */}
      {nestingboxes.map((nestingbox) => {
        return (
          <Marker
            key={nestingbox.id}
            position={[nestingbox.latitude, nestingbox.longitude]}
            icon={goldIcon}
          >
            <Popup>
              <p>{nestingbox.count} bats</p>
              <p>Nestingbox no. {nestingbox.boxnumber}</p>
            </Popup>
          </Marker>
        );
      })}
      {positions.map((position) => {
        return (
          <Marker
            key={position.id}
            position={[position.lat, position.long]}
            icon={goldIcon}
          >
            <Popup>{position.name}</Popup>
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

// const MapButton = styled.button`
//   width: 3.5rem;
//   aspect-ratio: 1;
//   border-radius: 50%;
//   position: fixed;
//   top: 1rem;
//   right: 1rem;
//   background-color: var(--primary-black);
//   color: var(--primary-white);
//   border: none;
// `;

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
`;
