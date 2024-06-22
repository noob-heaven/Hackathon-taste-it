'use client';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import * as CONSTANT from '@lib/constant';

export const Wrapper = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    padding : 100px 0;
`;

export const Title = styled.h1`
    font-size : 42px;
    margin-bottom: 5px;
`;

export const SubTitle = styled.p`
     font-size : 16px;
    margin-bottom: 5px;
`;

export const JoinForm = styled.form`
    margin-top : 50px;
    margin-bottom : 10px;
    display : flex;
    flex-direction : column;
    gap : 10px;
`;

export const Subject = styled.div`

`;

export const InputValue = styled.input`
padding : 10px 20px;
border-radius : 5px;
border : 1px solid #8EBDFF;
font-size : 16px;
  &:focus {
    box-shadow: 0 0 5px 2px #D6E0FF;
  }
&[type="submit"] {
    background-color : #8062D6;
        color : white;
        cursor : pointer;
        &:hover {
            opacity : 0.8;
        }
    }
    `;

export const SubmitBox = styled.div`
    display: flex;
    width: 420px;
    gap:1vw;
`;

export const Submit = styled.input`
    width: 100%;
    background-color:  #3288FF;
    color: white;
    border: none;
    padding: 10px 0px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.9;
    }
`;

export const CancelSubmit = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    width: 100%;
    background-color: rgba(255,255,255,1);
    border : 1px solid  #EAF3FF;
    color: #3288FF;
    padding: 10px 0px;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:active {
    background-color: #EAF3FF;
    opacity: 0.9;
    }
`;

export const LoginLinkBox = styled.div`
    color: #3288FF;
`;


export default function Join() {
    const [id, setId] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirm, setPasswordConfirm] = useState<string>("");
    const [error, setError] = useState<string>("");

//   const router = useRouter();
    
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

   const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    const {
      target: { name, value },
    } = e;

    if (name == "id") {
      setId(value);
    }

    if (name === "username") {
      setUsername(value);
    }

    if (name === "password") {
      setPassword(value);
     // 비밀번호 유효성 정규식
      const validRegex =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

      if (!value?.match(validRegex)) {
        setError(
          "비밀번호는 8자리 이상 영문,숫자,특수문자 조합으로 입력해주세요"
        );
      } else if (passwordConfirm?.length > 0 && value !== passwordConfirm) {
        setError("비밀번호와 비밀번호 확인 값이 다릅니다.");
      } else {
        setError("");
      }
    }

    if (name === "passwordConfirm") {
      setPasswordConfirm(value);

      const validRegex =
        /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{8,}$/;

      if (!value?.match(validRegex)) {
        setError(
          "비밀번호는 8자리 이상 영문,숫자,특수문자 조합으로 입력해주세요"
        );
      } else if (value !== password) {
        setError("비밀번호와 값이 다릅니다.");
      } else {
        setError("");
      }
    }
     if (name === "email") {
      setEmail(value);
      // 이메일 유효성 정규식
      const validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!value?.match(validRegex)) {
        setError("이메일 형식이 올바르지 않습니다.");
      } else {
        setError("");
      }
    }
   }

  return (
    <Wrapper>
        <Title>회원가입</Title>
        <SubTitle>회원이 되어 다양한 혜택을 경험해보세요!</SubTitle>
        <JoinForm onSubmit={onSubmit} >
            <Subject>아이디</Subject>
            <InputValue 
            type="text"
            id="id"
            name="id"
            onChange={onChange}
            required
            placeholder="아이디 입력" />
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
        계정이 이미 있으신가요?
        <Link href="/user/login">로그인하기</Link>
        </LoginLinkBox>
    </Wrapper>
  );
}
