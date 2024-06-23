'use client';

import React from 'react';
import styled from 'styled-components';
import ShowcaseItem from './ShowcaseItem';
import { ShowcaseItemProps } from './types/showcase';

type LocaleType = string;

const locales: Record<string, LocaleType> = {
  title: 'TITLE HERE',
}

// NOTE: 쇼케이스를 감싸는 전체 래퍼
const ShowcaseWrapper = styled.div`
  margin-top: 3.25rem;
`

const ShowcaseHeader = styled.div`
  font-size: 50px;
  font-weight: 700;
`;

const ShowcaseInnerBody = styled.section`
  display: flex;
  width: 100%;
  height: 45.75rem;
  overflow-x: scroll;
  overflow-y: hidden;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1.25rem;
`;

// NOTE: 네모 박스로 아이템을 감싸는 박스임
const ShowcaseItemWrapper = styled.div`
  padding: 1.25rem;
  background-color: #FAFAFA;
  margin: 1.25rem;
  width: 100%;
  max-width: 1020px;
  height: 90%;
  overflow: scroll;
`;

// NOTE: 총 6개의 아이템이 들어가는 그리드
const ShowcaseItemGrid = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
`;


export type ShowcaseProps = {
  // 제목
  title: string,
  // 쇼케이스 아이템
  showcaseItems: ShowcaseItemProps[],
}


export default function Showcase(props: ShowcaseProps) {
  // NOTE: split item into 6 items per each grid;
  const itemGrids: ShowcaseItemProps[][] = [];

  for (let i = 0; i < props.showcaseItems.length; i += 6) {
    itemGrids.push(props.showcaseItems.slice(i, i + 6));
  }

  return (
    <ShowcaseWrapper>
      <ShowcaseHeader>
        {props.title}
      </ShowcaseHeader>
      <ShowcaseInnerBody>
      {
        itemGrids.map((gridList, gridIndex) => (
          <ShowcaseItemWrapper>
            <ShowcaseItemGrid key={gridIndex}>
            {
              gridList.map((item, itemIndex) => (
                <ShowcaseItem
                  key={`${gridIndex}-${itemIndex}`}
                  img={item.img}
                  date={item.date}
                  name={item.name}
                  desc={item.desc}
                  tag={item.tag}
                />
              ))
            }
          </ShowcaseItemGrid>
        </ShowcaseItemWrapper>
        ))
      }
      </ShowcaseInnerBody>
    </ShowcaseWrapper>
  )
}
