import Head from "next/head";
import styled from "styled-components";
import { nanoid } from "nanoid";

const nestingBoxes = [
  {
    id: nanoid(),
    date: "31.08.2021",
    time: "15:56 Uhr",
    latitude: 49.138844,
    longitude: 8.278068,
    nistkasten: 246,
    count: 4,
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>batSCAN</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>My App</h1>
        <P>Hello, m a styled paragraph :</P>
      </main>
    </div>
  );
}

const P = styled.p`
  text-align: center;
  background-color: turquoise;
  padding: 16px;
`;
