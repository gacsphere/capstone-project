import { Button, Overlay } from "./ReusedStyles";
import styled from "styled-components";

export default function DeleteModal({
  nestingbox,
  deleteCard,
  setShowDeletePopup,
  setToEditCardID,
}) {
  return (
    <Overlay
      onClick={(event) => {
        event.stopPropagation();
        setShowDeletePopup(null);
      }}
    >
      <Modal onClick={(event) => event.stopPropagation()}>
        <ModalP isPrimary>Are you sure you want to delete the data?</ModalP>
        <Button
          isAlert
          onClick={() => {
            deleteCard(nestingbox.id);
            setToEditCardID(null);
            setShowDeletePopup(null);
          }}
          type="button"
          aria-label="delete"
        >
          delete
        </Button>
        <Button
          onClick={() => {
            setShowDeletePopup(null);
          }}
          type="button"
          aria-label="cancel"
        >
          cancel
        </Button>
      </Modal>
    </Overlay>
  );
}

const ModalP = styled.p`
  font-family: "Inconsolata", sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  color: var(--primary-black);
  margin: 2rem 1rem 3rem;
`;

const Modal = styled.div`
  margin: 10rem 2rem;
  padding: 1rem;
  background-color: var(--primary-white);
  z-index: 1000;
`;
