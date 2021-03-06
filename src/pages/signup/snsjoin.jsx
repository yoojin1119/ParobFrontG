import styled from "styled-components"
import { useState,useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import countryList from '../../data/country.json'
import Header from "../../Component/layout/component/header";
import Footer from "../../Component/layout/component/Footer"

export default function ExpiredPasswordPage (){
    const [nickName, setNickName] = useState('')
    const [country, setCountry] = useState('')
    const [countryMap, setCountryMap] = useState([])
    const [countryOpenBtn, setCountryOpenBtn] = useState(false)
    const [search, setSearch] = useState('')
    const [ip, setIp] = useState('')
    const [data, setData] = useState({})
    const [error, setError] = useState(false)

    // 전체 검사
  const [submitError, setSubmitError] = useState(true)

    const handleInputChange = (e) =>{
      setNickName(e.target.value)
      setSubmitError(false)
    }
    
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

    const onSubmit = (e) => {
      if(!!nickName&&!!country) {
        data = {
          nickName : nickName,
          country : country,
        }
        setData(data)
        e.preventDefault()
        console.log(data)
      }
      else {
        setSubmitError(true)
        console.log(submitError)
        setError(true)
      }
    }

    return(
        <Container>
            <Header/>
            <SnsLoginWrap>
                <SnsLoginTit>회원가입을 위해 추가정보가 필요해요.</SnsLoginTit>
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
                    maxLength={20}
                  ></Input>
                  <SubTextBox>
                      {error ? <Message>이미 존재하거나,사용할 수 없는 별명이에요.</Message> : null}
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
              <PolicyDesc>
              <Link href="/terms">
                  <LinkBtn>이용약관</LinkBtn>
              </Link>
              및
              <Link href="privacy">
                  <LinkBtn>개인정보 처리 방침</LinkBtn>
              </Link>
              에 동의하고, 회원가입합니다.
          </PolicyDesc>
          <SnsLoginBtn type="submit" onClick={onSubmit} disabled={submitError}>가입완료</SnsLoginBtn>
            </SnsLoginWrap>
            <Footer/>
        </Container>
    )
}

const Container = styled.section``;
const SnsLoginWrap = styled.form`
display: flex;
flex-direction:column;
align-items:center;
margin: 6.667rem 0;
`;
const SnsLoginTit = styled.h2`
${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textDeepGray};
margin-bottom: 4.5rem;
`;
const InputBox = styled.div`
position: relative;
width: 35rem;
height: 6.667rem;
padding: 0.833rem;
margin-bottom: 4rem;
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
const SubTextBox=styled.div`
margin-top: 0.833rem;
display: flex;
gap: 2.917rem;
`;
const Message = styled.p`

${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.primaryRed};
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
margin: 1.333rem 0 3.083rem;
text-align: center;
display: flex;
gap: 0.5rem;
`;
const LinkBtn = styled.p`
color: ${({ theme }) => theme.color.primaryBlue};
text-decoration: underline;
`;

const SnsLoginBtn = styled.button`
width: 35rem;
height: 5.833rem;
${({ theme }) => theme.fontSize.h2};
color:${({ theme }) => theme.color.textWhite};
background-color:${({ theme }) => theme.color.primaryOrange}; 
border-radius: 20px;
`;