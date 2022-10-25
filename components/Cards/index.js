import styled from "styled-components";
import Card from "../Card";
import EditCardForm from "../EditCardForm";

export default function Cards({
  nestingBoxes,
  showEditCard,
  setShowEditCard,
  onCreate,
  deleteCard,
}) {
  return (
    <CardList>
      {nestingBoxes.map((nestingbox) => {
        if (nestingbox.id === showEditCard) {
          return (
            <EditCardForm
              key={nestingbox.id}
              id={nestingbox.id}
              date={nestingbox.date}
              time={nestingbox.time}
              latitude={nestingbox.latitude}
              longitude={nestingbox.longitude}
              boxnumber={nestingbox.boxnumber}
              count={nestingbox.count}
              setShowEditCard={setShowEditCard}
              onCreate={onCreate}
              deleteCard={deleteCard}
            />
          );
        } else {
          return (
            <Card
              key={nestingbox.id}
              id={nestingbox.id}
              date={nestingbox.date}
              time={nestingbox.time}
              latitude={nestingbox.latitude}
              longitude={nestingbox.longitude}
              boxnumber={nestingbox.boxnumber}
              count={nestingbox.count}
              setShowEditCard={setShowEditCard}
            />
          );
        }
      })}
    </CardList>
  );
}

const CardList = styled.ul`
  list-style: none;
  padding: 0;
`;
