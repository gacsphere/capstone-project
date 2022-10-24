import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Card({
  date,
  time,
  latitude,
  longitude,
  boxnumber,
  count,
  onUpdate
}) 

function handleUpdate(event) {
  onUpdate(nestingbox.id, event.target.value)
}


{
  return (
    <StyledCard>
      <p>
        Nistkasten Nr. <StyledInputPrimary value={boxnumber} onChange={handleUpdate}/>
      </p>
      <SecondaryInfo>
        <StyledInputSecondary value={date} />,
        <StyledInputSecondary value={time} /> Uhr
      </SecondaryInfo>
      <SecondaryInfo>
        <StyledInputSecondary value={latitude} />,
        <StyledInputSecondary value={longitude} />
      </SecondaryInfo>
      <p>
        <StyledInputPrimary value={count} /> Fledermäuse
      </p>
    </StyledCard>
  );
}

const StyledInputPrimary = styled.input`
  border-style: none;
  font-size: 1rem;
  font-family: "Noto Sans", sans-serif;
  color: var(--primary-black);
  /* width: min-content; */
  min-width: none;
`;

const StyledInputSecondary = styled.input`
  border-style: none;
  font-size: 0.75rem;
  font-family: "Noto Sans", sans-serif;
  color: var(--primary-gray);
  width: fit-content;
`;

const StyledCard = styled.li`
  background-color: var(--primary-white);
  padding: 1rem;
  border-bottom: 1px solid;
  border-color: var(--primary-gray);
  :hover {
    background-color: var(--background-primary);
    cursor: pointer;
  }
`;

const SecondaryInfo = styled.p`
  font-size: 0.75rem;
  color: var(--primary-gray);
`;
