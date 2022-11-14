import styled from "styled-components";

export default function Sum({ sumOfCounts }) {
  return (
    <Div>
      <Count>{sumOfCounts} </Count>
      <Separator isPrimary />
      <H2>bats in total</H2>
    </Div>
  );
}

const Count = styled.p`
  color: var(--primary-black);
  font-size: 8rem;
  font-weight: 800;
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
  margin: 1rem 2rem 1rem;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
