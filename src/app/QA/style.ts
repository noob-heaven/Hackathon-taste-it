import styled from "styled-components";

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

