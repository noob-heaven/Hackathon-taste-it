'use client';
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Background from '@components/service/Background';
import Footer from '@components/service/Footer';
import Showcase from '../components/service/Showcase';
import { ShowcaseItemProps } from '../components/service/types/showcase';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nanum Gothic', sans-serif;
  }
`;

const GappedStart = styled.div`
  margin-top: 928px;
  height: 100vh;
  width: 100vw;
  align-items: center;
`

const ServiceWrapper = styled.div`
  height: 100%;
`;

const InnerBody = styled.div`
  min-height: 100vh;
  height: auto;
`

const showcaseTech: ShowcaseItemProps[] = [
  {
    img: '/images/service/placeholder.jpg',
    date: 'Data Processing_01 / 2021',
    name: '태양광 발전량 RTU 데이터 가공',
    desc: '태양광 발전소 RTU 실시간 데이터 시계열 가공',
    tag: 'Data Process, Serial Data Processing'
  },
  {
    img: '/images/service/placeholder.jpg',
    date: 'Date Processing_02 / 2021',
    name: '얼굴 이미지 데이터 가공',
    desc: 'AI 학습용 얼굴 인식 데이터 가공',
    tag: 'Image Process, Facial Landmark Detection',
  },
  {
    img: '/images/service/placeholder.jpg',
    date: 'Data Processing_01 / 2021',
    name: '태양광 발전량 RTU 데이터 가공',
    desc: '태양광 발전소 RTU 실시간 데이터 시계열 가공',
    tag: 'Data Process, Serial Data Processing'
  },
  {
    img: '/images/service/placeholder.jpg',
    date: 'Date Processing_02 / 2021',
    name: '얼굴 이미지 데이터 가공',
    desc: 'AI 학습용 얼굴 인식 데이터 가공',
    tag: 'Image Process, Facial Landmark Detection',
  },
  {
    img: '/images/service/placeholder.jpg',
    date: 'Data Processing_01 / 2021',
    name: '태양광 발전량 RTU 데이터 가공',
    desc: '태양광 발전소 RTU 실시간 데이터 시계열 가공',
    tag: 'Data Process, Serial Data Processing'
  },
  {
    img: '/images/service/placeholder.jpg',
    date: 'Date Processing_02 / 2021',
    name: '얼굴 이미지 데이터 가공',
    desc: 'AI 학습용 얼굴 인식 데이터 가공',
    tag: 'Image Process, Facial Landmark Detection',
  },
]

export default function Service() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <InnerBody>
        <ServiceWrapper>
          <Background></Background>
          <GappedStart>
            <Showcase title="Showcase" showcaseItems={showcaseTech} />
          </GappedStart>
        </ServiceWrapper>
        <Footer />
      </InnerBody>
    </React.Fragment>
  )
}
