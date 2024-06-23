'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import type { ShowcaseItemProps } from './types/showcase';

const ShowcaseItemBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FFFFFF;
`;

const ItemImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 60%;
  margin: 0.3125rem;
  border-radius: 1.25rem;
  overflow: hidden;
`;

const ItemDateWrapper = styled.div`
  font-size: 0.875rem;
`;
const ItemNameWrapper = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  margin-top: 0.325rem;
`;

const ItemDescriptionWrapper = styled.div`
  font-size: 0.875rem;
  margin-top: 0.425rem;
`;

const ItemTagWrapper = styled.div`
  font-size: 0.875rem;
  color: rgba(49, 117, 255, 1);
  margin-top: 0.425rem;
`;


export default function ShowcaseItem({ img, date, name, desc, tag }: ShowcaseItemProps) {
  console.log(img, date, name, desc, tag);
  return (
    <ShowcaseItemBox>
      <ItemImageWrapper>
        <Image src={img} alt="data1" fill={true} />
      </ItemImageWrapper>

      <ItemDateWrapper>{date}</ItemDateWrapper>
      <ItemNameWrapper>{name}</ItemNameWrapper>
      <ItemDescriptionWrapper>{desc}</ItemDescriptionWrapper>
      <ItemTagWrapper>{tag}</ItemTagWrapper>
    </ShowcaseItemBox>
  )

}

