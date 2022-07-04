import styled from "styled-components";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useState } from "react";
import Link from "next/link";
import Header from "../../Component/layout/component/header";
import Footer from "../../Component/layout/component/Footer";

export default function LoginPage (){
    const [loginFail, setLoginFail] = useState(false)
    const [loginKeep, setLoginKeep] = useState(true)
    const LoginKeeping = () => {
        setLoginKeep(!loginKeep)
    }
return(
    <Container>
        <LoginWrap>
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
                        {loginFail ? <Message>가입하지 않은 이메일이거나, 비밀번호가 일치하지  않아요.</Message> :null}
                    </SubTextBox>
                </InputBox>
            </InputWrap>
            <LoginCheckWrap>
                <LoginCheckBox onClick={LoginKeeping}>
                    {loginKeep ? <LoginBtnImg src='./assets/images/icons/orangeCheck.png'></LoginBtnImg> : <LoginBtnImg src='./assets/images/icons/unchecked.svg'></LoginBtnImg>}
                    <LoginCheckText>로그인 유지</LoginCheckText>
                </LoginCheckBox>
                <Link href='/login/findpassword'>
                    <FindPassword >비밀번호 찾기</FindPassword>
                </Link>
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
        </LoginWrap>
    </Container>
)

}
const Container = styled.section`
width: 100vw;
display: flex;
align-item:center;
justify-content:center;
@media all and (max-width: 540px) {
    display: block
`;
const LoginWrap=styled.section`
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;
width: 45rem;
`;
const Title = styled.h2`
${({ theme }) => theme.fontSize.h2};
text-align:center;
margin: 4.5rem 0;
`;

// 로그인 박스
const Looin = styled.section`
`;
const LoginTitle = styled.p`
margin: 5.083rem 0 3.417rem;
${({ theme }) => theme.fontSize.bigBold};
`;
const InputWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 1.75rem;
margin-bottom: 1.333rem;
`;
const InputBox = styled.div`
width: 35em;
height: 6.667rem;
padding: 0.833rem;
box-sizing:border-box;
border-radius: 10px;
border: 1px solid #B7B7B7;
&:focus-within {
    border-color:${({ theme }) => theme.color.primaryOrange};
  }
`;
const LabelBox = styled.label``;
const LableText = styled.p`
color: ${({ theme }) => theme.color.textDeepGray};
${({ theme }) => theme.fontSize.middleRegular};
`;
const Input = styled.input`
width: 33.333rem;
height: 3.333rem;
border: none;
&:focus {
    outline:none;
  }
`;
const SubTextBox=styled.div`
margin-top: 0.833rem;
display: flex;
gap: 2.917rem;
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
margin:4.25rem 0 2.75rem;`;
const LoginCheckBox = styled.button`
display: flex;
align-items: center;
justify-contenr:space-between`;
const LoginBtnImg = styled.img`
width: 2.5rem;
height: 2.5rem;
margin-right: 0.833rem;
`;
const LoginCheckText = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const FindPassword = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
cursor:pointer;
`;
const MoveJoin = styled.div`
display: flex;
margin: 2.167rem 0 4.417rem;
justify-content:center;
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textDeepGray};
`;
const LinkP = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryOrange};
margin-left: 6px;
text-decoration: underline;
cursor: pointer;
`;
