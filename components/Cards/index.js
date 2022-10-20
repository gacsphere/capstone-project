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
          boxnumber={nestingbox.boxnumber}
          count={nestingbox.count}
        />
      ))}
    </CardList>
  );
}

const CardList = styled.ul`
  list-style: none;
  padding: 0;
`;
