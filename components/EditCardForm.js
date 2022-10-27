import styled from "styled-components";
export default function EditCardForm({
  nestingbox,
  setToEditCardID,
  onCreate,
  deleteCard,
}) {
  function saveEditedData(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { date, time, latitude, longitude, boxnumber, count } =
      Object.fromEntries(formData);

    onCreate(date, time, latitude, longitude, boxnumber, count);
    deleteCard(nestingbox.id);
    setToEditCardID(null);
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
        defaultValue={nestingbox.date}
        required
      ></input>
      <label htmlFor="time">Time</label>
      <input
        type="time"
        name="time"
        id="time"
        aria-label="Time"
        defaultValue={nestingbox.time}
        required
      ></input>
      <label htmlFor="count">Number of bats</label>
      <input
        type="number"
        name="count"
        id="count"
        aria-label="Count"
        min="0"
        max="200"
        defaultValue={nestingbox.count}
        required
      ></input>
      <label htmlFor="latitude">Latitude</label>
      <input
        type="number"
        name="latitude"
        id="latitude"
        aria-label="Latitude"
        defaultValue={nestingbox.latitude}
      />
      <label htmlFor="longitude">Longitude</label>
      <input
        type="number"
        name="longitude"
        id="longitude"
        aria-label="Longitude"
        defaultValue={nestingbox.longitude}
      ></input>
      <label htmlFor="boxnumber">Nesting box ID</label>
      <input
        type="text"
        name="boxnumber"
        id="boxnumber"
        aria-label="Nesting box Number"
        defaultValue={nestingbox.boxnumber}
        required
      ></input>
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
  padding: 1rem;
  border-bottom: 1px solid;
  border-color: var(--primary-gray);
`;
