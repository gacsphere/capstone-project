import { nanoid } from "nanoid";
import styled from "styled-components";

export default function Card({
  id,
  date,
  time,
  latitude,
  longitude,
  nistkasten,
  count,
}) {
  return (
    <>
      <StyledArticle>
        <p>Nistkasten Nr. {nistkasten}</p>
        <SecundaryInfo>{date}</SecundaryInfo>

        <p>
          <StyledCount>{count}</StyledCount> Fledermäuse
        </p>
      </StyledArticle>
    </>
  );
}

const StyledArticle = styled.article`
  background-color: var(--primary-white);
  padding: 1rem;
`;

const SecundaryInfo = styled.p`
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
  aspect-ratio: 1;
`;
