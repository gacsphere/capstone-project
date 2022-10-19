import { StyledAnchor } from "../../components/Button/button";
import styled from "styled-components";
import Link from "next/link";
import React from "react";

export default function Create() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input type="date" name="date" id="date" required></input>
        <label htmlFor="time">Time</label>
        <input type="time" name="time" id="time" required></input>
        <label htmlFor="count">Anzahl Fledermäuse</label>
        <input type="number" name="count" id="count" required></input>
        <label htmlFor="latitude">Geografische Breite</label>
        <input type="number" name="latitude" id="latitude" required></input>
        <label htmlFor="longitude">Geografische Länge</label>
        <input type="number" name="longitude" id="longitude" required></input>
        <label htmlFor="boxnumber">Nistkasten Nr.</label>
        <input type="number" name="boxnumber" id="boxnumber" required></input>
      </StyledForm>
      <Link href="/">
        <StyledAnchor>Abbrechen</StyledAnchor>
      </Link>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;
