import styled from "styled-components";

const PrimaryInfo = styled.p`
  font-size: 1rem;
  color: var(--primary-black);
  line-height: 0px;
`;

const SecondaryInfo = styled.p`
  font-size: 0.75rem;
  color: var(--primary-gray);
  line-height: 0px;
`;

const Separator1 = styled.hr`
  border-width: 0.125rem;
  border-style: solid;
  border-color: var(--primary-black);
`;

const SecondaryInfoLabel = styled.label`
  font-size: 0.75rem;
  color: var(--primary-gray);
  padding-top: 0.5rem;
`;

const Input = styled.input`
  border: none;
  background: ${({ isPrimary }) =>
    isPrimary ? "var(--primary-white)" : "none"};
  font-family: "Noto Sans", sans-serif;
  font-size: 1rem;
  color: var(--primary-black);
  padding: ${({ isPrimary }) => (isPrimary ? "0.5rem" : "0")};
  margin-top: 0.25rem;
`;

const Legend = styled.legend`
  padding: 1rem 0 0 0;
`;

const Fieldset = styled.fieldset`
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
  border-bottom: ${({ isPrimary }) =>
    isPrimary ? "none" : "1px solid var(--primary-gray)"};
`;

const FormPopup = styled.form`
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
  font-size: 0.75rem;
  color: var(--alert);
  padding: 0.5rem;
  background-color: none;
`;

const Button = styled.button`
  background: ${({ isPrimary }) =>
    isPrimary ? "var(--primary-black)" : "none"};
  color: ${({ isPrimary }) =>
    isPrimary ? "var(--primary-white)" : "var(--primary-black)"};
  display: flex;
  justify-content: center;
  padding: 1rem;
  border: ${({ isPrimary }) =>
    isPrimary ? "none" : "1px solid var(--primary-gray)"};
  margin-top: 1rem;
  height: 3rem;
  :hover {
    color: var(--primary-white);
    background-color: var(--primary-gray);
    cursor: pointer;
  }
`;

export {
  PrimaryInfo,
  SecondaryInfo,
  Separator1,
  SecondaryInfoLabel,
  Input,
  Legend,
  Fieldset,
  Form,
  FormPopup,
  Overlay,
  Alert,
  Button,
};
