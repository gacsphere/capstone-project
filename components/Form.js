import { useState } from "react";

import {
  SecondaryInfoLabel,
  Input,
  Legend,
  Fieldset,
  Form,
  Overlay,
  Alert,
  Button,
} from "./StyledComponents";

export default function Create({
  appendCard,
  latitude,
  longitude,
  date,
  time,
  setLocalData,
  toggleForm,
}) {
  const [validationCountAlert, setValidationCountAlert] = useState("");
  const [validationBoxnoAlert, setValidationBoxnoAlert] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);

    if (boxnumber.trim().length > 0) {
      if (count >= 0 && count < 1000) {
        appendCard(date, time, latitude, longitude, boxnumber, count);
        event.target.reset();
        event.target.elements.count.focus();
      } else {
        setValidationCountAlert(
          "Please enter a valid Number. The number must be less than 1000."
        );
      }
    } else {
      setValidationBoxnoAlert("Please enter a boxnumber.");
    }
  }

  return (
    <>
      <Overlay onClick={() => toggleForm()}>
        <Form
          onSubmit={handleSubmit}
          onClick={(event) => event.stopPropagation()}
          aria-label="data acquisition"
          autoComplete="off"
        >
          <Fieldset>
            <Legend>Data collection</Legend>
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
              autoComplete="off"
            ></Input>
            {validationBoxnoAlert && <Alert>{validationBoxnoAlert}</Alert>}
          </Fieldset>
          <Fieldset name="local data" id="local data" aria-label="Local data">
            <Legend>Local data</Legend>
            <Button
              type="button"
              onClick={setLocalData}
              aria-label="Set local data"
            >
              Load local data
            </Button>
            <SecondaryInfoLabel htmlFor="date" required>
              Date
            </SecondaryInfoLabel>
            <Input
              type="date"
              name="date"
              id="date"
              aria-label="Date"
              value={date}
              required
            ></Input>
            <SecondaryInfoLabel htmlFor="time">Time</SecondaryInfoLabel>
            <Input
              type="time"
              name="time"
              id="time"
              aria-label="Time"
              value={time}
              required
            ></Input>
            <SecondaryInfoLabel htmlFor="latitude">Latitude</SecondaryInfoLabel>
            <Input
              type="number"
              name="latitude"
              id="latitude"
              aria-label="Latitude"
              value={latitude}
            />
            <SecondaryInfoLabel htmlFor="longitude">
              Longitude
            </SecondaryInfoLabel>
            <Input
              type="number"
              name="longitude"
              id="longitude"
              aria-label="Longitude"
              value={longitude}
            ></Input>
          </Fieldset>

          <Button isPrimary type="submit" aria-label="Save entries">
            Save
          </Button>
          <Button onClick={toggleForm} type="button" aria-label="Cancel">
            Cancel
          </Button>
        </Form>
      </Overlay>
    </>
  );
}
