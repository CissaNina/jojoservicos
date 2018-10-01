import React, { Component } from 'react';

import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  width: 200px;
  color: #000;
  font-family: Helvetica;
`;

// const ContainerItems = styled.div`
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-evenly;
//   align-items: center;
//   flex-direction: column;
// `;


const Items = styled.p`
  width: 100%;
  height: 7.7%;
  padding-left: 13.5px;
  display: flex;
  text-align: right;
  align-items:center;
  font-size: 15px;
  border-bottom: 0.5px solid #707070;
`;

const Categoria = () =>
  <Container>
    {/* <ContainerItems> */}
      <Items>2ª via</Items>
      <Items>Curriculo</Items>
      <Items>Abertura MEI</Items>
      <Items>1ª via</Items>
      <Items>Perda</Items>
      <Items>2ª via</Items>
      <Items>Curriculo</Items>
      <Items>Abertura MEI</Items>
      <Items>1ª via</Items>
      <Items>Perda</Items>
      <Items>2ª via</Items>
      <Items>Curriculo</Items>
      <Items>Abertura MEI</Items>
    {/* </ContainerItems> */}
  </Container>

export default Categoria;