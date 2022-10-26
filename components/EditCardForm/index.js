import styled from "styled-components";
export default function EditCardForm({
  id,
  date,
  time,
  latitude,
  longitude,
  boxnumber,
  count,
  setShowEditCard,
  onCreate,
  deleteCard,
}) {
  function saveEditedData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);

    onCreate(date, time, latitude, longitude, boxnumber, count);
    deleteCard(id);
    setShowEditCard(null);
  }

  return (
    <StyledForm onSubmit={saveEditedData} aria-label="edit data">
      <label htmlFor="date" required>
        Date
      </label>
      <input
        type="date"
        name="date"
        id="date"
        aria-label="Date"
        defaultValue={date}
        required
      ></input>
      <label htmlFor="time">Time</label>
      <input
        type="time"
        name="time"
        id="time"
        aria-label="Time"
        defaultValue={time}
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
        defaultValue={count}
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
        defaultValue={boxnumber}
        required
      ></input>
      <StyledButton type="submit" aria-label="Save entries">
        Speichern
      </StyledButton>
      <StyledButton
        onClick={() => deleteCard(id)}
        type="button"
        aria-label="delete"
      >
        Löschen
      </StyledButton>
      <StyledButton
        onClick={() => setShowEditCard(null)}
        type="button"
        aria-label="cancel"
      >
        Abbrechen
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
  padding: 1rem;
  border-bottom: 1px solid;
  border-color: var(--primary-gray);
`;
