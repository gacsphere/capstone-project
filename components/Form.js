import { StyledAnchor } from "./Button";
import styled from "styled-components";
import Link from "next/link";
import React from "react";

export default function Create({
  onCreate,
  latitude,
  longitude,
  date,
  time,
  setLocalData,
}) {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);

    onCreate(date, time, latitude, longitude, boxnumber, count);
    event.target.reset();
    event.target.elements.count.focus();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit} aria-label="data acquisition">
        <legend>Data collection</legend>
        <label htmlFor="date" required>
          Datum
        </label>
        <input
          type="date"
          name="date"
          id="date"
          aria-label="Date"
          value={date}
          required
        ></input>
        <label htmlFor="time">Time</label>
        <input
          type="time"
          name="time"
          id="time"
          aria-label="Time"
          value={time}
          required
        ></input>
        <label htmlFor="count">Number of bats</label>
        <input
          type="number"
          name="count"
          id="count"
          aria-label="Count"
          min="0"
          max="9000"
          required
        ></input>
        <label htmlFor="latitude">Latitude</label>
        <input
          type="number"
          name="latitude"
          id="latitude"
          aria-label="Latitude"
          value={latitude}
        />
        <label htmlFor="longitude">Longitude</label>
        <input
          type="number"
          name="longitude"
          id="longitude"
          aria-label="Longitude"
          value={longitude}
        ></input>
        <label htmlFor="boxnumber">Nesting box ID</label>
        <input
          type="text"
          name="boxnumber"
          id="boxnumber"
          aria-label="Nesting box Number"
          required
        ></input>
        <StyledButton type="submit" aria-label="Save entries">
          Save
        </StyledButton>
        <StyledButton
          type="button"
          onClick={() => setLocalData()}
          aria-label="Reset local data"
        >
          Load local data
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
