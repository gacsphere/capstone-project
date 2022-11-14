import styled from "styled-components";

export default function Title() {
  return <BatScan>bat</BatScan>;
}

const BatScan = styled.h1`
  display: block;
  color: var(--primary-white);
  background: var(--primary-black);
  padding: 0.25rem;
  margin: 1rem;
  font-family: "Inconsolata", monospace;
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
