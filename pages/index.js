import Head from "next/head";
import styled from "styled-components";
import Cards from "../components/Cards";
import Form from "../components/Form";
import Sum from "../components/Sum";
import Title from "../components/Title";
import { nanoid } from "nanoid";
import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import dynamic from "next/dynamic";
import { MdOutlineMap, MdFilterList, MdAdd } from "react-icons/md";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const initialNestingBoxes = [
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "15:56",
    latitude: 49.10266,
    longitude: 8.2704,
    boxnumber: 246,
    count: 4,
  },
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "16:00",
    latitude: 49.104272,
    longitude: 8.271784,
    boxnumber: 247,
    count: 25,
  },
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "16:07",
    latitude: 49.103339,
    longitude: 8.27099,
    boxnumber: 248,
    count: 17,
  },
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "16:17",
    latitude: 49.101676,
    longitude: 8.272304,
    boxnumber: 250,
    count: 8,
  },
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "16:34",
    latitude: 49.100838,
    longitude: 8.271718,
    boxnumber: 251,
    count: 12,
  },
];

export default function Home() {
  const [nestingBoxes, setNestingBoxes] = useLocalStorage(
    "nestingBoxes",
    initialNestingBoxes
  );
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [time, setTime] = useState();
  const [date, setDate] = useState();
  const [showForm, setShowForm] = useState(false);
  const [toEditCardID, setToEditCardID] = useState(null);
  const [cardCoords, setCardCoords] = useState([49.104485, 8.272741]);
  const [showMap, setShowMap] = useState(false);

  function toggleForm() {
    setShowForm((previousShowForm) => (previousShowForm = !previousShowForm));
  }

  function toggleMap() {
    setShowMap((previousShowMap) => (previousShowMap = !previousShowMap));
  }

  function appendCard(date, time, latitude, longitude, boxnumber, count) {
    setNestingBoxes((nestingBoxes) => [
      {
        date,
        time,
        latitude,
        longitude,
        boxnumber,
        count: Number(count),
        id: nanoid(),
      },
      ...nestingBoxes,
    ]);
    setShowForm(false);
  }

  function deleteCard(nestingBoxId) {
    setNestingBoxes((nestingBoxes) =>
      nestingBoxes.filter(({ id }) => nestingBoxId !== id)
    );
  }

  function setLocalData() {
    setDate(new Date().toISOString().slice(0, 10));
    setTime(Date().slice(16, 21));
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
    });
    navigator.geolocation.getCurrentPosition(function (position) {
      setLongitude(position.coords.longitude);
    });
  }

  const sumOfCounts = nestingBoxes
    .map((nestingbox) => nestingbox.count)
    .reduce((a, b) => a + b, 0);

  return (
    <>
      <Head>
        <title>batSCAN</title>
        <meta
          name="description"
          content="Record the number of a bat population in a specific area. Find the nest sites, add more entries and edit the collected data. Switch between list view and display of entries on the map."
        />
        <meta
          name="keywords"
          content="bat, data collection, data acquisition, nature conservation, endangered species"
        />
        <meta name="author" content="Gesa Siebert" />
        <link rel="icon" href="/assets/favicon_batscan.svg" />
      </Head>

      <main>
        <MapButton
          onClick={() => {
            toggleMap();
          }}
        >
          {showMap ? (
            <MdFilterList size="1.5rem" color="var(--primary-white)" />
          ) : (
            <MdOutlineMap size="1.5rem" color="var(--primary-white)" />
          )}
        </MapButton>

        {!showForm && (
          <AddButton
            onClick={() => {
              toggleForm();
              setToEditCardID(null);
            }}
          >
            <MdAdd size="1.5rem" color="var(--primary-white)" />
          </AddButton>
        )}
        {showForm && (
          <Form
            appendCard={appendCard}
            latitude={latitude}
            longitude={longitude}
            setLatitude={setLatitude}
            setLongitude={setLongitude}
            setLocalData={setLocalData}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            toggleForm={toggleForm}
          />
        )}
        {showMap && (
          <Map
            nestingboxes={nestingBoxes}
            toEditCardID={toEditCardID}
            setToEditCardID={setToEditCardID}
            appendCard={appendCard}
            deleteCard={deleteCard}
            cardCoords={cardCoords}
          />
        )}
        {!showMap && (
          <>
            <Title />
            <Sum sumOfCounts={sumOfCounts} />
            <Cards
              nestingBoxes={nestingBoxes}
              toEditCardID={toEditCardID}
              setToEditCardID={setToEditCardID}
              appendCard={appendCard}
              deleteCard={deleteCard}
              toggleMap={toggleMap}
              setCardCoords={setCardCoords}
            />
          </>
        )}
      </main>
    </>
  );
}

const MapButton = styled.button`
  width: 3.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: fixed;
  bottom: 5.5rem;
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

const AddButton = styled.button`
  width: 3.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
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
