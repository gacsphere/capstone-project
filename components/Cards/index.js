import React from "react";
import styled from "styled-components";
import Card from "../Card";

export default function Cards({ nestingBoxes }) {
  return (
    <CardList>
      {nestingBoxes.map((nestingbox) => (
        <Card
          key={nestingbox.id}
          date={nestingbox.date}
          time={nestingbox.time}
          latitude={nestingbox.latitude}
          longitude={nestingbox.longitude}
          boxnumber={nestingbox.boxnumber}
          count={nestingbox.count}
          onUpdate={onUpdate}
        />
      ))}
    </CardList>
  );
}

const CardList = styled.ul`
  list-style: none;
  padding: 0;
`;
