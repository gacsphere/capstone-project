import styled from "styled-components";

export default function Title() {
  return (
    <>
      <BatScan>bat</BatScan>
    </>
  );
}

const BatScan = styled.span`
  color: var(--primary-white);
  background: var(--primary-black);
  padding: 0.25rem;
  margin: 1rem;
  font-family: "Inconsolata", sans-serif;
  font-weight: 300;
  font-size: 1.125rem;
  text-align: center;
  transform: rotate(-15deg);
  ::after {
    content: "scan";
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.09375rem;
  }
`;
