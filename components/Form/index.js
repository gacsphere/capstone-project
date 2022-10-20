import { StyledAnchor } from "../Button/button";
import styled from "styled-components";
import Link from "next/link";
import React from "react";

export default function Create({ onCreate }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);

    onCreate(date, time, latitude, longitude, boxnumber, count);
    event.target.reset();
    event.target.elements.date.focus();
  }
  //   const today = new Date().toISOString().slice(0, 10);
  //   const todayTime = new Date();
  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        {/* <h1>{today}</h1>
        <h1>{todayTime}</h1> */}
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date"></input>
        <label htmlFor="time">Time</label>
        <input type="time" name="time" id="time"></input>
        <label htmlFor="count">Anzahl Fledermäuse</label>
        <input type="number" name="count" id="count"></input>
        <label htmlFor="latitude">Geografische Breite</label>
        <input type="number" name="latitude" id="latitude" />
        <label htmlFor="longitude">Geografische Länge</label>
        <input type="number" name="longitude" id="longitude"></input>
        <label htmlFor="boxnumber">Nistkasten Nr.</label>
        <input type="number" name="boxnumber" id="boxnumber"></input>
        <StyledButton type="submit">Speichern</StyledButton>
      </StyledForm>

      {/* <Link href="/">
        <StyledAnchor>Abbrechen</StyledAnchor>
      </Link> */}
    </>
  );
}

const StyledButton = styled.button`
  background-color: var(--primary-black);
  color: var(--primary-white);
  display: flex;
  justify-content: center;
  padding: 1rem;
  border: none;
  margin-top: 1rem;
  :hover {
    background-color: var(--primary-gray);
    cursor: pointer;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
