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
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  color: var(--primary-black);
  padding: ${({ isPrimary }) => (isPrimary ? "0.5rem" : "0")};
  margin-top: 0.25rem;
`;

const StyledLegend = styled.legend`
  padding: 1rem 0 0 0;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: none;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-bottom: ${({ isPrimary }) =>
    isPrimary ? "none" : "1px solid var(--primary-gray)"};
`;

const StyledAlert = styled.p`
  color: var(--primary-black);
  padding: 0.5rem;
  background-color: var(--primary-white);
`;

const StyledButton = styled.button`
  background-color: var(--primary-black);
  color: var(--primary-white);
  display: flex;
  justify-content: center;
  padding: 1rem;
  border: none;
  margin-top: 1rem;
  :hover {
    background-color: var(--primary-gray);
    cursor: pointer;
  }
`;

export {
  SecondaryInfo,
  SecondaryInfoLabel,
  StyledInput,
  StyledLegend,
  StyledFieldset,
  StyledForm,
  StyledAlert,
  StyledButton,
};
