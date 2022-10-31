import styled from "styled-components";
import { SecondaryInfoLabel, StyledInput } from "./StyledComponents";
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

  function saveEditedData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);

    function isValidLat(lat) {
      return isFinite(lat) && Math.abs(lat) <= 90;
    }

    function isValidLong(lng) {
      return isFinite(lng) && Math.abs(lng) <= 180;
    }

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
        "Please enter a valid date. You can't enter future dates.>"
      );
    }
  }

  return (
    <StyledForm onSubmit={saveEditedData} aria-label="edit data">
      <SecondaryInfoLabel htmlFor="count">Number of bats</SecondaryInfoLabel>
      <StyledInput
        type="number"
        name="count"
        id="count"
        aria-label="Count"
        min="0"
        max="200"
        defaultValue={nestingbox.count}
        required
      ></StyledInput>
      <SecondaryInfoLabel htmlFor="boxnumber">
        Nesting box ID
      </SecondaryInfoLabel>
      <StyledInput
        type="text"
        name="boxnumber"
        id="boxnumber"
        aria-label="Nesting box Number"
        defaultValue={nestingbox.boxnumber}
        required
      ></StyledInput>
      <SecondaryInfoLabel htmlFor="date" required>
        Date
      </SecondaryInfoLabel>
      <StyledInput
        type="date"
        name="date"
        id="date"
        aria-label="Date"
        defaultValue={nestingbox.date}
        required
      ></StyledInput>
      {validationTimeAlert && <StyledAlert>{validationTimeAlert}</StyledAlert>}
      <SecondaryInfoLabel htmlFor="time">Time</SecondaryInfoLabel>
      <StyledInput
        type="time"
        name="time"
        id="time"
        aria-label="Time"
        defaultValue={nestingbox.time}
        required
      ></StyledInput>

      <SecondaryInfoLabel htmlFor="latitude">Latitude</SecondaryInfoLabel>
      <StyledInput
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
    </StyledForm>
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
  border-bottom: 1px solid;
  border-color: var(--primary-gray);
`;

const StyledAlert = styled.p`
  color: var(--primary-black);
  padding: 1rem;
  background-color: var(--primary-white);
`;
