import styled from "styled-components";
export default function EditCardForm({ id, latitude, longitude }) {
  return (
    <StyledForm aria-label="edit data">
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
        max="200"
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
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  padding: 1rem;
  border-bottom: 1px solid;
  border-color: var(--primary-gray);
`;
