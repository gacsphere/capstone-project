import { StyledAnchor } from "../Button/button";
import styled from "styled-components";
import Link from "next/link";
import React from "react";

export default function Create({ onCreate, latitude, longitude }) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);

    onCreate(date, time, latitude, longitude, boxnumber, count);
    event.target.reset();
    event.target.elements.date.focus();
  }

  return (
    <>
      <form onSubmit={handleSubmit} aria-labelledby="legend">
        <StyledFieldset>
          <legend id="legend">Datenerfassung</legend>
          <label htmlFor="date">Date</label>
          <input type="date" name="date" id="date" aria-label="Date"></input>
          <label htmlFor="time">Time</label>
          <input type="time" name="time" id="time" aria-label="Time"></input>
          <label htmlFor="count">Anzahl Fledermäuse</label>
          <input
            type="number"
            name="count"
            id="count"
            aria-label="Count"
          ></input>
          <label htmlFor="latitude">Geografische Breite</label>
          <input
            type="number"
            name="latitude"
            id="latitude"
            aria-label="Latitude"
            defaultValue={latitude}
          />
          <label htmlFor="longitude">Geografische Länge</label>
          <input
            type="number"
            name="longitude"
            id="longitude"
            aria-label="Longitude"
            defaultValue={longitude}
          ></input>
          <label htmlFor="boxnumber">Nistkasten Nr.</label>
          <input
            type="number"
            name="boxnumber"
            id="boxnumber"
            aria-label="Nesting box Number"
          ></input>
          <StyledButton type="submit" aria-label="Save entries">
            Speichern
          </StyledButton>
          <StyledButton type="reset" aria-label="Reset all inputs">
            Reset
          </StyledButton>
        </StyledFieldset>
      </form>
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

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border: none;
`;
