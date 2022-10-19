import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Card({ date, time, nestingbox, count }) {
  return (
    <StyledCard>
      <p>Nistkasten Nr. {nestingbox}</p>
      <SecondaryInfo>
        {date}, {time}
      </SecondaryInfo>

      <p>{count} Fledermäuse</p>
    </StyledCard>
  );
}

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
