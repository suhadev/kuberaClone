import React from "react";
import styled from "styled-components";
import Sheets from "../components/assets/Sheets";
import Table from "../components/assets/Table";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-left: 100px;
  padding-right: 35px;
  width: 100%;
`;
const Title = styled.h1`
font-weight : bold;
`;

export default function Assets() {
  return (
    <Container>
      <Title>Assets</Title>
      <Sheets />
      <Table />
    </Container>
  );
}
