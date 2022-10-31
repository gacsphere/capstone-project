import { StyledAnchor } from "./Button";
import styled from "styled-components";
import Link from "next/link";
import React from "react";
import { SecondaryInfoLabel, StyledInput } from "./StyledComponents";

export default function Create({
  appendCard,
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

    appendCard(date, time, latitude, longitude, boxnumber, count);
    event.target.reset();
    event.target.elements.count.focus();
  }

  return (
    <>
      <StyledForm onSubmit={handleSubmit} aria-label="data acquisition">
        <StyledLegend>Data collection</StyledLegend>
        <SecondaryInfoLabel htmlFor="count">Number of bats</SecondaryInfoLabel>
        <StyledInput
          isPrimary
          type="number"
          name="count"
          id="count"
          aria-label="Count"
          min="0"
          max="9000"
          required
        ></StyledInput>
        <SecondaryInfoLabel htmlFor="boxnumber">
          Nesting box no.
        </SecondaryInfoLabel>
        <StyledInput
          isPrimary
          type="text"
          name="boxnumber"
          id="boxnumber"
          aria-label="Nesting box Number"
          required
        ></StyledInput>
        <StyledFieldset
          name="local data"
          id="local data"
          aria-label="Local data"
        >
          Local data
          <StyledButton
            type="button"
            onClick={() => setLocalData()}
            aria-label="Set local data"
          >
            Load local data
          </StyledButton>
          <SecondaryInfoLabel htmlFor="date" required>
            Date
          </SecondaryInfoLabel>
          <StyledInput
            type="date"
            name="date"
            id="date"
            aria-label="Date"
            value={date}
            required
          ></StyledInput>
          <SecondaryInfoLabel htmlFor="time">Time</SecondaryInfoLabel>
          <StyledInput
            type="time"
            name="time"
            id="time"
            aria-label="Time"
            value={time}
            required
          ></StyledInput>
          <SecondaryInfoLabel htmlFor="latitude">Latitude</SecondaryInfoLabel>
          <StyledInput
            type="number"
            name="latitude"
            id="latitude"
            aria-label="Latitude"
            value={latitude}
          />
          <SecondaryInfoLabel htmlFor="longitude">Longitude</SecondaryInfoLabel>
          <StyledInput
            type="number"
            name="longitude"
            id="longitude"
            aria-label="Longitude"
            value={longitude}
          ></StyledInput>
        </StyledFieldset>

        <StyledButton type="submit" aria-label="Save entries">
          Save
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

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: none;
`;

const StyledLegend = styled.legend`
  padding: 0;
`;
