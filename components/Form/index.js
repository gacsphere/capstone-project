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
      <StyledForm onSubmit={handleSubmit} aria-label="data acquisition">
        <legend>Datenerfassung</legend>
        <label htmlFor="date" required>
          Date
        </label>
        <input
          type="date"
          name="date"
          id="date"
          aria-label="Date"
          required
        ></input>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          id="time"
          aria-label="Time"
          required
        ></input>
        <label htmlFor="count">Anzahl Fledermäuse</label>
        <input
          type="number"
          name="count"
          id="count"
          aria-label="Count"
          min="0"
          required
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
        <label htmlFor="boxnumber">Nistkasten ID</label>
        <input
          type="text"
          name="boxnumber"
          id="boxnumber"
          aria-label="Nesting box Number"
          required
        ></input>
        <StyledButton type="submit" aria-label="Save entries">
          Speichern
        </StyledButton>
        <StyledButton type="reset" aria-label="Reset all inputs">
          Reset
        </StyledButton>
      </StyledForm>
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
  border: none;
`;
