import styled from "styled-components"
import { useState } from "react";
import Header from "../../Component/layout/component/header";
import Footer from "../../Component/layout/component/Footer"

export default function FindPasswordPage (){
    const [email, setEmail] = useState('')
    const [mailError, setMailError] = useState(false)
    const handleInput = (e) =>{
        setEmail(e.target.value)
    }
    return(
        <Container>
            <Header />
            <FindWrap>
                <FindTit>비밀번호를 잊어버렸나요?</FindTit>
                <FindMsg>가입하신 이메일 주소로 비밀번호 재설정 메일을 보내드려요</FindMsg>
                <InputBox>
                    <LabelBox htmlFor="email">
                    {email ? <ActiveLableText>이메일</ActiveLableText> : <LableText>이메일</LableText>} 
                    </LabelBox>
                    <Input 
                      autoComplete="off"
                      id="email"
                      type="text"
                      maxLength={40}
                      onChange={handleInput}
                    ></Input>
                    <SubTextBox>
                        {mailError ? <Message>가입하지 않은 이메일이에요.</Message> : null}
                    </SubTextBox>
                </InputBox>
                    <FindBtn>메일 요청하기</FindBtn>
            </FindWrap>
            <Footer/>
        </Container>
    )
}

const Container = styled.section``;
const FindWrap = styled.div`
display: flex;
flex-direction:column;
align-items:center;
justify-content: center;
margin: 6.667rem 0;
`;
const FindTit = styled.h2`
${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textDeepGray};
margin-bottom: 3.75rem;
`;
const FindMsg = styled.p`
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textGray};
margin-bottom: 2.5rem;
`;
const InputBox = styled.div`
width: 35em;
height: 6.667rem;
padding: 0.833rem;
margin-bottom: 6.75rem;
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
&:focus {
  border-color:${({ theme }) => theme.color.primaryOrange};
}
`;
const ActiveLableText = styled.p`
color: ${({ theme }) => theme.color.primaryOrange};
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

const FindBtn = styled.button`
width: 35rem;
height: 5.833rem;
${({ theme }) => theme.fontSize.h2};
color:${({ theme }) => theme.color.textWhite};
background-color:${({ theme }) => theme.color.primaryOrange}; 
border-radius: 20px;
`;