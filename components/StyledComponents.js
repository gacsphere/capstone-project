import styled from "styled-components";

const SecondaryInfo = styled.p`
  font-size: 0.75rem;
  color: var(--primary-gray);
`;

const SecondaryInfoLabel = styled.label`
  font-size: 0.75rem;
  color: var(--primary-gray);
  padding-top: 0.5rem;
`;

const StyledInput = styled.input`
  border: none;
  background: ${({ isPrimary }) =>
    isPrimary ? "var(--primary-white)" : "none"};
  /* background: var(--primary-white); */
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  color: var(--primary-black);
  padding: ${({ isPrimary }) => (isPrimary ? "0.5rem" : "0")};
  margin-top: 0.25rem;
`;

export { SecondaryInfo, SecondaryInfoLabel, StyledInput };
