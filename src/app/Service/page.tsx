'use client';
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Background from '@components/service/Background';
import Footer from '@components/service/Footer';
import Showcase from '../components/service/Showcase';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const GappedStart = styled.div`
  margin-top: 928px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ServiceWrapper = styled.div`
  height: 100%;
`;

const InnerBody = styled.div`
  min-height: 100vh;
  height: auto;
`

export default function Service() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <InnerBody>
        <ServiceWrapper>
          <Background></Background>
          <GappedStart>
            <Showcase>
            </Showcase>
          </GappedStart>
        </ServiceWrapper>
        <Footer />
      </InnerBody>
    </React.Fragment>
  )
}
