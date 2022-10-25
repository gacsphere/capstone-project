import Head from "next/head";
import styled from "styled-components";
import { StyledAnchor } from "../components/Button/button";
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
  }

  function deleteCard(nestingBoxId) {
    setNestingBoxes((nestingBoxes) =>
      nestingBoxes.filter(({ id }) => nestingBoxId !== id)
    );
  }

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitudeGeolocation = position.coords.latitude;
      setLatitude(latitudeGeolocation);
    });
  }, [setLatitude]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const longitudeGeolocation = position.coords.longitude;
      setLongitude(longitudeGeolocation);
    });
  }, [setLongitude]);

  const sumOfCounts = nestingBoxes
    .map((nestingbox) => nestingbox.count)
    .reduce((a, b) => a + b, 0);

  const [showEditCard, setShowEditCard] = useState(null);

  return (
    <div>
      <Head>
        <title>batSCAN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Form onCreate={appendCard} latitude={latitude} longitude={longitude} />
        <Sum sumOfCounts={sumOfCounts} />
        <Cards
          nestingBoxes={nestingBoxes}
          showEditCard={showEditCard}
          setShowEditCard={setShowEditCard}
          onCreate={appendCard}
          deleteCard={deleteCard}
        />
      </main>
    </div>
  );
}
