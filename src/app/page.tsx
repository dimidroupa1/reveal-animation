"use client";

import styled from "styled-components";
import Reveal from "@/components/Reveal";
import RevealColor from "@/components/RevealColor";

export default function Home() {
  return (
    <Container>
      
      <Reveal>
        <Title>Hello world</Title>
      </Reveal>
      <RevealColor>
        <Title>Hello world</Title>
      </RevealColor>
      <div style={{ height: "100vh" }}></div>
    </Container>
  );
}

const Container = styled.div`
  padding: 100px;
`

const Title = styled.h1`
  font-size: 50px;
`;
