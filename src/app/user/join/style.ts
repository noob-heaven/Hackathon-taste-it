import Link from 'next/link';
import styled from 'styled-components';

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
`;

export const JoinForm = styled.form`
    margin : 20px 0 10px 0;
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

export const InputIdBox = styled.div`
    display: flex;
`;

export const InputValueId = styled.input` 
    flex: 3;
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

export const CheckId = styled.button`
    flex: 1;
    background-color:  #3288FF;
    padding : 10px 20px;
    border-radius: 5px;
    color: rgba(255,255,255,1);
    border: none;
    font-size: 16px;
    cursor: pointer;
    &:hover,
    &:active {
        opacity: 0.9;
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
    width:420px;
    display: flex;
    justify-content: flex-end;
    gap: 20px;
`;

export const LoginFollow = styled.div`
    color: #868E98;
`;
export const LoginLink = styled(Link)`
    text-decoration: none;
    color: #3288FF;
    &:hover,
    &:active {
      color:  #868E98;
    }
`;