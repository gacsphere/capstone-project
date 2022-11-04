import Head from "next/head";
import styled from "styled-components";
import Card from "../components/Card";
import Cards from "../components/Cards";
import Form from "../components/Form";
import Sum from "../components/Sum";
import EditFormCard from "../components/EditCardForm";
import { nanoid } from "nanoid";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import useLocalStorage from "../hooks/useLocalStorage";
import dynamic from "next/dynamic";
// import ButtonMap from "../components/ButtonMap";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

const initialNestingBoxes = [
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "15:56",
    latitude: 49.138844,
    longitude: 8.278068,
    boxnumber: 246,
    count: 4,
  },
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "16:00",
    latitude: 49.139855,
    longitude: 8.278925,
    boxnumber: 247,
    count: 25,
  },
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "16:07",
    latitude: 49.140087,
    longitude: 8.279923,
    boxnumber: 248,
    count: 17,
  },
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "16:17",
    latitude: 49.140431,
    longitude: 8.280137,
    boxnumber: 250,
    count: 8,
  },
  {
    id: nanoid(),
    date: "2021-08-31",
    time: "16:34",
    latitude: 49.140831,
    longitude: 8.28136,
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

  const [toEditCardID, setToEditCardID] = useState(null);

  return (
    <div>
      <Head>
        <title>batSCAN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <MapButton
          onClick={() => {
            toggleMap();
          }}
        >
          {showMap ? "L" : "M"}
        </MapButton>
        {showMap && <Map />}

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
        {!showForm && (
          <AddButton
            onClick={() => {
              toggleForm();
              setToEditCardID(null);
            }}
          >
            +
          </AddButton>
        )}

        {!showMap && <Sum sumOfCounts={sumOfCounts} />}
        {!showMap && (
          <Cards
            nestingBoxes={nestingBoxes}
            toEditCardID={toEditCardID}
            setToEditCardID={setToEditCardID}
            appendCard={appendCard}
            deleteCard={deleteCard}
          />
        )}
      </main>
    </div>
  );
}

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
`;

const MapButton = styled.button`
  width: 3.5rem;
  aspect-ratio: 1;
  border-radius: 50%;
  position: fixed;
  top: 1rem;
  right: 1rem;
  background-color: var(--primary-black);
  color: var(--primary-white);
  border: none;
  z-index: 401;
`;
