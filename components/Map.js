import * as L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import styled from "styled-components";
import LocationMarker from "./LocationMarker";
import Content from "./Content";
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
  cardCoords,
}) {
  return (
    <>
      <StyledMapContainer center={cardCoords} zoom={32} scrollWheelZoom>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {nestingboxes.map((nestingbox) => {
          return (
            <Marker
              key={nestingbox.id}
              id={nestingbox.id}
              position={[nestingbox.latitude, nestingbox.longitude]}
              icon={locationOnIcon}
            >
              <button onClick>
                <LocationMarker />
              </button>
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
                  <ButtonEdit onClick={() => setToEditCardID(nestingbox.id)}>
                    Edit
                  </ButtonEdit>
                </>
              </Popup>
            </Marker>
          );
        })}

        <LocationMarker />
      </StyledMapContainer>
      {toEditCardID !== null && (
        <EditCardForm
          nestingbox={nestingboxes.find(
            (nestingbox) => nestingbox.id === toEditCardID
          )}
          setToEditCardID={setToEditCardID}
          appendCard={appendCard}
          deleteCard={deleteCard}
        />
      )}
    </>
  );
}

const StyledMapContainer = styled(MapContainer)`
  height: 100vh;
  width: 100vw;
  margin: 0 auto;
`;

const ButtonEdit = styled.button`
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
