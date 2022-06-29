import styled from "styled-components"
import { useState } from "react";
import helper from "../../utils/common/helper";
import Header from "../../Component/layout/header";
import Footer from "../../Component/layout/Footer"

export default function ModifiedPasswordPage (){
    const [password, setPassword] = useState('')
  const [passwordType,setPasswordType] = useState({
    type:'password',
    visible: false
  })
  const [isEngChecked, setIsEngChecked] = useState(false)
  const [isNumChecked, setIsNumChecked] = useState(false)
  const [isLimitChecked, setIsLimitChecked] = useState(false)

  const handleInputChange = (e) => {
    const { id, value } = e?.target;
    switch (id) {
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
              break;
        }
    }

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
const onSubmit = () => {
  setPassword(password)
  console.log(password)
}
    return(
        <Container>
            <Header/>
                <ModifyWrap>
                    <ModifyTit>새 비밀번호를 설정해주세요</ModifyTit>
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
                    {!password ? <SubMsg><Img src='/assets/images/icons/greyCheck.png'></Img>문자</SubMsg> 
                    : isEngChecked ? <PassMsg><Img src='/assets/images/icons/blueCheck.png'></Img>문자</PassMsg>
                    : <ErrorMsg><Img src='/assets/images/icons/redCheck.svg'></Img>문자</ErrorMsg>}
                    {!password ? <SubMsg><Img src='/assets/images/icons/greyCheck.png'></Img>숫자</SubMsg> 
                    : isNumChecked ? <PassMsg><Img src='/assets/images/icons/blueCheck.png'></Img>숫자</PassMsg>
                    : <ErrorMsg><Img src='/assets/images/icons/redCheck.svg'></Img>숫자</ErrorMsg>}
                    {!password ? <SubMsg><Img src='/assets/images/icons/greyCheck.png'></Img>8글자</SubMsg> 
                    : isLimitChecked ? <PassMsg><Img src='/assets/images/icons/blueCheck.png'></Img>8글자</PassMsg>
                    : <ErrorMsg><Img src='/assets/images/icons/redCheck.svg'></Img>8글자</ErrorMsg>}
                  </SubTextBox>
              </InputBox>
              <ModifyBtn onClick={onSubmit}>비밀번호 재설정</ModifyBtn>
                </ModifyWrap>
            <Footer/>
        </Container>
    )
}

const Container = styled.section``;
const ModifyWrap = styled.div`
display: flex;
flex-direction:column;
align-items:center;
margin: 6.667rem 0;`;
const ModifyTit = styled.h2`
${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textDeepGray};
margin-bottom: 7rem;
`;
const InputBox = styled.div`
position: relative;
width: 35rem;
height: 6.667rem;
padding: 0.833rem;
margin-bottom: 6.75rem;
box-sizing:border-box;
border-radius: 10px;
border: 1px solid #B7B7B7;
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
}`;
const LabelBox = styled.label``;
const LableText = styled.p`
color: ${({ theme }) => theme.color.textDeepGray};
${({ theme }) => theme.fontSize.middleRegular};
`;


// 비밀번호 보이게 안보이게
const PasswordWrap= styled.div`
display: flex;
position:relative;
`;
const Btnwrap = styled.div`
display: flex;
`;
const VisibleBtn = styled.button`
background: url('/assets/images/icons/visible.png') no-repeat;
width: 2.5rem;
heght: 1.833rem;
margin-right: 1.083rem;
`;
const InvisibleBtn = styled.button`
background: url('/assets/images/icons/invisible.png') no-repeat;
width: 2.5rem;
heght: 1.833rem;
margin-top: -0.167rem;
`;


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
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const LimitError = styled.p`
font: ${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const Img = styled.img`
`;

const ModifyBtn = styled.button`
width: 35rem;
height: 5.833rem;
${({ theme }) => theme.fontSize.h2};
color:${({ theme }) => theme.color.textWhite};
background-color:${({ theme }) => theme.color.primaryOrange}; 
border-radius: 20px;`;