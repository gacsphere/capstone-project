import styled from "styled-components";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <div>test</div>
      <Link href="/">
        <AddBoxAnchor>Abbrechen</AddBoxAnchor>
      </Link>
    </>
  );
}

const AddBoxAnchor = styled.a`
  background-color: var(--primary-black);
  color: var(--primary-white);
  display: flex;
  justify-content: center;
  padding: 1rem;
  :hover {
    background-color: var(--primary-gray);
    cursor: pointer;
  }
`;
