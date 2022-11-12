import React from "react";
import styled from "styled-components";
import { SecondaryInfoLabel, SeparatorMap } from "./ReusedStyles";

export default function Sum({ sumOfCounts }) {
  return (
    <>
      <Div>
        <StyledH1>{sumOfCounts} </StyledH1>
        <Separator isPrimary />
        <P>bats in total</P>
      </Div>
    </>
  );
}

const Div = styled.div`
  transform: rotate(-15deg);
`;

const StyledH1 = styled.h1`
  margin-top: 2rem;
  font-size: 8rem;
  text-align: center;
`;

const P = styled.p`
  font-family: "Inconsolata", sans-serif;
  font-weight: 500;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.09375rem;
  text-align: center;
  margin: 0 0 3rem 0;
`;

const Separator = styled.hr`
  border-width: 0.125rem;
  border-style: solid;
  border-color: var(--primary-black);
  background-color: var(--primary-black);
  margin: 0 5rem 1rem;
`;
