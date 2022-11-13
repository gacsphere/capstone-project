import styled from "styled-components";

export default function Title() {
  return (
    <>
      <BatScan>
        <H1>bat</H1>
      </BatScan>
    </>
  );
}

const H1 = styled.h1`
  display: inline;
  font-size: inherit;
  font-weight: inherit;
`;

const BatScan = styled.p`
  color: var(--primary-white);
  background: var(--primary-black);
  padding: 0.25rem;
  margin: 1rem;
  font-family: "Inconsolata", sans-serif;
  font-weight: 300;
  font-size: 1.125rem;
  text-align: center;
  ::after {
    content: "scan";
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.09375rem;
  }
`;
