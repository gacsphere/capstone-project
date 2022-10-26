import React from "react";
import styled from "styled-components";

export default function Sum({ sumOfCounts }) {
  return <StyledH1>{sumOfCounts} Fledermäuse insgesamt</StyledH1>;
}

const StyledH1 = styled.h1`
  margin: 1rem;
`;
