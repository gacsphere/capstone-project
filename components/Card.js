import styled from "styled-components";
import { MdOutlineMap } from "react-icons/md";

export default function Card({
  id,
  date,
  time,
  latitude,
  longitude,
  boxnumber,
  count,
  setToEditCardID,
  toggleMap,
  setCardCoords,
}) {
  return (
    <StyledCard onClick={() => setToEditCardID(id)}>
      <p>Nesting box no. {boxnumber}</p>
      <SecondaryInfo>
        {date}, {time} h
      </SecondaryInfo>
      <SecondaryInfo>
        {latitude}, {longitude}
      </SecondaryInfo>
      <p>{count} bats</p>
      <span onClick={(event) => event.stopPropagation()}>
        <MdOutlineMap
          onClick={() => {
            toggleMap();
            setCardCoords([latitude, longitude]);
          }}
        />
      </span>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  background-color: var(--primary-white);
  padding: 1rem;
  border-bottom: 1px solid;
  border-color: var(--primary-gray);
  :hover {
    background-color: var(--secondary-gray);
    cursor: pointer;
  }
`;

const SecondaryInfo = styled.p`
  font-size: 0.75rem;
  color: var(--primary-gray);
`;
