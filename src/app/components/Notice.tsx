'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styled from 'styled-components'

const Banner = styled.div`
  width: 100%;
`;

const NoticeTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const TableWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: 80%;
  max-width: 1000px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  overflow: hidden;
`;

const Thead = styled.thead`
  background-color: #aeadb2;

  th {
    padding: 15px;
    font-size: 18px;
    font-weight: bold;
  }

  th:nth-child(1) {
    width: 200px;
  }

  th:nth-child(2) {
    width: 500px;
  }

  th:nth-child(3) {
    width: 200px;
  }
`;

const Tbody = styled.tbody`
  background-color: white;
  text-align: center;

  tr {
    &:nth-child(even) {
      background-color: #f2f2f2;
    }

    &:hover {
      background-color: #e0e0e0;
    }
  }

  td {
    padding: 15px;
    font-size: 16px;
    border-bottom: 1px solid #ddd;
  }

  td:nth-child(1) {
    width: 200px;
  }

  td:nth-child(2) {
    width: 500px;
  }

  td:nth-child(3) {
    width: 200px;
  }
`;

export default function Notice() {
  return (
    <div>
      <Banner>
        <Image
          priority
          src={'/common/banner.png'}
          alt={'그림을 찾을 수 있습니다.'}
          width={1920}
          height={400}
        />
      </Banner>
      <NoticeTitle>
        <h1>공지사항</h1>
      </NoticeTitle>
      <TableWrapper>
        <Table>
          <Thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성시간</th>
            </tr>
          </Thead>
          <Tbody>
            <tr>
              <td>1</td>
              <td>제목 예시</td>
              <td>2023-01-01 12:00</td>
            </tr>
          </Tbody>
        </Table>
      </TableWrapper>
    </div>
  )
}
