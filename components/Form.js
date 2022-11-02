import styled from "styled-components";
import {
  SecondaryInfoLabel,
  StyledInput,
  StyledLegend,
  StyledFieldset,
  StyledAlert,
  StyledButton,
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
          <StyledLegend>Data collection</StyledLegend>
          <SecondaryInfoLabel htmlFor="count">
            Number of bats
          </SecondaryInfoLabel>
          <StyledInput
            isPrimary
            type="number"
            name="count"
            id="count"
            aria-label="Count"
            min="0"
            max="700"
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
            <StyledLegend>Local data</StyledLegend>
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
            <SecondaryInfoLabel htmlFor="longitude">
              Longitude
            </SecondaryInfoLabel>
            <StyledInput
              type="number"
              name="longitude"
              id="longitude"
              aria-label="Longitude"
              value={longitude}
            ></StyledInput>
          </StyledFieldset>

          <StyledButton isPrimary type="submit" aria-label="Save entries">
            Save
          </StyledButton>
          <StyledButton
            onClick={() => toggleForm()}
            type="button"
            aria-label="Cancel"
          >
            Cancel
          </StyledButton>
        </FormPopup>
      </Overlay>
    </>
  );
}

const FormPopup = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  position: absolute;
  bottom: 1rem;
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
`;
