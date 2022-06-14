import styled from "styled-components";
import Link from "next/link";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useState } from "react";
import { useForm } from 'react-hook-form'


export default function JoinPage (){
    const [activeId, setActiveId] = useState(false)
    const {register,watch} = useForm();
    const [passwordType,setPasswordType] = useState({
        type:'password',
        visible: false
    })

    console.log(watch())



    // 비밀번호 보여지기 버튼
    const visiblePassword = (e) => {
        setPasswordType(()=>{
                return{type: 'text', visible: true}
        })
    }
    const invisiblePassword = (e) => {
        setPasswordType(()=>{
                return{type: 'password', visible: false}
        })
    }
    return(
    <Container>
        <Title>
            회원 가입 하고 나만의 로봇을
            <br/> 
            직접 만들어요!
        </Title>
        <Sns/>
        <SignUp>
            <JoinTitle>이메일 회원가입</JoinTitle>
            <InputWrap>
            <InputBox>
                <LabelBox htmlFor="email">
                {watch().id? <ActiveLableText>이메일</ActiveLableText> : <LableText>이메일</LableText>}
                </LabelBox>
                <Input 
                  placeholder="example@gmail.com"
                  autoComplete="off"
                  id="email"
                  type="text"
                  maxLength={40}
                  {...register("id")}
                ></Input>
                <SubTextBox>
                    <Message></Message>
                </SubTextBox>
            </InputBox>
            <InputBox>
                <LabelBox htmlFor="password">
                    {watch().password? <ActiveLableText>비밀번호</ActiveLableText> : <LableText>비밀번호</LableText>} 
                </LabelBox>
                <PasswordWrap>
                    <Input 
                      autoComplete="off"
                      id="password"
                      type={passwordType.type}
                      {...register("password")}
                    ></Input>
                    <Btnwrap>
                        <VisibleBtn onClick={visiblePassword}>
                        </VisibleBtn>
                        <InvisibleBtn onClick={invisiblePassword}>
                        </InvisibleBtn>
                    </Btnwrap>
                </PasswordWrap>
                <SubTextBox>
                    <Message></Message>
                </SubTextBox>
            </InputBox>
            <InputBox>
                <LabelBox htmlFor="nickname">
                    {watch().nickname? <ActiveLableText>별명</ActiveLableText> : <LableText>별명</LableText>} 
                </LabelBox>
                <Input 
                  autoComplete="off"
                  id="nickname"
                  type="text"
                  {...register("nickname")}
                ></Input>
                <SubTextBox>
                    <Message></Message>
                </SubTextBox>
            </InputBox>
            <InputBox>
                <LabelBox>
                    <LableText>국가</LableText>
                </LabelBox>
                <Select>
                </Select>
            </InputBox>
        </InputWrap>
        </SignUp>
        <PolicyDesc>
            <Link href="#">
                이용약관
            </Link>
            및
            <Link href="#">
                개인정보 처리 방침
            </Link>
            에 동의하고, 회원가입합니다.
        </PolicyDesc>
        <Button value='가입하기'/>
        <LoginBox>
                <LoginText>
                  이미 회원인가요?
                </LoginText>
                <Link href="#">
                  <p>로그인</p>
                </Link>
        </LoginBox>
    </Container>)
};

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

// 회원 가입 틀
const SignUp = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 56px;
`;
const JoinTitle = styled.div`
margin-bottom: 25px;
font: ${({ theme }) => theme.fontSize.bigBold};
`;
const InputWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap:48px;
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
const ActiveLableText = styled.p`
color: ${({ theme }) => theme.color.primaryOrange};
font: ${({ theme }) => theme.fontSize.middleRegular};
`;
const Input = styled.input`
width: 400px;
height: 40px;
border: none`;
const PasswordWrap= styled.div`
display: flex;`;
const Btnwrap = styled.div`
display: flex;

`;
const VisibleBtn = styled.button`
background: url('/assets/images/icons/visible.png') no-repeat;
width: 30px;
heght: 22px;
margin-right: 13px;
`;
const InvisibleBtn = styled.button`
background: url('/assets/images/icons/invisible.png') no-repeat;
width: 30px;
heght: 22px;
margin-top: -2px;`;

const SubTextBox=styled.div``;
const Message = styled.p``;
const Select = styled.select``;
const PolicyDesc = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
margin-bottom: 37px;`;

// 가입하기 버튼
const SignUpButton = styled.button``;

// 로그인 
const LoginBox = styled.div`
margin-top: 16px;
display: flex;
font: ${({ theme }) => theme.fontSize.middleRegular};
`;
const LoginText = styled.p``;
