import styled from "styled-components";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useState } from "react";
import Link from "next/link";
import Header from "../../Component/layout/header";

export default function LoginPage (){
    const [loginKeep, setLoginKeep] = useState(true)
    const LoginKeeping = () => {
        setLoginKeep(!loginKeep)
    }
return(
    <Container>
        <Header/>
        <Title>로그인</Title>
        <Sns/>
        <Looin>
            <LoginTitle>이메일로 로그인</LoginTitle>
            <InputWrap>
                <InputBox>
                    <LabelBox htmlFor="email">
                        <LableText>이메일</LableText>
                    </LabelBox>
                    <Input 
                      placeholder="example@gmail.com"
                      autoComplete="off"
                      id="email"
                      type="text"
                      maxLength={40}
                    ></Input>
                    <SubTextBox>
                        <Message></Message>
                    </SubTextBox>
                </InputBox>
                <InputBox>
                    <LabelBox htmlFor="password">
                        <LableText>비밀번호</LableText>
                    </LabelBox>
                    <Input 
                      autoComplete="off"
                      id="password"
                      type= 'password'
                      visible='false'
                    ></Input>
                    <SubTextBox>
                        <Message>가입하지 않은 이메일이거나, 비밀번호가 일치하지  않아요.</Message>
                    </SubTextBox>
                </InputBox>
            </InputWrap>
            <LoginCheckWrap>
                <LoginCheckBox onClick={LoginKeeping}>
                    {loginKeep ? <LoginBtnImg src='./assets/images/icons/checked.svg'></LoginBtnImg> : <LoginBtnImg src='./assets/images/icons/unchecked.png'></LoginBtnImg>}
                    <LoginCheckText>로그인 유지</LoginCheckText>
                </LoginCheckBox>
                <FindPassword>비밀 번호 찾기</FindPassword>
            </LoginCheckWrap>
            <Button value='로그인'/>
            <MoveJoin>
                아직 회원이 아닌가요?
                <Link href="/join">
                    <LinkP>회원가입</LinkP>
                </Link>
            </MoveJoin>
        </Looin>
    </Container>
)

}
const Container = styled.section`
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;
`;
const Title = styled.h2`
font: ${({ theme }) => theme.fontSize.h2};
line-height: 42px;
text-align:center;
margin: 54px 0;
`;

// 로그인 박스
const Looin = styled.section`
`;
const LoginTitle = styled.p`
margin: 61px 0 41px;
font: ${({ theme }) => theme.fontSize.bigBold};
`;
const InputWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap:21px;
margin-bottom: 16px;
`;
const InputBox = styled.div`
width: 420px;
height: 80px;
padding: 10px;
box-sizing:border-box;
border-radius: 10px;
border: 1px solid #B7B7B7;
`;
const LabelBox = styled.label``;
const LableText = styled.p`
color: ${({ theme }) => theme.color.textDeepGray};
font: ${({ theme }) => theme.fontSize.middleRegular};
`;
const Input = styled.input`
width: 400px;
height: 40px;
border: none
`;
const SubTextBox=styled.div`
margin-top: 10px;
display: flex;
gap: 35px;
`;
const Message = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryRed};
`;

// 로그인 유지 및, 비밀번호 찾기
const LoginCheckWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 51px 0 33px;`;
const LoginCheckBox = styled.button`
display: flex;
align-items: center;
justify-contenr:space-between`;
const LoginBtnImg = styled.img`
width: 30px;
height: 30px;
margin-right: 10px;
`;
const LoginCheckText = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const FindPassword = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};`;
const MoveJoin = styled.div`
display: flex;
margin-top: 26px;
justify-content:center;
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textDeepGray};
`;
const LinkP = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryOrange};
text-decoration: underline;
cursor: pointer;
`;
