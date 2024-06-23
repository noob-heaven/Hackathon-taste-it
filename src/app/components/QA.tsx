'use client';

import styled from 'styled-components';
import { InputValue } from '../user/join/style';


export const QATextAreaValue  = 
`예시 - 카라멜라 웹사이트 리뉴얼
선호하는 레퍼런스: 카라멜라 웹사이트
프로젝트 목적 -기존에 구축된 웹사이트를 트렌디하게 리뉴얼하고 싶습니다.
문의 내용:
`;

export const QAWapper = styled.div`
    display : flex; 
    padding : 100px 0;
`;
export const QAContainer = styled.div`
    width: 1000px;
    margin: 0 auto;
`;

export const QAHeader = styled.div`
    display: flex;
    flex-direction:column;
    padding-bottom: 40px ;
`;

export const QAContact = styled.h1`
`;

export const QAComent = styled.div`
  
`;
export const Address = styled.div`
`;
export const AddressValue = styled.div`

`;

export const Tel = styled.div`
   font-size: 18px;
   padding: 10px 0;
`;
export const Mail = styled.div`
    font-size: 18px;
    padding: 10px 0;
`;

export const QAContentWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap:40px;
`;

export const QABox = styled.div`

`;

export const QAForm = styled.form`
`;

export const SubjectBox = styled.div`
`;

export const QASubject = styled.div`
  font-size: 18px;
  padding: 20px 0;
`;
export const QASortBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const QASortSubject = styled.div`
  
`;

export const QAScript = styled.div`
  
`;
export const QATextArea = styled.textarea`
    height: 200px;
    width: 100%;
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

export const QAContents = styled.div`
  
`;
export const QAbasicAddress = styled.div`
  
`;

export const QASubmit = styled.input`
    width: 200px;
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


export const AgreeBox = styled.div`
  display: flex;
`;

export const CheckBox = styled.input`
  
`;

export const CheckContent = styled.div`
  
`;

export const PrivacyModal = styled.div`
  
`;



export default function QA() {

    
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      console.log(tel, email);
      
      const response = await fetch(CONSTANT.FetchAddress, {
        method: 'POST',
        headers: {
          ...CONSTANT.FetchHeaders,
        },
      })
      .then((x) => x.json());
      
      console.log(response);
  }

  const onChange = (e: OnChangeValueType) => {
      const { name, value } = e.target;

  }

  return (
    <QAWapper>

      <QAContainer>

        <QAHeader>
          <QAContact>CONTACT</QAContact>
          <QAComent>원활한 상담을 위해 아래 양식으로 문의 주시면 0일 이내에 연락 드리겠습니다.</QAComent>
        </QAHeader>

        <QAContentWrapper>

          <QABox>
            <Address>
              <Tel>TEL</Tel>
              <AddressValue>010-1111-1111</AddressValue>
              <Mail>MAIL</Mail>
              <AddressValue>PM@caramella.kr</AddressValue>
            </Address>
          </QABox>

          <QAForm onSubmit={onSubmit}>
              <SubjectBox>
                <QASubject>01. 어떤 서비스에 대해 문의하고 싶으신가요?</QASubject>
                <QASortBox>
                  <QASortSubject>WEB</QASortSubject>
                  <QASortSubject>데이터</QASortSubject>
                  <QASortSubject>관리 SW</QASortSubject>
                  <QASortSubject>AI</QASortSubject>
                  <QASortSubject>기타문의</QASortSubject>
                </QASortBox>
              </SubjectBox>
              <SubjectBox>
                <QASubject>02. 문의할 프로젝트 대략적인 예산과 기간을 알려주세요.</QASubject>
                예산<InputValue />
                기간<InputValue />
              </SubjectBox>
              <SubjectBox>
                <QASubject>03. 문의할 프로젝트의 선정방식을 선택해 주세요.</QASubject>
              </SubjectBox>
              <SubjectBox>
                <QASubject>
                  <QAScript>04. 문의하고 싶은 내용에 대해 자세히 알려주세요.</QAScript>
                  <QATextArea defaultValue={QATextAreaValue} />
                </QASubject>
              </SubjectBox>
              <SubjectBox>
                <QAbasicAddress>05. 문의하신 분의 기본 정보를 알려주세요.</QAbasicAddress>
                <InputValue 
                  type="text"
                  id="text"
                  name="text"
                  onChange={onChange}
                  required
                  placeholder='회사/기업명'/>
                <InputValue 
                  type="text"
                  id="text"
                  name="text"
                  onChange={onChange}
                  required
                  placeholder='직책'/>
                <InputValue 
                  type="tel"
                  id="tel"
                  name="tel"
                  onChange={onChange}
                  required
                  placeholder='연락처'/>
                <InputValue 
                  type="email"
                  id="email"
                  name="email"
                  onChange={onChange}
                  required
                  placeholder='이메일'/>
                <InputValue 
                  type="name"
                  id="name"
                  name="name"
                  onChange={onChange}
                  required
                  placeholder='성함'/>
              </SubjectBox>
              <AgreeBox>
                <CheckBox type='checkbox' />
                <CheckContent>개인정보 수집 및 이용에 동의합니다.</CheckContent>
                <PrivacyModal>약관보기</PrivacyModal>
              </AgreeBox>
              <QASubmit type="submit" value="문의하기"/>
          </QAForm>

        </QAContentWrapper>
      </QAContainer>
    </QAWapper>
  )
}
