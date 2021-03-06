import styled from "styled-components";
import Link from "next/link";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import countryList from '../../data/country.json'
import Header from "../../Component/layout/component/header";
import Footer from "../../Component/layout/component/Footer";

import helper from "../../utils/common/helper";
import dynamic from "next/dynamic";

// api
import{ postSignupApi } from '../apis/signupApi'

export default function SignupPage (){
  const Router = useRouter();

  // 이메일
  const [email, setEmail] = useState('')
  const [isAutoEmailClicked, setAutoEmailClicked] = useState(false);
  const [isIsEmailAutoStarted, setIsEmailAutoStarted] = useState(false);
  const [emailError, setEmailError] = useState(false)
  const [usedEmail, setUsedEmail] = useState(false)
  const AutoEmailList = [
      { id: 1, address: '@gmail.com' },
      { id: 2, address: '@naver.com' },
      { id: 3, address: '@daum.net' },
    ];

  // 비밀번호
  const [passwordShown,setPasswordShown] = useState(false)
  const [password, setPassword] = useState('')
  const [isEngChecked, setIsEngChecked] = useState(false)
  const [isNumChecked, setIsNumChecked] = useState(false)
  const [isLimitChecked, setIsLimitChecked] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [isPasswordCorrected, setIsPasswordCorrected] = useState(false)
  
    // 닉네임
  const [nickname, setNickname] = useState('')
  const  [isNicknameChanged, setIsNicknameChanged] = useState(false)
  const [usedNickname, setUsedNickname] = useState(false)

  // 국가 설정
  const [ip, setIp] = useState('')
  const [country, setCountry] = useState('')
  const [countryMap, setCountryMap] = useState([])
  const [countryOpenBtn, setCountryOpenBtn] = useState(false)
  const [search, setSearch] = useState('')

  // 전체 검사
  const [submitError, setSubmitError] = useState(true)

    // 유효성검사
    const onSubmit = (e) => {
      e.preventDefault();
      if (!!helper.emailValid(email)) {
      setEmail(email)
        if (!!isEngChecked && !!isNumChecked && !!isLimitChecked) {
          setPassword(password)
          if(email && password && nickname && country) {
            completeData()
          }
        }
        else {
          setPasswordError(true)
        }
      }
      else {
        setEmailError(true)
      }

    }
    const completeData = (e) => {
        postSignupApi(
          email,
          password,
          nickname,
          country
        )
        .then((res) => {
          console.log(res)
          if(res?.data?.verified === false) {
            Router.push({
              pathname: 'signup/verify',
              query:{email:email}
            });
          } else {
            setUsedEmail(true)
          }
        })
        .catch((err) => {
          console.log(err)
        })
      }

    // 임풋 유효성 검사
    const handleInputChange = (e) => {
      const { id, value } = e?.target;
      switch (id) {
        case 'email':
          setEmail(value);
          setAutoEmailClicked(false);
          setNickname(value.slice(0, -1))

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
        case 'nickname':
          setIsNicknameChanged(true);
          setNickname(value);
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
      setPasswordShown(!passwordShown)
  }
  
  // 접속국가 ip 확인
  const API_key = 'key=Km3pTLz60yRpssZeS4f9';
  const API_endPoint = 'https://extreme-ip-lookup.com/json/?'
      useEffect (() => {
          getIpClient()
        },[ip])

  async function getIpClient() {
    try {
      const response = await axios.get(`${API_endPoint}${API_key}`);
      setIp(response.data.country)
      setCountry(ip.toUpperCase())
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
    <JoinWrap>
    <Header/>
      <Title>
          회원 가입 하고 나만의 로봇을
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
                    placeholder="example@email.com"
                    autoComplete="off"
                    type='text'
                    id="email"
                    value={email}
                    maxLength={40}
                    onChange={handleInputChange}
                    onBlur={handleEmailFocusOut}
                  ></Input>
                  <SubTextBox>
                      {usedEmail? <Message>이미 가입한 이메일이에요.</Message> : null}
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
                        type={!!passwordShown ? 'text' : 'password'}
                        value={password}
                        onChange={handleInputChange}
                        maxLength={16}
                      >
                      </Input>
                        <InvisibleBtn onClick={visiblePassword}>
                          {passwordShown ? <BtnImg src='/assets/images/icons/visible.png'></BtnImg> : <BtnImg src='/assets/images/icons/invisible.png'></BtnImg>}
                        </InvisibleBtn>
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
                  <LabelBox htmlFor="nickname">
                      {nickname? <ActiveLableText>별명</ActiveLableText> : <LableText>별명</LableText>} 
                  </LabelBox>
                  <Input 
                    autoComplete="off"
                    id="nickname"
                    value={nickname}
                    onChange={handleInputChange}
                    maxLength={20}
                  ></Input>
                  <SubTextBox>
                      {usedNickname ? <Message>이미 존재하거나,사용할 수 없는 별명이에요.</Message> :null}
                  </SubTextBox>
              </InputBox>
              <SelectBox>
                  <LabelBox>
                      <ActiveLableText>국가</ActiveLableText>
                  </LabelBox>
                  <Select>
                    <CountrySelected>{country}</CountrySelected>
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
              <Link href="policy/terms">
                  <LinkBtn>이용약관</LinkBtn>
              </Link>
              및
              <Link href="policy/privacy">
                  <LinkBtn>개인정보 처리방침</LinkBtn>
              </Link>
              에 동의하고, 회원가입합니다.
          </PolicyDesc>
          <Button type="submit" value='가입하기' onClick={onSubmit} disabled={submitError}/>
      </SignUpForm>
      <LoginBox>
              <LoginText>
                이미 회원인가요?
              </LoginText>
              <Link href="/login">
                <P>로그인</P>
              </Link>
      </LoginBox>
      <Footer/>
      </JoinWrap>
  </Container>)
};

const Container = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 100vw;
@media all and (max-width: 540px) {
  display: block
`;
const JoinWrap = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: 45rem;
`;
const Title = styled.h2`
${({ theme }) => theme.fontSize.h2};
text-align:center;
margin: 4.5rem 0;
width: 28.333rem;
`;

// 회원 가입 틀
const SignUpForm = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
margin-top: 4.667rem;
`;
const JoinTitle = styled.div`
margin-bottom: 2.083rem;
align-self:start;
${({ theme }) => theme.fontSize.bigBold};
`;
const InputWrap = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap:4rem;
margin-bottom: 1.333rem;
`;
const InputBox = styled.div`
position: relative;
width: 35rem;
height: 6.667rem;
padding: 0.833rem;
box-sizing:border-box;
border-radius: 10px;
border: 1px solid #B7B7B7;
&:focus-within {
  border-color:${({ theme }) => theme.color.primaryOrange};
}
`;
const LabelBox = styled.label`
`;
const LableText = styled.p`
color: ${({ theme }) => theme.color.textDeepGray};
${({ theme }) => theme.fontSize.middleRegular};
&:focus {
  border-color:${({ theme }) => theme.color.primaryOrange};
}
`;
const ActiveLableText = styled.p`
color: ${({ theme }) => theme.color.primaryOrange};
${({ theme }) => theme.fontSize.middleRegular};
`;
const Input = styled.input`
width: 25rem;
padding-right: 8.333rem;
height: 3.333rem;
border: none;
&:focus {
  outline:none;
}
`;


// 비밀번호 보이게 안보이게
const PasswordWrap= styled.div`
display: flex;
position:relative;
`;
const InvisibleBtn = styled.button`
width: 2.5rem;
heght: 1.833rem;
margin-top: -0.167rem;
margin-left: 4.5rem;
`;
const BtnImg = styled.img`
width: 2.5rem;
height: 2.333rem;`;


// 오류 내용
const SubTextBox=styled.div`
margin-top: 0.833rem;
display: flex;
gap: 2.917rem;
`;
const Message = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryRed};
`;
const SubMsg = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const PassMsg = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryBlue};
`;
const ErrorMsg = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryRed};
`;
const NumError = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const LimitError = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const Img = styled.img`
`;

// 이메일 자동완성
const DropBox = styled.ul`
  position: absolute;
  top: 7.083rem;
  width: 33.333rem;
  border-radius: 6px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
  background: #fff;
  z-index: 100;
 `;
const DropOption = styled.li`
  height: 4.25rem;
  padding: 0.833rem 1.667rem;
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
width: 35rem;
height:6.667rem;
padding:0.833rem;
box-sizing:border-box;
border-radius: 10px;
border: 1px solid #B7B7B7;
`;
const Select = styled.div`
`;
const CountrySelected = styled.p`
${({ theme }) => theme.fontSize.h4};
color: ${({ theme }) => theme.color.textGray};
margin-top: 0.833rem;
`;
const SelectDropBox =styled.ul`
position: absolute;
top: 85px;
left: 0;
width: 35rem;
height:17.25rem;
overflow-y: scroll;
border-radius: 10px;
box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.3);
background: #fff;
z-index: 100;
`;
const SelectDropOption = styled.li`
${({ theme }) => theme.fontSize.h4};
color: ${({ theme }) => theme.color.textDeepGray};
height: 4.25rem;
padding: 0.917rem 1.5rem;
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
bottom: 26px;
right: 16px;
background:url(/assets/images/icons/polygon.png) no-repeat;
background-size: contain;
width: 2.5rem;
height: 2.083rem;
@media all and (max-width : 540px){
  top:2.167rem;
  right: 20px;
}
`;
const SelectInput = styled.input`
width: 34rem;
height: 4.167rem;
border-radius: 10px;
border:none;
border-bottom: 1px solid #EDEDED;
background-image:url(/assets/images/icons/search.png);
background-position: 13px center;
background-size: 2.667rem;
background-repeat: no-repeat;
padding: 5px 5px;
text-indent: 3.75rem;
`;

// 정책 연결
const PolicyDesc = styled.div`
font: ${({ theme }) => theme.fontSize.middleRegular};
margin-bottom: 3.083rem;
text-align: center;
display: flex;
align-items:center;
justify-content: center;
gap: 0.5rem;
`;
const LinkBtn = styled.p`
color: ${({ theme }) => theme.color.primaryBlue};
text-decoration: underline;
cursor:pointer;
&:nth-child(2) {
  margin-right:-4.5px;
}

`;

// 로그인 
const LoginBox = styled.div`
margin: 1.333rem 0 6.5em;
display: flex;
${({ theme }) => theme.fontSize.middleRegular};
`;
const LoginText = styled.p``;
const P = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryOrange};
margin-left: 6px;
text-decoration: underline;
cursor: pointer;
`;