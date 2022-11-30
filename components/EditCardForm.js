import styled from "styled-components";
import { MdRestore, MdDeleteOutline } from "react-icons/md";
import DeleteModal from "./DeleteModal";

import {
  SecondaryInfoLabel,
  Input,
  Legend,
  Fieldset,
  Form,
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
  const [validationCountAlert, setValidationCountAlert] = useState("");
  const [validationLatitudeAlert, setValidationLatitudeAlert] = useState("");
  const [validationLongitudeAlert, setValidationLongitudeAlert] = useState("");
  const [validationDateAlert, setValidationDateAlert] = useState("");
  const [validationBoxnoAlert, setValidationBoxnoAlert] = useState("");

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

    if (count >= 0 && count < 1000) {
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
                "This is not a valid value for longitude. If you don't have a valid value, you can restore the value or leave the field ."
              );
            }
          } else {
            setValidationLatitudeAlert(
              "This is not a valid value for latitude. If you don't have a valid value, you can restore the value or leave the field ."
            );
          }
        } else {
          setValidationDateAlert(
            "Please enter a valid date. You can't enter future dates."
          );
        }
      } else {
        setValidationBoxnoAlert("Please enter a boxnumber.");
      }
    } else {
      setValidationCountAlert(
        "Please enter a valid Number. The number must be less than 1000."
      );
    }
  }

  const [showDeletePopup, setShowDeletePopup] = useState(false);

  return (
    <Overlay onClick={() => setToEditCardID(null)}>
      {showDeletePopup && (
        <DeleteModal
          nestingbox={nestingbox}
          deleteCard={deleteCard}
          setShowDeletePopup={setShowDeletePopup}
          setToEditCardID={setToEditCardID}
        />
      )}
      <Form
        onSubmit={saveEditedData}
        onClick={(event) => event.stopPropagation()}
        aria-label="edit data"
        autoComplete="off"
      >
        <Fieldset>
          <span>
            <Legend>Data collection</Legend>
          </span>
          <IconSpan>
            <MdDeleteOutline
              size="1.5rem"
              onClick={() => {
                setShowDeletePopup(true);
              }}
              type="button"
              aria-label="delete"
            />
          </IconSpan>
          <SecondaryInfoLabel htmlFor="count">
            Number of bats
          </SecondaryInfoLabel>
          <Input
            isPrimary
            onInput={() => setValidationCountAlert("")}
            type="number"
            name="count"
            id="count"
            aria-label="Count"
            defaultValue={nestingbox.count}
            required
            autoComplete="off"
          ></Input>
          {validationCountAlert && <Alert>{validationCountAlert}</Alert>}
          <SecondaryInfoLabel htmlFor="boxnumber">
            Nesting box no.
          </SecondaryInfoLabel>
          <Input
            isPrimary
            onInput={() => setValidationBoxnoAlert("")}
            type="text"
            name="boxnumber"
            id="boxnumber"
            aria-label="Nesting box Number"
            defaultValue={nestingbox.boxnumber}
            autoComplete="off"
          ></Input>
          {validationBoxnoAlert && <Alert>{validationBoxnoAlert}</Alert>}
        </Fieldset>
        <Fieldset name="local data" id="local data" aria-label="Local data">
          <div>
            <Legend>Local data</Legend>
          </div>
          <IconButton
            onClick={() => {
              setValidationDateAlert("");
              setValidationLatitudeAlert("");
              setValidationLongitudeAlert("");
            }}
            type="reset"
            aria-label="Restore input data"
          >
            <IconSpan>
              <MdRestore size="1.5rem" />
            </IconSpan>
          </IconButton>
          <SecondaryInfoLabel htmlFor="date" required>
            Date
          </SecondaryInfoLabel>
          <Input
            isPrimary
            onInput={() => setValidationDateAlert("")}
            type="date"
            name="date"
            id="date"
            aria-label="Date"
            defaultValue={nestingbox.date}
            min="1950-01-01"
            required
            autoComplete="off"
          ></Input>
          {validationDateAlert && <Alert>{validationDateAlert}</Alert>}
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
            onChange={() => setValidationLatitudeAlert("")}
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
      </Form>
    </Overlay>
  );
}

const IconSpan = styled.span`
  position: absolute;
  top: 0.375rem;
  right: -1rem;
  padding: 1rem 1.5rem 1rem 1rem;
  color: var(--primary-black);
  :hover {
    color: var(--alert-primary);
    cursor: pointer;
  }
  :active {
    color: var(--alert-secondary);
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
`;
