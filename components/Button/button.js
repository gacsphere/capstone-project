import styled from "styled-components";

const StyledAnchor = styled.a`
  background-color: var(--primary-black);
  color: var(--primary-white);
  display: flex;
  justify-content: center;
  padding: 1rem;
  :hover {
    background-color: var(--primary-gray);
    cursor: pointer;
  }
`;

export { StyledAnchor };
