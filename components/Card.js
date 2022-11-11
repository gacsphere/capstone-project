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
      <p>{count} bats</p>
      <SeparatorCard isPrimary />
      <SecondaryInfo>
        {date}, {time}
      </SecondaryInfo>
      <SecondaryInfo>
        {latitude}, {longitude}
      </SecondaryInfo>
      <SeparatorCard />
      <p>Nesting box no. {boxnumber}</p>
      <Span
        onClick={(event) => {
          event.stopPropagation();
          toggleMap();
          setCardCoords([latitude, longitude]);
        }}
      >
        <MdOutlineMap size="1.5rem" color="var(--primary-black)" />
      </Span>
    </StyledCard>
  );
}

const StyledCard = styled.li`
  background-color: var(--primary-white);
  padding: 1rem;
  margin: 1rem;
  border-color: var(--primary-gray);
  position: relative;
  :hover {
    transform: scale(1.025, 1.025);
    cursor: pointer;
  }
`;

const SecondaryInfo = styled.p`
  font-size: 0.75rem;
  color: var(--primary-gray);
`;

const Span = styled.span`
  position: absolute;
  bottom: -0.5rem;
  right: 1.5rem;
  padding: 1rem;
  background-color: var(--secondary-gray);
  transform: rotate(15deg);
  :hover {
    background-color: var(--secondary-gray);
    transform: rotate(0deg);
  }
`;

const SeparatorCard = styled.hr`
  border-width: 0.125rem;
  border-style: solid;
  border-color: var(--secondary-gray);
  margin: 0.5rem 0;
  width: ${({ isPrimary }) => (isPrimary ? "" : "calc(100vw - 9.5rem)")};
`;
