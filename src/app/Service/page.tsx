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
    img: '/images/service/new/tech/tech_01.jpg',
    date: 'Tech_01 / 2018',
    name: 'BeBeLiebe',
    desc: '유아용 위험 감지 실시간 스트리밍 카메라',
    tag: 'DeepLearning(딥러닝)',
  },
  {
    img: '/images/service/new/tech/tech_02.jpg',
    date: 'Tech_02 / 2019',
    name: 'Seifietoy',
    desc: '얼굴인식 기반 피규어 제작 서비스',
    tag: 'DeepLearning(딥러닝), Facial Element Detection',
  },
  {
    img: '/images/service/new/tech/tech_03.jpg',
    date: 'Tech_03 / 2020',
    name: 'Molly',
    desc: '쇼핑 데이터 연동 대형 입점형 오픈마켓 쇼핑몰',
    tag: 'DeepLearning(딥러닝)',
  },
  {
    img: '/images/service/new/tech/tech_04.jpg',
    date: 'Tech_04 / 2020',
    name: 'METU',
    desc: 'AI 디지털 성범죄 검출/삭제 지원 서비스',
    tag: 'DL, Retina, ArcFace',
  },
  {
    img: '/images/service/new/tech/tech_05.jpg',
    date: 'Tech_05 / 2021',
    name: 'D-Ocean',
    desc: 'AI 쇼핑몰 연동 및 주문/배송 통합 관리 시스템',
    tag: 'Big-Data Processing, Kafka',
  },
  {
    img: '/images/service/new/tech/tech_06.jpg',
    date: 'Tech_06 / 2022',
    name: 'ID-Masking',
    desc: 'AI 비식별화 신분증 마스킹 서비스',
    tag: 'OCR, Data Crawling',
  },
  {
    img: '/images/service/new/tech/tech_07.jpg',
    date: 'Tech_07 / 2022',
    name: 'AI 학습용 얼굴 인식 데이터 라벨링',
    desc: 'AI 학습을 위한 얼굴 인식 데이터 라벨링 툴',
    tag: 'DL, Facial Element Detect',
  },
  {
    img: '/images/service/new/tech/tech_08.jpg',
    date: 'Tech_08 / 2022',
    name: 'META Research',
    desc: '빅데이터 실시간 여론조사 및 평가 시스템',
    tag: 'Elastic Search, Logstash, Kibana',
  },
  {
    img: '/images/service/new/tech/tech_09.jpg',
    date: 'Tech_09 / 2022',
    name: '철도 안전 AI 시스템',
    desc: '철도 선로 CNN 기반 AI 시스템',
    tag: 'DL, Kafka',
  },
  {
    img: '/images/service/new/tech/tech_10.jpg',
    date: 'Tech_10 / 2022',
    name: 'Metu Admin',
    desc: '디지털 성범죄 검출/삭제 지원 서비스 관리자',
    tag: 'Kafka, Docker Remote Admin',
  },
  {
    img: '/images/service/new/tech/tech_11.jpg',
    date: 'Tech_11 / 2022',
    name: 'METU Crawler Monitor',
    desc: '불법 유해 사이트 크롤러 모니터링 시스템',
    tag: 'Kafka, Docker Remote Admin, Logger',
  },
  {
    img: '/images/service/new/tech/tech_12.jpg',
    date: 'Tech_12 / 2022',
    name: 'Talk 2D',
    desc: 'GPT 기반 실시간 대화 챗봇',
    tag: 'DL, koGPT2, WebGL',
  },
  {
    img: '/images/service/new/tech/tech_13.jpg',
    date: 'Tech_13 / 2022',
    name: 'Quant',
    desc: '퀀트 투자 시스템',
    tag: 'rust, python, typescript, rocksdb, grpc, next.js, nest.js, redis',
  },
  {
    img: '/images/service/new/tech/tech_14.jpg',
    date: 'Tech_14 / 2023',
    name: '소재 추천 시스템',
    desc: '퍼포먼스 광고 소재 추천 시스템',
    tag: 'Python, tensorflow_rank',
  },
  {
    img: '/images/service/new/tech/tech_15.jpg',
    date: 'Tech_15 / 2023',
    name: 'AI 공기질 예측 시스템',
    desc: '거주자 상황인지 AI 공기청정 시스템',
    tag: 'Python, pandas, tensorflow',
  },
  {
    img: '/images/service/new/tech/tech_16.jpg',
    date: 'Tech_16 / 2024',
    name: 'AI 광주버스',
    desc: '높은 정확성을 가진 광주광역시 버스 도착 예측 서비스',
    tag: 'kotlin, swift, rust, python, typescript, c, android, hilt, swiftui, next.js, arduino, fastapi',
  },
  {
    img: '/images/service/new/tech/tech_17.jpg',
    date: 'Tech_17 / 2024',
    name: '공기질 예측 고도화 시스템',
    desc: '다양한 파라미터 대응 ai 모델 업그레이드',
    tag: 'python, tensorflow',
  },
  {
    img: '/images/service/new/tech/tech_18.jpg',
    date: 'Tech_18 / 2024',
    name: '태양광 발전량 예측 시스템',
    desc: '센서 데이터를 활용하여 일사량, 태양광 발전량 예측',
    tag: 'tensorflow',
  },
  {
    img: '/images/service/new/tech/tech_19.jpg',
    date: 'Tech_19 / 2024',
    name: '',
    desc: 'AI를 활용한 학습 예측 성과 시뮬레이션 및 상담도구',
    tag: 'Typescript, Python, Next.js, Nest.js, PyQt',
  },
  {
    img: '/images/service/new/tech/tech_20.jpg',
    date: 'Tech_20 / 2024',
    name: '서비스 자동화',
    desc: '비용절감형 On-premise 환경 최적화',
    tag: 'NGINX, Docker, Kubernetes, Gitlab, Jenkins, Github, RHEL',
  },
];
const showcaseWebnApp: ShowcaseItemProps[] = [
  {
    img: '/images/service/new/webNapp/webNapp_01.jpg',
    date: 'Web & App_01 / 2018',
    name: 'BebeLiebe',
    desc: 'bebeliebe.com',
    tag: 'DL, WebRTC',
  },
  {
    img: '/images/service/new/webNapp/webNapp_02.jpg',
    date: 'Web & App_02 / 2018',
    name: 'BebeLiebe',
    desc: 'bebeliebe.com',
    tag: 'DL, WebRTC',
  },
  {
    img: '/images/service/new/webNapp/webNapp_03.jpg',
    date: 'Web & App_03 / 2029',
    name: 'JOY&CO',
    desc: 'joynco.co',
    tag: 'AR, QR',
  },
  {
    img: '/images/service/new/webNapp/webNapp_04.jpg',
    date: 'Web & App_04 / 2019',
    name: 'Selfietoy',
    desc: 'selfietoy.net',
    tag: 'DL,Facial Network',
  },
  {
    img: '/images/service/new/webNapp/webNapp_05.jpg',
    date: 'Web & App_05 / 2020',
    name: 'Marrybee',
    desc: 'Marrybee.com',
    tag: 'ExpressJs',
  },
  {
    img: '/images/service/new/webNapp/webNapp_06.jpg',
    date: 'Web & App_06 / 2020',
    name: 'metu.ai',
    desc: 'metu.ai',
    tag: 'DL, ArcFace, RetinaFace',
  },
  {
    img: '/images/service/new/webNapp/webNapp_07.jpg',
    date: 'Web & App_07 / 2021',
    name: 'Molly',
    desc: 'molly.kr',
    tag: 'Django, Nuxt.js',
  },
  {
    img: '/images/service/new/webNapp/webNapp_07.jpg',
    date: 'Web & App_07 / 2021',
    name: 'CARAMELLA',
    desc: 'caramella.kr',
    tag: 'React.js, Koa',
  },
  {
    img: '/images/service/new/webNapp/webNapp_08.jpg',
    date: 'Web & App_08 / 2021',
    name: '광주광역시동구체육회',
    desc: 'donggusports.kr',
    tag: 'RoR, React.js',
  },
  {
    img: '/images/service/new/webNapp/webNapp_09.jpg',
    date: 'Web & App_09 / 2021',
    name: 'D-Ocean',
    desc: 'www.d-ocean.kr',
    tag: 'Kafka, Koa, React.js, Rust',
  },
  {
    img: '/images/service/new/webNapp/webNapp_10.jpg',
    date: 'Web & App_10 / 2022',
    name: 'ID-Masking',
    desc: 'www.idmasking.com',
    tag: 'OCR, NEXTJS',
  },
  {
    img: '/images/service/new/webNapp/webNapp_11.jpg',
    date: 'Web & App_11 / 2022',
    name: 'META Research',
    desc: 'research.caramella.kr',
    tag: 'Elastic Search, Logstash, Kibana',
  },
  {
    img: '/images/service/new/webNapp/webNapp_12.jpg',
    date: 'Web & App_12 / 2022',
    name: 'METU Admin',
    desc: 'https://admin.metu.ai',
    tag: 'Koa, React.js',
  },
  {
    img: '/images/service/new/webNapp/webNapp_13.jpg',
    date: 'Web & App_13 / 2022',
    name: 'METU Crawler Monitor',
    desc: 'https://monit.metu.ai',
    tag: 'ReactJS,NestJS',
  },
  {
    img: '/images/service/new/webNapp/webNapp_14.jpg',
    date: 'Web & App_14 / 2022',
    name: 'Talk 2D',
    desc: 'https://talk2d.com',
    tag: 'FastAPI, NextJs, WebGL, Live2D',
  },
  {
    img: '/images/service/new/webNapp/webNapp_15.jpg',
    date: 'Web & App_15 / 2022',
    name: 'Quant',
    desc: '',
    tag: 'Rust,Python, Typescript, RocksDB, gRPC, Next.js, Nest.js, Redis',
  },
  {
    img: '/images/service/new/webNapp/webNapp_16.jpg',
    date: 'Web & App_16 / 2022',
    name: '영일정씨 김제공파 종중 홈페이지',
    desc: '',
    tag: 'Typescript, Next.js, Nest.js',
  },
  {
    img: '/images/service/new/webNapp/webNapp_17.jpg',
    date: 'Web & App_17 / 2022',
    name: '디벨롭스토리즈 홈페이지',
    desc: 'https://develop-stories.com/',
    tag: 'Javascript Python Next.js Tensorflow',
  },
  {
    img: '/images/service/new/webNapp/webNapp_18.jpg',
    date: 'Web & App_18 / 2022',
    name: '생성형 AI 영상 제작 플랫폼',
    desc: 'Stable-Diffusion Image Gen',
    tag: 'Python, Stable Diffusion',
  },
  {
    img: '/images/service/new/webNapp/webNapp_19.jpg',
    date: 'Web & App_19 / 2023',
    name: 'AICON 광주 2023',
    desc: 'https://aicon2023.com',
    tag: 'Javascript, Typescript, Next.js, Nest.js',
  },
  {
    img: '/images/service/new/webNapp/webNapp_20.jpg',
    date: 'Web & App_20 / 2023',
    name: 'PM 관제시스템',
    desc: 'https://eunboard.cc',
    tag: 'JavaScript, Next.js',
  },
  {
    img: '/images/service/new/webNapp/webNapp_21.jpg',
    date: 'Web & App_20 / 2024',
    name: 'AI 광주버스',
    desc: 'JPLAY/APP 스토어에 \'AI광주버스\' 검색',
    tag: 'Kotlin, Swift, Rust, Python, TypeScript, C,Android, Hilt, SwiftUI, Next.js, Arduino, FastApI',
  },
  {
    img: '/images/service/new/webNapp/webNapp_22.jpg',
    date: 'Web & App_22 / 2024',
    name: '광주대성학원 성적 분석 시스템',
    desc: 'https://dslearn.net',
    tag: 'TypeScript, Python, Next.js, Nest.js, PyQt',
  },


];

