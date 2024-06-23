'use client';
import React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import Background from '@components/service/Background';
import Footer from '@components/service/Footer';
import Showcase from '../components/service/Showcase';
import { ShowcaseItemProps } from '../components/service/types/showcase';
import HorizontalDivider from '../components/service/HorizontalDivider';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Nanum Gothic', sans-serif;
  }
`;

const GappedStart = styled.div`
  margin-top: 928px;
  width: 100vw;
  align-items: center;
`

const ServiceWrapper = styled.div`
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
];
const showcaseWebnApp: ShowcaseItemProps[] = [
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
];

const showcaseData: ShowcaseItemProps[] = [
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
];

const showcaseDesign: ShowcaseItemProps[] = [
  {
    img: '/images/service/placeholder.jpg',
    date: 'Data Processing_01 / 2021',
    name: '태양광 발전량 RTU 데이터 가공',
    desc: '태양광 발전소 RTU 실시간 데이터 시계열 가공',
    tag: 'Data Process, Serial Data Processing'
  },
];

  

export default function Service() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <InnerBody>
        <ServiceWrapper>
          <Background></Background>
          <GappedStart>
            <Showcase title="Tech" showcaseItems={showcaseTech} />
            <HorizontalDivider />

            <Showcase title="Web & App" showcaseItems={showcaseWebnApp} />
            <HorizontalDivider />

            <Showcase title="Data" showcaseItems={showcaseData} />
            <HorizontalDivider />

            <Showcase title="Design" showcaseItems={showcaseDesign} />
          </GappedStart>
        </ServiceWrapper>
        <Footer />
      </InnerBody>
    </React.Fragment>
  )
}
