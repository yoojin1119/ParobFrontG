import styled from "styled-components";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useState } from "react";
import Link from "next/link";
import Header from "../../Component/layout/header";
import Footer from "../../Component/layout/Footer";

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
        <Footer/>
    </Container>
)

}
const Container = styled.section`
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;
width: 100vw;
`;
const Title = styled.h2`
${({ theme }) => theme.fontSize.h2};
text-align:center;
margin: 3.375rem 0;
`;

// 로그인 박스
const Looin = styled.section`
`;
const LoginTitle = styled.p`
margin: 3.813rem 0 2.563rem;
${({ theme }) => theme.fontSize.bigBold};
`;
const InputWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.313rem;
margin-bottom: 1rem;
`;
const InputBox = styled.div`
width: 26.25rem;
height: 5rem;
padding: 0.625rem;
box-sizing:border-box;
border-radius: 10px;
border: 1px solid #B7B7B7;
`;
const LabelBox = styled.label``;
const LableText = styled.p`
color: ${({ theme }) => theme.color.textDeepGray};
${({ theme }) => theme.fontSize.middleRegular};
`;
const Input = styled.input`
width: 25rem;
height: 2.5rem;
border: none;
`;
const SubTextBox=styled.div`
margin-top: 0.625rem;
display: flex;
gap: 2.188rem;
`;
const Message = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryRed};
`;

// 로그인 유지 및, 비밀번호 찾기
const LoginCheckWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin:3.188rem 0 2.063rem;`;
const LoginCheckBox = styled.button`
display: flex;
align-items: center;
justify-contenr:space-between`;
const LoginBtnImg = styled.img`
width: 1.875rem;
height: 1.875rem;
margin-right: 0.625rem;
`;
const LoginCheckText = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const FindPassword = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};`;
const MoveJoin = styled.div`
display: flex;
margin: 1.625rem 0 3.313rem;
justify-content:center;
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textDeepGray};
`;
const LinkP = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryOrange};
text-decoration: underline;
cursor: pointer;
`;
