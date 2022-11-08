import * as L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import styled from "styled-components";
import LocationMarker from "./LocationMarker";
import Content from "./Content";
import { MdMode } from "react-icons/md";
import EditCardForm from "./EditCardForm";

//////////////////////////// custom svg icon

const locationOnIcon = L.divIcon({
  html: `<svg width="48px" height="48px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="var(--primary-black)"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`,
  className: "",
  iconSize: [48, 48],
  iconAnchor: [24, 48],
  popupAnchor: [0, -48],
});

//////////////////////////// map component

export default function Map({
  nestingboxes,
  toEditCardID,
  setToEditCardID,
  appendCard,
  deleteCard,
}) {
  return (
    <StyledMapContainer
      center={[49.10533702285379, 8.275965303182602]}
      zoom={32}
      scrollWheelZoom
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {nestingboxes.map((nestingbox) => {
        if (nestingbox.id === toEditCardID) {
          return (
            <>
              <EditCardForm
                key={nestingbox.id}
                nestingbox={nestingbox}
                setToEditCardID={setToEditCardID}
                appendCard={appendCard}
                deleteCard={deleteCard}
              />
            </>
          );
        } else {
          return (
            <Marker
              key={nestingbox.id}
              id={nestingbox.id}
              position={[nestingbox.latitude, nestingbox.longitude]}
              icon={locationOnIcon}
            >
              <Popup>
                <>
                  <Content
                    key={nestingbox.id}
                    id={nestingbox.id}
                    date={nestingbox.date}
                    time={nestingbox.time}
                    latitude={nestingbox.latitude}
                    longitude={nestingbox.longitude}
                    boxnumber={nestingbox.boxnumber}
                    count={nestingbox.count}
                  />
                  <ButtonMap onClick={() => setToEditCardID(nestingbox.id)}>
                    Edit
                  </ButtonMap>
                  {/* <Icon
                    onClick={() => setToEditCardID(nestingbox.id)}
                    size="3rem"
                  /> */}
                </>
              </Popup>
            </Marker>
          );
        }
      })}

      <LocationMarker />
    </StyledMapContainer>
  );
}

const Icon = styled(MdMode)`
  /* position: fixed;
  bottom: 1rem;
  right: 1rem;
  margin: 1rem; */
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  color: var(--primary-gray);
  border: 1px;
  border-color: var(--primary-gray);
  border-style: solid;
  border-radius: 50%;
  padding: 0.5rem;
  :hover {
    color: var(--primary-black);
    border-color: var(--primary-black);
  }
`;

const StyledMapContainer = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
`;

const ButtonMap = styled.button`
  background: ${({ isPrimary }) =>
    isPrimary ? "var(--primary-black)" : "none"};
  color: ${({ isPrimary }) =>
    isPrimary ? "var(--primary-white)" : "var(--primary-black)"};
  display: flex;
  justify-content: center;
  padding: 1rem;
  border: ${({ isPrimary }) =>
    isPrimary ? "none" : "1px solid var(--primary-gray)"};
  margin-top: 1rem;
  height: 3rem;
  width: 100%;
  :hover {
    color: var(--primary-white);
    background-color: var(--primary-gray);
    cursor: pointer;
  }
`;
