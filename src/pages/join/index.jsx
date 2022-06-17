import styled from "styled-components";
import Link from "next/link";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import countryList from '../../data/country.json'
import Header from "../../Component/layout/header";

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
  const [country, setCountry] = useState('')
  const [countryMap, setCountryMap] = useState([])
  const [countryOpenBtn, setCountryOpenBtn] = useState(false)
  const [search, setSearch] = useState('')
  const [ip, setIp] = useState('')

    // 유효성검사
    const onSubmit = (e) => {
      if (!!helper.emailValid(email)) {
      setEmail(email)
      completeData()
      }
      else {
        setEmailError(true)
        e.preventDefault()
      }
      if ( !!isEngChecked && !!isNumChecked && !!isLimitChecked) {
        setPassword(password)
      }
      else {
        e.preventDefault()
      }
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
      e.preventDefault();
      setPasswordType(()=>{
          return{type: 'text', visible: true}
      })
  }
  const invisiblePassword = (e) => {
      e.preventDefault();
      setPasswordType(()=>{
          return{type: 'password', visible: false}
      })
  }
  
  // 접속국가 ip 확인
  const API_key = 'key=Km3pTLz60yRpssZeS4f9';
  const API_endPoint = 'https://extreme-ip-lookup.com/json/?'
      useEffect (() => {
          getIpClient()
        },)
  async function getIpClient() {
    try {
      const response = await axios.get(`${API_endPoint}${API_key}`);
      setIp(response.data.country)
      countryCheck()
    } catch (error) {
      console.error(error);
    }
  }
    
  const countryCheck = () => {
    let arr = []
    for(const value in countryList) {
      arr.push(countryList[value].CountryNameEN);
    }
    setCountryMap(arr)
  }
  const countryOpen = (e) =>{
    e.preventDefault();
    setCountry(ip.toUpperCase())
    setCountryOpenBtn(!countryOpenBtn)
  }
  const handleCountry = (e) => {
  setCountry(e.target.innerHTML)
  setCountryOpenBtn(!countryOpenBtn)
  setSearch('')
  }

  // 국가 검색 기능
  const onChangeSearch =(e) =>{
    e.preventDefault();
    setSearch(e.target.value)
  }
  return(
  <Container>
      <Header/>
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
                    <CountrySelected >{country}</CountrySelected>
                   {search ?   
                   <SelectDropBox>
                      <SelectInput 
                      type= 'text'
                      value={search} 
                      onChange={onChangeSearch} 
                      placeholder="국가 리스트">
                      </SelectInput>
                      {countryMap.filter((item) => {
                        if(item.includes(search.toUpperCase())){
                          return item
                        }}).map((item, idx) => (<SelectDropOption 
                          key={idx} 
                          id={idx}
                          value={country}
                          onMouseDown={handleCountry}>{item}</SelectDropOption>))}
                    </SelectDropBox> : countryOpenBtn ?
                    <SelectDropBox>
                    <SelectInput 
                      type='text'
                      value={search} 
                      onChange={onChangeSearch} 
                      placeholder="국가 리스트">
                      </SelectInput>
                      {countryMap.map((item, idx) => {
                        return(
                          <SelectDropOption
                            key={idx}
                            id={idx}
                            value={country}
                            onMouseDown={handleCountry}
                          >
                            {item}
                          </SelectDropOption>
                          )})}
                   </SelectDropBox>: null}
                  </Select>
                  <SelectButton onClick={countryOpen}></SelectButton>
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
          <Button type="submit" value='가입하기' onClick={onSubmit}/>
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
width: 300px;
padding-right: 100px;
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
position:relative;
width: 420px;
height: 80px;
padding: 10px;
box-sizing:border-box;
border-radius: 10px;
border: 1px solid #B7B7B7
`;
const Select = styled.div`
`;
const CountrySelected = styled.p`
margin-top: 10px`;
const SelectDropBox =styled.ul`
position: absolute;
top: 85px;
left: 0;
width: 420px;
height: 207px;
overflow: scroll;
border-radius: 10px;
box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
background: #fff;
z-index: 100;
`;
const SelectDropOption = styled.li`
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
const SelectButton = styled.button`
position:absolute;
top:29px;
right: 26px;
background:url(/assets/images/icons/polygon.png) no-repeat;
width: 30px;
height: 25px;
`;
const SelectInput = styled.input`
width: 408px;
height: 50px;
border-radius: 10px;
border:none;
border-bottom: 1px solid #EDEDED;
background-image:url(/assets/images/icons/search.png);
background-position: 13px center;
background-size: 32px;
background-repeat: no-repeat;
padding: 5px 5px;
text-indent: 45px;
`;
// 정책 연결
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