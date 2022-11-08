import styled from "styled-components";
import {
  SecondaryInfoLabel,
  StyledInput,
  StyledLegend,
  StyledFieldset,
  StyledForm,
  StyledAlert,
  StyledButton,
} from "./ReusedStyles";
import { useState } from "react";

export default function EditCardForm({
  nestingbox,
  setToEditCardID,
  appendCard,
  deleteCard,
}) {
  const [validationLatitudeAlert, setValidationLatitudeAlert] = useState("");
  const [validationLongitudeAlert, setValidationLongitudeAlert] = useState("");
  const [validationTimeAlert, setValidationTimeAlert] = useState("");
  const [validationBoxnoEmptyAlert, setValidationBoxnoEmptyAlert] =
    useState("");

  function isValidLat(lat) {
    return isFinite(lat) && Math.abs(lat) <= 90;
  }

  function isValidLong(lng) {
    return isFinite(lng) && Math.abs(lng) <= 180;
  }

  function saveEditedData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);

    if (boxnumber.trim().length > 0) {
      if (
        date.replace(/\D/g, "") <=
        new Date().toISOString().slice(0, 10).replace(/\D/g, "")
      ) {
        if (isValidLat(latitude) || latitude === "") {
          if (isValidLong(longitude) || longitude === "") {
            appendCard(date, time, latitude, longitude, boxnumber, count);
            deleteCard(nestingbox.id);
            setToEditCardID(null);
          } else {
            setValidationLongitudeAlert(
              "This is not a valid value for longitude. If you don't have a valid value, you can restore the value or leave the field empty."
            );
          }
        } else {
          setValidationLatitudeAlert(
            "This is not a valid value for latitude. If you don't have a valid value, you can restore the value or leave the field empty."
          );
        }
      } else {
        setValidationTimeAlert(
          "Please enter a valid date. You can't enter future dates."
        );
      }
    } else {
      setValidationBoxnoEmptyAlert("Please enter a boxnumber.");
    }
  }

  return (
    <Overlay>
      <FormPopup onSubmit={saveEditedData} aria-label="edit data">
        <StyledLegend>Data collection</StyledLegend>
        <SecondaryInfoLabel htmlFor="count">Number of bats</SecondaryInfoLabel>
        <StyledInput
          isPrimary
          type="number"
          name="count"
          id="count"
          aria-label="Count"
          min="0"
          max="700"
          defaultValue={nestingbox.count}
          required
        ></StyledInput>
        <SecondaryInfoLabel htmlFor="boxnumber">
          Nesting box no.
        </SecondaryInfoLabel>
        <StyledInput
          isPrimary
          onInput={() => setValidationBoxnoEmptyAlert("")}
          type="text"
          name="boxnumber"
          id="boxnumber"
          aria-label="Nesting box Number"
          defaultValue={nestingbox.boxnumber}
        ></StyledInput>
        {validationBoxnoEmptyAlert && (
          <StyledAlert>{validationBoxnoEmptyAlert}</StyledAlert>
        )}
        <StyledFieldset
          name="local data"
          id="local data"
          aria-label="Local data"
        >
          <StyledLegend>Local data</StyledLegend>
          <SecondaryInfoLabel htmlFor="date" required>
            Date
          </SecondaryInfoLabel>
          <StyledInput
            isPrimary
            type="date"
            name="date"
            id="date"
            aria-label="Date"
            defaultValue={nestingbox.date}
            min="1950-01-01"
            required
          ></StyledInput>
          {validationTimeAlert && (
            <StyledAlert>{validationTimeAlert}</StyledAlert>
          )}
          <SecondaryInfoLabel htmlFor="time">Time</SecondaryInfoLabel>
          <StyledInput
            isPrimary
            type="time"
            name="time"
            id="time"
            aria-label="Time"
            defaultValue={nestingbox.time}
            required
          ></StyledInput>

          <SecondaryInfoLabel htmlFor="latitude">Latitude</SecondaryInfoLabel>
          <StyledInput
            isPrimary
            onInput={() => setValidationLatitudeAlert("")}
            type="number"
            step="0.000001"
            name="latitude"
            id="latitude"
            aria-label="Latitude"
            defaultValue={nestingbox.latitude}
          />
          {validationLatitudeAlert && (
            <StyledAlert>{validationLatitudeAlert}</StyledAlert>
          )}
          <SecondaryInfoLabel htmlFor="longitude">Longitude</SecondaryInfoLabel>
          <StyledInput
            isPrimary
            onInput={() => setValidationLongitudeAlert("")}
            type="number"
            step="0.000001"
            name="longitude"
            id="longitude"
            aria-label="Longitude"
            defaultValue={nestingbox.longitude}
          ></StyledInput>
          {validationLongitudeAlert && (
            <StyledAlert>{validationLongitudeAlert}</StyledAlert>
          )}
        </StyledFieldset>

        <StyledButton type="submit" aria-label="Save entries">
          Save
        </StyledButton>
        <StyledButton type="reset" aria-label="Save entries">
          Restore
        </StyledButton>
        <StyledButton
          onClick={() => deleteCard(nestingbox.id)}
          type="button"
          aria-label="delete"
        >
          Delete
        </StyledButton>
        <StyledButton
          onClick={() => setToEditCardID(null)}
          type="button"
          aria-label="cancel"
        >
          Cancel
        </StyledButton>
      </FormPopup>
    </Overlay>
  );
}

const FormPopup = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  position: absolute;
  bottom: 0.5rem;
  max-height: calc(100% - 3rem);
  overflow: auto;
  background-color: var(--secondary-gray);
  width: calc(100% - 2rem);
`;

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-black-opac);
  backdrop-filter: blur(0.125rem);
  z-index: 401;
`;
