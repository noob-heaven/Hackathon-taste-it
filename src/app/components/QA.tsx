'use client';

import { 
  Address, 
  AddressValue, 
  AgreeBox, 
  CheckBox, 
  CheckContent, 
  Mail, 
  PrivacyModal, 
  QABox, 
  QAComent, 
  QAContact, 
  QAContainer, 
  QAContentWrapper, 
  QAForm, 
  QAHeader,
  QAScript, 
  QASortBox, 
  QASortSubject, 
  QASubject, 
  QASubmit, 
  QATextArea, 
  QAWapper, 
  QAbasicAddress, 
  SubjectBox, 
  Tel,
} from '../qa/style';
import { InputValue } from '../user/join/style';

export const QATextAreaValue  = 
`예시 - 카라멜라 웹사이트 리뉴얼
선호하는 레퍼런스: 카라멜라 웹사이트
프로젝트 목적 -기존에 구축된 웹사이트를 트렌디하게 리뉴얼하고 싶습니다.
문의 내용:
`;


export default function QA() {
  // const [formDate, setFormData] = useState();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
  }
  
    
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                예산<InputValue 
                  type="text"
                  id="text"
                  name="예산"
                  onChange={onChange}
                  required
                  placeholder='예산'/>
                기간<InputValue 
                 type="text"
                  id="text"
                  name="period"
                  onChange={onChange}
                  required
                  placeholder='기간'/>
              </SubjectBox>
              <SubjectBox>
                <QASubject>03. 문의할 프로젝트의 선정방식을 선택해 주세요.</QASubject>
              </SubjectBox>
              <SubjectBox>
                <QASubject>
                  <QAScript>04. 문의하고 싶은 내용에 대해 자세히 알려주세요.</QAScript>
                  <QATextArea
                    defaultValue={QATextAreaValue}
                    name="body"
                  />
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