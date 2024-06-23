'use client';

import Link from 'next/link';
import { useState } from 'react';
import * as CONSTANT from '@lib/constant';
import {
  Wrapper,
  Title,
  SubTitle,
  JoinForm, 
  Subject,
  InputIdBox,
  InputValue,
  CheckId,
  SubmitBox,
  CancelSubmit,
  Submit,
  LoginLinkBox,
  LoginFollow,
  LoginLink,
  InputValueId
} from '../user/join/style';

type OnChangeValueType = React.ChangeEvent<HTMLInputElement>;
// NOTE: 여긴 유틸성 함수로 모아두면 좋을것 같은 부분이에요

function checkEmail(value: string | null): boolean {
  const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    // 정규표현식 매치 결과 확인
    return ((value?.match(validRegex) || []).length > 0);
}
function checkPassword(value:string): boolean {
  const validRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;
  // 정규표현식 매치 결과 확인
  return ((value?.match(validRegex) || []).length > 0);
}

// NOTE: 여기까지

export default function Join() {
  const [id, setId] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirm, setPasswordConfirm] = useState<string>("");
  const [error, setError] = useState<string>("");

    
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(id, email, username, password, passwordConfirm);
    
    const response = await fetch(CONSTANT.FetchAddress, {
      method: 'POST',
      headers: {
        ...CONSTANT.FetchHeaders,
      },
    })
    .then((x) => x.json());
    
    console.log(response);
  }
//  const checkId
// TODO : 아이디 중복 체크 버튼 / Action

  const onChange = (e: OnChangeValueType) => {
    const { name, value } = e.target;
    switch(name) {
      case('id'):
        setId(value);
        break;
      case('username'):
        setUsername(value);
        break;
      case('password'):
        setPassword(value);
        if (!checkPassword(value)) {
          setError(
            "비밀번호는 8자리 이상 영문,숫자,특수문자 조합으로 입력해주세요"
          );
        } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
          setError("비밀번호와 비밀번호 확인 값이 다릅니다.");
        }
        break;
      case('passwordConfirm'):
        setPasswordConfirm(value);
        if (checkPassword(value)) {
          setError(
            "비밀번호는 8자리 이상 영문,숫자,특수문자 조합으로 입력해주세요"
          );
        } else if (value !== password) {
          setError("비밀번호와 값이 다릅니다.");
        }
        break;
      case('email'):
        setEmail(value);
        if (!checkEmail(value)) {
          setError("이메일 형식이 올바르지 않습니다.");
        }
        break;
      }
      setId(value);
    }
  return (
    <Wrapper>
        <Title>회원가입</Title>
        <SubTitle>회원이 되어 다양한 혜택을 경험해보세요!</SubTitle>
        <JoinForm onSubmit={onSubmit} >
            <Subject>아이디</Subject>
            <InputIdBox>
              <InputValueId 
                type="text"
                id="id"
                name="id"
                onChange={onChange}
                required
                placeholder="아이디 입력" >
              </InputValueId>
               <CheckId type="button">중복체크</CheckId>
            </InputIdBox>
            <Subject>비밀번호</Subject>
            <InputValue 
              type="password"
              id="password"
              name="password"
              onChange={onChange}
              required
              placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"/>
            <Subject>비밀번호확인</Subject>
            <InputValue
              type="password"
              id="passwordConfirm"
              name="passwordConfirm"
              onChange={onChange}
              required
              placeholder="비밀번호 확인 (영문, 숫자, 특수문자 조합)"/>
            <Subject>이름</Subject>
            <InputValue 
              type="text"
              id="username"
              name="username"
              onChange={onChange}
              required
              placeholder="이름" />
            <Subject>이메일</Subject>
            <InputValue 
              type="email"
              id="email"
              name="email"
              onChange={onChange}
              required
              placeholder="이메일 입력" />    
            <SubmitBox>
            <CancelSubmit href="user/login" >취소하기</CancelSubmit>
            <Submit type="submit" value="회원가입" />
            </SubmitBox>
        </JoinForm>

        <LoginLinkBox>
          <LoginFollow>계정이 이미 있으신가요?</LoginFollow>
          <LoginLink href="/user/login"> 로그인하기 &gt;</LoginLink>
        </LoginLinkBox>
    </Wrapper>
  );
}