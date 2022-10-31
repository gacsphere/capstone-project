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
  background: var(--primary-white);
  padding: 0.5rem;
  margin-top: 0.25rem;
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  color: var(--primary-black);
`;

const StyledInputPreset = styled.input`
  border: none;
  background: none;
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  color: var(--primary-black);
  padding: 0;
`;
export { SecondaryInfo, SecondaryInfoLabel, StyledInput, StyledInputPreset };
