import styled from "styled-components";
import Card from "./Card";
import EditCardForm from "./EditCardForm";

export default function Cards({
  nestingBoxes,
  toEditCardID,
  setToEditCardID,
  onCreate,
  deleteCard,
}) {
  return (
    <CardList>
      {nestingBoxes.map((nestingbox) => {
        if (nestingbox.id === toEditCardID) {
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
              setToEditCardID={setToEditCardID}
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
              setToEditCardID={setToEditCardID}
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
