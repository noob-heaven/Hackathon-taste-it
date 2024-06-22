import React from 'react'
import Link from 'next/link'

export default function header() {
  return (
    <div>
      <div>
        <Link href={'/user/login'}>로그인</Link>
      </div>
      <Link href={'/user/join'}>회원가입</Link>
    </div>
  )
}
