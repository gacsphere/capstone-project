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

export default function Create({
  appendCard,
  latitude,
  longitude,
  date,
  time,
  setLocalData,
  toggleForm,
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
      <Overlay onClick={() => toggleForm()}>
        <FormPopup
          onSubmit={handleSubmit}
          onClick={(event) => event.stopPropagation()}
          aria-label="data acquisition"
        >
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
            required
          ></Input>
          <SecondaryInfoLabel htmlFor="boxnumber">
            Nesting box no.
          </SecondaryInfoLabel>
          <Input
            isPrimary
            type="text"
            name="boxnumber"
            id="boxnumber"
            aria-label="Nesting box Number"
            required
          ></Input>
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
        </FormPopup>
      </Overlay>
    </>
  );
}
