import styled from "styled-components";
import Card from "./Card";
import EditCardForm from "./EditCardForm";

export default function Cards({
  nestingBoxes,
  toEditCardID,
  setToEditCardID,
  appendCard,
  deleteCard,
  toggleMap,
  setCardCoords,
}) {
  return (
    <CardList>
      {nestingBoxes.map((nestingbox) => {
        if (nestingbox.id === toEditCardID) {
          return (
            <EditCardForm
              key={nestingbox.id}
              nestingbox={nestingbox}
              setToEditCardID={setToEditCardID}
              appendCard={appendCard}
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
              toggleMap={toggleMap}
              setCardCoords={setCardCoords}
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
  margin-bottom: 12rem;
`;
