// 'use client'

// import React, { useState, useRef, useEffect } from 'react'
// import Link from 'next/link';
// import styled from 'styled-components'
// import type { Login } from '../@types/login';
// import '@fortawesome/fontawesome-free'
// import getUser from '../hooks/getUser';

// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   background-color: black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;

// const Wrapper = styled.div`
//   background-color: white;
//   display: flex;
//   flex-direction: column;
//   height: auto;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   width: 400px;
// `;

// const From = styled.form`
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
// `;

// const InputGroup = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 5px;
// `;

// const Label = styled.label`
//   color: grey;
//   width: 200px;
// `;

// const Input = styled.input`
//   padding: 10px;
//   margin-top: 10px;
//   border: 1px solid #ccc;
//   border-radius: 5px;
//   font-size: 16px;
//   width: 380px;
// `;

// const Button = styled.button`
//   padding: 10px;
//   background-color: #007bff;
//   color: white;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   cursor: pointer;

//   &:hover {
//     background-color: #0056b3;
//   }
// `;

// const LinkContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-evenly;
//   gap: 10px;
//   margin-top: 20px;
// `;

// const LinkTag = styled(Link)`
//   text-decoration: none;
//   color: #007bff;

//   &:hover {
//     text-decoration: underline;
//   }
// `;

// export default function Login() {
//   const [user, setUser] = useState<Login>({
//     userId: '',
//     userPassword: '',
//   });

//   const userInput = useRef<HTMLInputElement>(null);

//   useEffect(() => {
//     if (userInput.current) {
//       userInput.current.focus();
//     }
//   }, []);



//   const checkUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     const isValidUserId = /^[a-zA-Z0-9]{5,12}$/.test(value);

//     if (isValidUserId) {
//       setUser((prevUser) => ({
//         ...prevUser,
//         [name]: value,
//       }));
//       console.log('아이디', user.userId)
//     } else {
//       alert('아이디는 5글자 이상 12글자 이하여야합니다.')
//     }
//   };

//   const checkUserPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     // const isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);

//     if (isValidPassword) {
//       setUser((prevUser) => ({
//         ...prevUser,
//         [name]: value,
//       }))
//       console.log('비밀번호:', user.userPassword)
//     } else {
//       alert('특수문자가 있어야 합니다.')
//     }
//   };

//   const goGetUserInfo = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     await getUser(user);
//   }

//   return (
//     <Container>
//       <Wrapper>
//         <From onSubmit={goGetUserInfo}>
//           <InputGroup>
//             <Label htmlFor='userId'>
//               아이디
//               <Input
//                 type='text'
//                 required id='userId'
//                 name='userId'
//                 value={user.userId}
//                 ref={userInput}
//                 onChange={checkUserId}
//                 placeholder='아이디를 입력해주세요' />
//             </Label>
//           </InputGroup>
//           <InputGroup>
//             <Label htmlFor='userPassword'>
//               비밀번호
//               <Input
//                 type='password'
//                 required id='userPassword'
//                 name='userPassword'
//                 value={user.userPassword}
//                 onChange={checkUserPassword}
//                 placeholder='비밀번호를 입력해주세요' />
//             </Label>
//           </InputGroup>
//           <Button type='submit'>로그인</Button>
//         </From>
//         <LinkContainer>
//           <LinkTag href={'/user/join'}>회원가입</LinkTag>
//           <LinkTag href={'/user/helpID'}>아이디찾기</LinkTag>
//           <LinkTag href={'/user/helpPassword'}>비밀번호찾기</LinkTag>
//         </LinkContainer>
//       </Wrapper>
//     </Container>
//   )
// }
