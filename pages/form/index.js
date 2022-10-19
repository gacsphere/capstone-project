import { StyledAnchor } from "../../components/Button/button";
import styled from "styled-components";
import Link from "next/link";
import React from "react";

export default function index() {
  return (
    <>
      <div>test</div>
      <Link href="/">
        <StyledAnchor>Abbrechen</StyledAnchor>
      </Link>
    </>
  );
}