const showcaseData: ShowcaseItemProps[] = [
  {
    img: '/images/service/new/data/data_01.jpg',
    date: 'DataProcessing_01 / 2021',
    name: '태양광 발전량 RTU 데이터 가공',
    desc: '태양광 발전소 RTU 실시간 데이터 시계열 가공',
    tag: 'Data Process / Serial Data Processing',
  },
  {
    img: '/images/service/new/data/data_02.jpg',
    date: 'DataProcessing_02 / 2021',
    name: '얼굴 이미지 데이터 가공',
    desc: 'AI 학습용 얼굴 인식 데이터 가공',
    tag: 'Image Processing / Facial Landmark Detection',
  },
  {
    img: '/images/service/new/data/data_03.jpg',
    date: 'DataProcessing_03 / 2021',
    name: '정책지표 / 경제지표 데이터 가공',
    desc: '정책지표 및 경제지표 데이터 수치화 가공',
    tag: 'Elastic Search',
  },
  {
    img: '/images/service/new/data/data_04.jpg',
    date: 'DataProcessing_04 / 2022',
    name: '상품 이미지 데이터 가공',
    desc: '상품 상세이미지 데이터 OCR 가공',
    tag: 'Curation System',
  },
  {
    img: '/images/service/new/data/data_05.jpg',
    date: 'DataProcessing_05 / 2022',
    name: '인플루언서 데이터 가공',
    desc: '인플루언서 영향력 수치화 가공',
    tag: 'Data Crawling / ElasticSearch',
  },
  {
    img: '/images/service/new/data/data_06.jpg',
    date: 'DataProcessing_06 / 2023',
    name: '학습 데이터 가공',
    desc: '코딩 문제 풀이 데이터 분석 및 가공',
    tag: 'Data Crawling',
  },
  {
    img: '/images/service/new/data/data_07.jpg',
    date: 'DataProcessing_07 / 2023',
    name: '사회지표 / 경제지표 데이터 수치화 가공',
    desc: 'FONTPOLIO AI 폰트 생성 서비스 데이터 가공',
    tag: 'Python, C#, ElasticSearch, WInUI3, TTs, Yolo',
  },
  {
    img: '/images/service/new/data/data_08.jpg',
    date: 'DataProcessing_08 / 2023',
    name: '광고 관리 자동화 데이터 AI 가공',
    desc: '퍼포먼스 광고 소재 추천 시스템 AI 데이터 가ㅇ공',
    tag: 'Python, C#, ElasticSearch, WInUI3, TTs, Yolo',
  },
  {
    img: '/images/service/new/data/data_09.jpg',
    date: 'DataProcessing_09 / 2023',
    name: '광고 관리 자동화 데이터 AI 가공',
    desc: '퍼포먼스 광고 소재 추천 시스템 AI 데이터 가ㅇ공',
    tag: 'Python, C#, ElasticSearch, WInUI3, TTs, Yolo',
  },
  {
    img: '/images/service/new/data/data_10.jpg',
    date: 'DataProcessing_10 / 2023',
    name: '코딩 문제 음성 데이터 AI 가공',
    desc: 'STT / TTS 데이터 AI 가공',
    tag: 'Python, C#, ElasticSearch, WInUI3, TTs, Yolo',
  },
  {
    img: '/images/service/new/data/data_11.jpg',
    date: 'DataProcessing_11 / 2023',
    name: '유기농 콩, 해외 현지 날씨 데이터 가공',
    desc: '식물 생장AI 모델 데이터 가공',
    tag: 'Python, C#, ElasticSearch, WInUI3, TTs, Yolo',
  },
  {
    img: '/images/service/new/data/data_12.jpg',
    date: 'DataProcessing_12 / 2023',
    name: '얼굴 이미지 랜드마크 AI 가공',
    desc: '얼굴 이미지 랜드마크 데이터 AI가공',
    tag: 'Python, C#, ElasticSearch, WInUI3, TTS, Yolo',
  },
  {
    img: '/images/service/new/data/data_13.jpg',
    name: '공기질 예측 시스템 AI 데이터 가공',
    date: 'DataProcessing_13 / 2023',
    desc: 'UWB센서 데이터 AI 모델 데이터 가공',
    tag: 'Python,panads,Tensorflow',
  },
  {
    img: '/images/service/new/data/data_14.jpg',
    date: 'DataProcessing_14 / 2024',
    name: 'GPS데이터 가공',
    desc: 'GPS데이터 보정 및 매핑',
    tag: 'Rust',
  },
];

const showcaseDesign: ShowcaseItemProps[] = [
  {
    img: '/images/service/new/design/design_01.jpg',
    date: 'Design Branding_01 / 2022',
    name: 'INNOFOOD soyful organic',
    desc: '이노푸드 리브랜딩, 브랜드 아이덴티티 확립',
    tag: 'Ai, Ps, XD',
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
