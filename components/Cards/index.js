import React from "react";
import styled from "styled-components";
import Card from "../Card";
import EditFormCard from "../EditFormCard";

export default function Cards({ nestingBoxes, editEntryId, setEditEntryId }) {
  return (
    // <CardList>
    //   {nestingBoxes.map((nestingbox) => (
    //     <Card
    //       key={nestingbox.id}
    //       id={nestingbox.id}
    //       date={nestingbox.date}
    //       time={nestingbox.time}
    //       latitude={nestingbox.latitude}
    //       longitude={nestingbox.longitude}
    //       boxnumber={nestingbox.boxnumber}
    //       count={nestingbox.count}
    //       editEntryId={editEntryId}
    //       setEditEntryId={setEditEntryId}
    //     />
    //   ))}
    // </CardList>

    <CardList>
      {nestingBoxes.map((nestingbox) => {
        if (nestingbox.id === editEntryId) {
          return (
            <>
              <EditFormCard id={nestingbox.id} />
            </>
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
              setEditEntryId={setEditEntryId}
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
