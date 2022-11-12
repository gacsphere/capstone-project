import styled from "styled-components";
import {
  SecondaryInfoLabel,
  Input,
  Legend,
  Fieldset,
  FormPopup,
  Overlay,
  Alert,
  Button,
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
    <Overlay onClick={() => setToEditCardID(null)}>
      <FormPopup
        onSubmit={saveEditedData}
        onClick={(event) => event.stopPropagation()}
        aria-label="edit data"
        autoComplete="off"
      >
        <Fieldset>
          <Legend>Data collection</Legend>
          <SecondaryInfoLabel htmlFor="count">
            Number of bats
          </SecondaryInfoLabel>
          <Input
            isPrimary
            type="number"
            name="count"
            id="count"
            aria-label="Count"
            min="0"
            max="700"
            defaultValue={nestingbox.count}
            required
            autoComplete="off"
          ></Input>
          <SecondaryInfoLabel htmlFor="boxnumber">
            Nesting box no.
          </SecondaryInfoLabel>
          <Input
            isPrimary
            onInput={() => setValidationBoxnoEmptyAlert("")}
            type="text"
            name="boxnumber"
            id="boxnumber"
            aria-label="Nesting box Number"
            defaultValue={nestingbox.boxnumber}
            autoComplete="off"
          ></Input>
          {validationBoxnoEmptyAlert && (
            <Alert>{validationBoxnoEmptyAlert}</Alert>
          )}
        </Fieldset>
        <Fieldset name="local data" id="local data" aria-label="Local data">
          <Legend>Local data</Legend>
          <SecondaryInfoLabel htmlFor="date" required>
            Date
          </SecondaryInfoLabel>
          <Input
            isPrimary
            type="date"
            name="date"
            id="date"
            aria-label="Date"
            defaultValue={nestingbox.date}
            min="1950-01-01"
            required
            autoComplete="off"
          ></Input>
          {validationTimeAlert && <Alert>{validationTimeAlert}</Alert>}
          <SecondaryInfoLabel htmlFor="time">Time</SecondaryInfoLabel>
          <Input
            isPrimary
            type="time"
            name="time"
            id="time"
            aria-label="Time"
            defaultValue={nestingbox.time}
            required
            autoComplete="off"
          ></Input>

          <SecondaryInfoLabel htmlFor="latitude">Latitude</SecondaryInfoLabel>
          <Input
            isPrimary
            onInput={() => setValidationLatitudeAlert("")}
            type="number"
            step="0.000001"
            name="latitude"
            id="latitude"
            aria-label="Latitude"
            defaultValue={nestingbox.latitude}
            autoComplete="off"
          />
          {validationLatitudeAlert && <Alert>{validationLatitudeAlert}</Alert>}
          <SecondaryInfoLabel htmlFor="longitude">Longitude</SecondaryInfoLabel>
          <Input
            isPrimary
            onInput={() => setValidationLongitudeAlert("")}
            type="number"
            step="0.000001"
            name="longitude"
            id="longitude"
            aria-label="Longitude"
            defaultValue={nestingbox.longitude}
            autoComplete="off"
          ></Input>
          {validationLongitudeAlert && (
            <Alert>{validationLongitudeAlert}</Alert>
          )}
        </Fieldset>

        <Button isPrimary type="submit" aria-label="Save entries">
          Save
        </Button>
        <Button
          onClick={() => setToEditCardID(null)}
          type="button"
          aria-label="cancel"
        >
          Cancel
        </Button>
        <Button type="reset" aria-label="Save entries">
          Restore
        </Button>
        <Button
          isAlert
          onClick={() => {
            deleteCard(nestingbox.id);
            setToEditCardID(null);
          }}
          type="button"
          aria-label="delete"
        >
          Delete
        </Button>
      </FormPopup>
    </Overlay>
  );
}
