import styled from "styled-components";

const PrimaryInfoMap = styled.p`
  font-family: "Inconsolata", monospace;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary-black);
  line-height: 0px;
`;

const SecondaryInfoMap = styled.p`
  font-family: "Inconsolata", monospace;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--primary-gray);
  line-height: 0px;
`;

const SeparatorMap = styled.hr`
  border-width: 0.125rem;
  border-style: solid;
  border-color: var(--primary-black);
  background-color: var(--primary-black);
  margin: ${({ isPrimary }) => (isPrimary ? "-8px 0 1 0" : "0")};
`;

const SecondaryInfoLabel = styled.label`
  font-size: 1.125rem;
  color: var(--primary-gray);
  padding-top: 0.875rem;
`;

const Input = styled.input`
  border: none;
  background: ${({ isPrimary }) =>
    isPrimary ? "var(--primary-white)" : "none"};
  font-family: "Inconsolata", monospace;
  font-size: 1.25rem;
  color: var(--primary-black);
  padding: ${({ isPrimary }) => (isPrimary ? "0.5rem" : "0")};
  margin-top: 0.375rem;
  min-height: ${({ isPrimary }) => (isPrimary ? "3rem" : "2rem")};
  width: 100%;
  z-index: 1;
  :focus {
    outline: ${({ isPrimary }) =>
      isPrimary ? "1px solid var(--primary-black)" : "none"};
  }
`;

const Legend = styled.legend`
  padding: 1.25rem 0 0 0;
  font-size: 1.5rem;
  font-weight: 700;
`;

const Fieldset = styled.fieldset`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  border: none;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 1rem;
  position: absolute;
  bottom: 0.5rem;
  max-height: calc(100% - 3rem);
  overflow: auto;
  background-color: var(--secondary-gray);
  width: calc(100% - 2rem);
`;

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--primary-black-opac);
  backdrop-filter: blur(0.125rem);
  z-index: 401;
`;

const Alert = styled.p`
  font-size: 1.125rem;
  color: var(--alert-primary);
  padding-top: 0.5rem;
  background-color: none;
`;

const Button = styled.button`
  font-family: "Inconsolata", monospace;
  font-weight: 500;
  font-size: 1.125rem;
  text-transform: uppercase;
  letter-spacing: 0.09375rem;
  background: ${({ isPrimary, isAlert }) =>
    isPrimary
      ? "var(--primary-black)"
      : isAlert
      ? "var(--alert-primary)"
      : "none"};
  color: ${({ isPrimary, isAlert }) =>
    isPrimary
      ? "var(--primary-white)"
      : isAlert
      ? "var(--primary-white)"
      : "var(--primary-black)"};
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ isPrimary, isAlert }) =>
    isPrimary ? "none" : isAlert ? "none" : "1px solid var(--primary-black)"};
  margin-top: 1rem;
  min-height: 3rem;
  width: 100%;
  :hover {
    color: var(--primary-white);
    background-color: ${({ isAlert }) =>
      isAlert ? "var(--alert-secondary)" : "var(--primary-gray)"};
    border: none;
    cursor: pointer;
  }
`;

export {
  PrimaryInfoMap,
  SecondaryInfoMap,
  SeparatorMap,
  SecondaryInfoLabel,
  Input,
  Legend,
  Fieldset,
  Form,
  Overlay,
  Alert,
  Button,
};
