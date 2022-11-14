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
      <PrimaryInfo>{count} bats</PrimaryInfo>
      <SeparatorCard isPrimary />
      <SecondaryInfo>
        {date}, {time}
      </SecondaryInfo>
      <SecondaryInfo>
        {latitude}, {longitude}
      </SecondaryInfo>
      <SeparatorCard />
      <PrimaryInfo>Nesting box no. {boxnumber}</PrimaryInfo>
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

const PrimaryInfo = styled.p`
  font-size: 1.5rem;
  font-weight: 700;
  padding-right: 4rem;
`;

const SecondaryInfo = styled.p`
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--primary-gray);
`;

const Span = styled.span`
  position: absolute;
  bottom: -0.5rem;
  right: 1rem;
  padding: 1rem;
  background-color: var(--secondary-gray);
  transform: rotate(-15deg);
  :hover {
    background-color: var(--secondary-gray);
    transform: rotate(0deg);
  }
`;

const SeparatorCard = styled.hr`
  border-width: 0.125rem;
  border-style: solid;
  border-color: var(--secondary-gray);
  background-color: var(--secondary-gray);
  margin: 0.5rem 0;
  width: ${({ isPrimary }) => (isPrimary ? "" : "calc(100vw - 9rem)")};
`;
