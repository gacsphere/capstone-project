import React from "react";
import styled from "styled-components";

export default function Sum({ sumOfCounts }) {
  return (
    <Div>
      <BatScan>
        <H1>bat</H1>
      </BatScan>
      <H3>{sumOfCounts} </H3>
      <Separator isPrimary />
      <H2>bats in total</H2>
    </Div>
  );
}

const H1 = styled.h1`
  display: inline;
  font-size: inherit;
  font-weight: inherit;
`;

const H3 = styled.h3`
  color: var(--primary-black);
  font-size: 8rem;
  text-align: center;
  line-height: 6rem;
  margin-top: 2rem;
`;

const H2 = styled.h2`
  color: var(--primary-black);
  font-weight: 500;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.09375rem;
  text-align: center;
`;

const Separator = styled.hr`
  border-width: 0.125rem;
  border-style: solid;
  border-color: var(--primary-black);
  background-color: var(--primary-black);
  margin: 1rem 5rem 1rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const BatScan = styled.span`
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
