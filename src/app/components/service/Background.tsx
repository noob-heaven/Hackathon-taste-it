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
    </BackgroundWrapper>
  )
}

