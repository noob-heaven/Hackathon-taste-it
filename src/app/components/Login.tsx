'use client'

import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link';
import styled from 'styled-components'
import type { Login } from '../@types/login';
import '@fortawesome/fontawesome-free'
import Image from 'next/image';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
`;

const From = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Label = styled.label`
  color: grey;
  width: 200px;
`;

const Input = styled.input`
  padding: 10px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  width: 380px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  gap: 10px;
  margin-top: 20px;
`;

const LinkTag = styled(Link)`
  text-decoration: none;
  color: #007bff;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Login() {
  const [user, setUser] = useState<Login>({
    userId: "",
    userPassword: "",
  });

  const userInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (userInput.current) {
      userInput.current.focus();
    }
  }, [])

  const handleChage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    console.log('아이디', user.userId)
    console.log('비밀번호', user.userPassword)
  }

  return (
    <Container>
      <Wrapper>
        <From action="/">
          <InputGroup>
            <Label htmlFor="userId">
              아이디
              <Input type="text" required id='userId' name='userId' value={user.userId} ref={userInput} onChange={handleChage} placeholder='아이디를 입력해주세요' />
            </Label>
          </InputGroup>
          <InputGroup>
            <Label htmlFor="userPassword">
              비밀번호
              <Input type="password" required id='userPassword' name='userPassword' value={user.userPassword} onChange={handleChage} placeholder='비밀번호를 입력해주세요' />
            </Label>
          </InputGroup>
          <Button type='button'>로그인</Button>
        </From>
        <LinkContainer>
          <LinkTag href={'/user/join'}>회원가입</LinkTag>
          <LinkTag href={'/user/helpID'}>아이디찾기</LinkTag>
          <LinkTag href={'/user/helpPassword'}>비밀번호찾기</LinkTag>
        </LinkContainer>
      </Wrapper>
    </Container >
  )
}
