import styled from "styled-components";
import Link from "next/link";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useState } from "react";
import { useForm } from 'react-hook-form'
import TextInput from 'react-autocomplete-input'


export default function JoinPage (){
    // 유효성검사
    const [data, setData] = useState(null);
    const {
        register,
        watch,
         handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => {
        setData(data);
    };

    // 이메일 자동완성
    const [email, setEmail] = useState('');
    const [isAutoEmailClicked, setAutoEmailClicked] = useState(false);
    const [isIsEmailAutoStarted, setIsEmailAutoStarted] = useState(false);
    const AutoEmailList = [
        { id: 1, address: '@gmail.com' },
        { id: 2, address: '@naver.com' },
        { id: 3, address: '@daum.net' },
      ];

    const handleEmailFocusOut = () => {
      setIsEmailAutoStarted(false);
    };
    const handleKeyDown = () => {
       watch().email.includes('@')
        ? setIsEmailAutoStarted(true)
        : setIsEmailAutoStarted(false);
    };
    const handleAutoEmail = (e) => {
        setEmail(e.target.innerHTML);
        setAutoEmailClicked(true);
        setIsEmailAutoStarted(false)
      };
    const onChange = (e) => {
        setEmail(e.target.value)
    }


    // 비밀번호 보여지기 버튼
    const [passwordType,setPasswordType] = useState({
        type:'password',
        visible: false
    })

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
        <SignUpForm onSubmit={handleSubmit(onSubmit)}>
            <JoinTitle>이메일 회원가입</JoinTitle>
            <InputWrap>
                <InputBox>
                    <LabelBox htmlFor="email">
                    {watch().email? <ActiveLableText>이메일</ActiveLableText> : <LableText>이메일</LableText>}
                    </LabelBox>
                    <Input 
                      placeholder="example@gmail.com"
                      autoComplete="off"
                      id="email"
                      type="text"
                      maxLength={40}
                      onChange={onChange}
                      required
                      onBlur={handleEmailFocusOut}
                      onKeyDown={handleKeyDown}
                      {...register("email", {
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "이메일 주소를 정확히 입력해주세요.",
                        },
                      })}
                    ></Input>
                    <SubTextBox>
                        <Message>이미 가입한 이메일이에요.</Message>
                        <Message>{errors.email && errors.email.message}</Message>
                    </SubTextBox>
                    {isIsEmailAutoStarted ?                  
                        <DropBox>
                            {AutoEmailList?.map(
                              (item, idx) => {
                                return (
                                  item?.address?.includes(watch().email.split('@')[1]) &&
                                  !watch().email.includes(item?.address) && (
                                    <DropOption
                                      key={idx}
                                      id="0"
                                      value={email}
                                      onClick={handleAutoEmail}
                                    >
                                      {watch().email?.split('@')[0]}
                                      {item?.address}
                                    </DropOption>
                                  )
                                );
                              }
                            )}
                        </DropBox>: null}
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
                        >
                        </Input>
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
                        <Message>이미 존재하거나,사용할 수 없는 별명이에요.</Message>
                    </SubTextBox>
                </InputBox>
                <InputBox>
                    <LabelBox>
                        <ActiveLableText>국가</ActiveLableText>
                    </LabelBox>
                    <Select>
                    </Select>
                </InputBox>
            </InputWrap>
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
            <Button type="submit" value='가입하기'/>
        </SignUpForm>
        <LoginBox>
                <LoginText>
                  이미 회원인가요?
                </LoginText>
                <Link href="/login">
                  <P>로그인</P>
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
const SignUpForm = styled.form`
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
position: relative;
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

// 비밀번호 보이게 안보이게
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


// 오류 내용
const SubTextBox=styled.div`
margin-top: 10px;
display: flex;
gap: 35px;
`;
const Message = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryRed};
`;

// 이메일 자동완성
const DropBox = styled.ul`
  position: absolute;
  top: 85px;
  width: 400px;
  border-radius: 6px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
  z-index: 100;
`;
const DropOption = styled.li`
  height: 3.2rem;
  padding: 0.7rem 1.1rem;
  &:hover {
    background-color: rgb(255, 215, 191);
    cursor: pointer;
  }
  &:hover: first-child {
    background-color: rgb(255, 215, 191);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }
  &:hover:last-child {
    background-color: rgb(255, 215, 191);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const Select = styled.select``;
const PolicyDesc = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
margin-bottom: 37px;
text-align: center;
`;

// 가입하기 버튼
const SignUpButton = styled.button``;

// 로그인 
const LoginBox = styled.div`
margin-top: 16px;
display: flex;
font: ${({ theme }) => theme.fontSize.middleRegular};
`;
const LoginText = styled.p``;
const P = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryOrange};
text-decoration: underline;
cursor: pointer;
`;