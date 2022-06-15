import styled from "styled-components";
import Link from "next/link";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useEffect, useState } from "react";
import axios from "axios";

import helper from "../../utils/common/helper";

export default function JoinPage (){
  const [data, setData] = useState({});

  // 이메일
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isAutoEmailClicked, setAutoEmailClicked] = useState(false);
  const [isIsEmailAutoStarted, setIsEmailAutoStarted] = useState(false);
  const [emailError, setEmailError] = useState(false)
  const AutoEmailList = [
      { id: 1, address: '@gmail.com' },
      { id: 2, address: '@naver.com' },
      { id: 3, address: '@daum.net' },
    ];

  // 비밀번호
  const [passwordType,setPasswordType] = useState({
    type:'password',
    visible: false
  })
  const [isEngChecked, setIsEngChecked] = useState(false)
  const [isNumChecked, setIsNumChecked] = useState(false)
  const [isLimitChecked, setIsLimitChecked] = useState(false)
  const [IsPasswordCorrected, setIsPasswordCorrected] = useState(false)
  
    // 닉네임
  const [nickName, setNickName] = useState('')
  const [isNicknameChanged, setIsNicknameChanged] = useState(false)


  // 국가 설정
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [responseData, setResponseData] = useState()
  const [country, setCountry] = useState('')
  const countryList = [ '한국', '일본', '중국','인도','미국','캐나다','스페인','프랑스','독일', '포루투갈', '베트남', '인드네시아', '이란', '아랍', '미얀마', '태국', '러시아', '이탈리아', '해당없음']

    // 유효성검사
    const onSubmit = () => {
      if (!!helper.emailValid(email)) {
      setEmail(email)
      }
      else {
        setEmailError(true)
      }
      completeData()
    }
    const completeData = () => {
      data = {
        id: email,
        password: password,
        nickName:nickName
      }
        setData(data);
    }

    // 임풋 유효성 검사
    const handleInputChange = (e) => {
      const { id, value } = e?.target;
      switch (id) {
        case 'email':
          setEmail(value);
          setAutoEmailClicked(false);
          //@입력시 자동완성 이메일 생성
          value?.includes('@')
            ? setIsEmailAutoStarted(true)
            : setIsEmailAutoStarted(false);
          break;
        case 'password':
          !!value
            setPassword(value)
          !!helper.engValid(value)
            ? setIsEngChecked(true)
            : setIsEngChecked(false);
          !!helper.numValid(value)
            ? setIsNumChecked(true)
            : setIsNumChecked(false);
          !!helper.limitValid(value)
            ? setIsLimitChecked(true)
            : setIsLimitChecked(false);
          !!isEngChecked &&
            !!isNumChecked &&
            !!isLimitChecked &&
            setIsPasswordCorrected(true);
          break;
        case 'nickName':
          setIsNicknameChanged(true);
          setNickName(value);
      }
  };

  // 이메일 자동완성
  const handleEmailFocusOut = () => {
    setIsEmailAutoStarted(false);
  }
  const handleAutoEmail = (e) => { 
    setEmail(e?.target?.innerHTML);
    setAutoEmailClicked(true);
  }; 
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
  
  
  // 접속국가 ip 확인
      const API_endpoint = 'https://api.openweathermap.org/data/2.5/weather?';
      const API_key='7343370acfb3698a06f563a12ecf5a6a';
      useEffect (() => {
        navigator.geolocation.getCurrentPosition((position)=>{
          setLatitude(position.coords.latitude)
          setLongitude(position.coords.longitude)
          findLocation(latitude,longitude)
        })
      },[latitude,longitude])

      function findLocation() {
        axios.get(`${API_endpoint}lat=${latitude}&lon=${longitude}&appid=${API_key}`)
        .then((res) => {
          setResponseData(res.data)
          console.log(responseData)
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
      <SignUpForm onSubmit={onSubmit}>
          <JoinTitle>이메일 회원가입</JoinTitle>
          <InputWrap>
              <InputBox>
                  <LabelBox htmlFor="email">
                    {email? <ActiveLableText>이메일</ActiveLableText> : <LableText>이메일</LableText>}
                  </LabelBox>
                  <Input 
                    placeholder="example@gmail.com"
                    autoComplete="off"
                    type='text'
                    id="email"
                    value={email}
                    onChange={handleInputChange}
                    onBlur={handleEmailFocusOut}
                  ></Input>
                  <SubTextBox>
                      <Message>이미 가입한 이메일이에요.</Message>
                      {emailError? <Message>이메일 주소를 정확히 입력해주세요.</Message> :null}
                  </SubTextBox>
                  {!!isIsEmailAutoStarted ?                  
                      <DropBox>
                          {AutoEmailList?.map(
                            (item, idx) => {
                              return (
                                item?.address?.includes(email.split('@')[1]) &&
                                !email.includes(item?.address) && (
                                  <DropOption
                                    key={idx}
                                    id={idx}
                                    value={email}
                                    onMouseDown={handleAutoEmail}
                                  >
                                    {email?.split('@')[0]}
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
                      {password? <ActiveLableText>비밀번호</ActiveLableText> : <LableText>비밀번호</LableText>} 
                  </LabelBox>
                  <PasswordWrap>
                      <Input 
                        autoComplete="off"
                        id="password"
                        value={password}
                        onChange={handleInputChange}
                        type={passwordType.type}
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
                    {!password ? <SubMsg><Img src='./assets/images/icons/greyCheck.png'></Img>문자</SubMsg> 
                    : isEngChecked ? <PassMsg><Img src='./assets/images/icons/blueCheck.png'></Img>문자</PassMsg>
                    : <ErrorMsg><Img src='./assets/images/icons/redCheck.svg'></Img>문자</ErrorMsg>}
                    {!password ? <SubMsg><Img src='./assets/images/icons/greyCheck.png'></Img>숫자</SubMsg> 
                    : isNumChecked ? <PassMsg><Img src='./assets/images/icons/blueCheck.png'></Img>숫자</PassMsg>
                    : <ErrorMsg><Img src='./assets/images/icons/redCheck.svg'></Img>숫자</ErrorMsg>}
                    {!password ? <SubMsg><Img src='./assets/images/icons/greyCheck.png'></Img>8글자</SubMsg> 
                    : isLimitChecked ? <PassMsg><Img src='./assets/images/icons/blueCheck.png'></Img>8글자</PassMsg>
                    : <ErrorMsg><Img src='./assets/images/icons/redCheck.svg'></Img>8글자</ErrorMsg>}
                  </SubTextBox>
              </InputBox>
              <InputBox>
                  <LabelBox htmlFor="nickName">
                      {nickName? <ActiveLableText>별명</ActiveLableText> : <LableText>별명</LableText>} 
                  </LabelBox>
                  <Input 
                    autoComplete="off"
                    id="nickName"
                    type="text"
                    value={nickName}
                    onChange={handleInputChange}
                  ></Input>
                  <SubTextBox>
                      <Message>이미 존재하거나,사용할 수 없는 별명이에요.</Message>
                  </SubTextBox>
              </InputBox>
              <SelectBox>
                  <LabelBox>
                      <ActiveLableText>국가</ActiveLableText>
                  </LabelBox>
                  <Select>
                  {countryList?.map(
                            (item, idx) => {
                              return (
                                  <Option
                                    key={idx}
                                    id={idx}
                                    value={country}
                                    onMouseDown={handleAutoEmail}
                                  >
                                    {item}
                                  </Option>
                                )
                            })}
                  </Select>
              </SelectBox>
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
const SubMsg = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const PassMsg = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryBlue};
`;
const ErrorMsg = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryRed};
`;
const NumError = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const LimitError = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const Img = styled.img`
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

// 국가 정보
const SelectBox = styled.div`
position: relative;
width: 420px;
height: 80px;
padding: 10px;
box-sizing:border-box;
border-radius: 10px;
border: 1px solid #B7B7B7
`;
const Select = styled.select`
position:absolute;
width: 400px;
height: 50px;
right: 10px;
appearance: none;
background:url(/assets/images/icons/polygon.png) no-repeat 95% 10%;
background-size: 20px;
`;
const Option = styled.option`
background: #000000;
color: #fff;
padding: 3px 0;
`;
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