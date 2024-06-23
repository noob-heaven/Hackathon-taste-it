'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  position: absolute;
  height: 928px;
  top: 0;
  left: 0;
`;

const ImageWrapper = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100%;
  position:relative;
`;

const OverlayWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

const OverlayTitle = styled.div`
  font-size: 3.125rem;
  font-weight: 700;
  text-align: center;
  margin: 0 auto;
`;

const OverlaySubTitle = styled.p`
  margin: 1.5rem auto;
  font-size: 1.75rem;
  font-weight: 400;
  text-align: center;
`;

const titleText = 'IT 융합기술로 미래를 향한 도전';
const titleSubText = '끊임없는 IT혁신과 열정으로 새로운 미래를 만듭니다';

export default function Background() {
  return (
    <BackgroundWrapper>
      <ImageWrapper>
        <Image
          src="/common/banner.png"
          alt="Vercel Logo"
          fill={true}
          priority
        />
      </ImageWrapper>
      <OverlayWrapper>
        <OverlayTitle>
          {titleText}
        </OverlayTitle>
        <OverlaySubTitle>
          {titleSubText}
        </OverlaySubTitle>
      </OverlayWrapper>
    </BackgroundWrapper>
  )
}

