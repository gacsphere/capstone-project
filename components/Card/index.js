import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Card({ date, time, nistkasten, count }) {
  return (
    <StyledCard>
      <p>Nistkasten Nr. {nistkasten}</p>
      <SecondaryInfo>
        {date}, {time}
      </SecondaryInfo>

      <p>
        <StyledCount>{count}</StyledCount> Fledermäuse
      </p>
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

const StyledCount = styled.span`
  background-color: var(--primary-white);
  padding: 0.5rem;
  border: 0.5rem;
  border-style: solid;
  border-color: var(--primary-black);
  border-radius: 50%;
  display: inline-block;
  min-width: 54px;
  text-align: center;
`;
