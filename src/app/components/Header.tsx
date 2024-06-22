'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'


const Container = styled.div`
  color: white;
  width: 100%;
`;

export default function header() {
  return (
    <Container>
      {/* <div>
        <Link href={'/user/login'}>로그인</Link>
      </div>
      <Link href={'/user/join'}>회원가입</Link> */}
      안녕하세요
    </Container>
  )
}
