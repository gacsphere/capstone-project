import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Card({
  date,
  time,
  latitude,
  longitude,
  boxnumber,
  count,
}) {
  return (
    <StyledCard>
      <p>Nistkasten Nr. {boxnumber}</p>
      <SecondaryInfo>
        {date}, {time} Uhr
      </SecondaryInfo>
      <SecondaryInfo>
        {latitude}, {longitude}
      </SecondaryInfo>
      <p>{count} Fledermäuse</p>
    </StyledCard>
  );
}

const StyledInputPrimary = styled.input`
  border-style: none;
  font-size: 1rem;
  font-family: "Noto Sans", sans-serif;
  color: var(--primary-black);
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
