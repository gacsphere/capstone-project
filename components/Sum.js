import React from "react";
import styled from "styled-components";
import { SecondaryInfoLabel, SeparatorMap } from "./ReusedStyles";
import { GiSwampBat, GiMoonBats } from "react-icons/gi";

export default function Sum({ sumOfCounts }) {
  return (
    <Div>
      {/* <GiMoonBats
          size="3rem"
          color="var(--primary-black)"
          position="absolute"
          top="0"
          left="3"
        /> */}
      <StyledH1>{sumOfCounts} </StyledH1>
      <Separator isPrimary />
      <P>bats in total</P>
      {/* <P>
          <GiMoonBats size="3rem" color="var(--primary-black)" />
        </P> */}
    </Div>
  );
}

const Div = styled.div`
  /* transform: rotate(-15deg);
  transform-origin: 50% 50%; */
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
`;

const Separator = styled.hr`
  border-width: 0.125rem;
  border-style: solid;
  border-color: var(--primary-black);
  background-color: var(--primary-black);
  margin: 0 5rem 1rem;
`;
