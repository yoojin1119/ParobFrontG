import styled from "@emotion/styled";
import Link from "next/link";
import Sns from "../../Component/Sns";

export default function JoinPage (){
    return(<Container>
        <Title>
            회원 가입 하고 나만의 로봇을
            <br/> 
            직접 만들어요!
        </Title>
        <Sns/>
        <SignUp>
            <JoinTitle>이메일 회원가입</JoinTitle>
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
                  type="text"
                ></Input>
                <SubTextBox>
                    <Message></Message>
                </SubTextBox>
            </InputBox>
            <InputBox>
                <LabelBox htmlFor="nickname">
                    <LableText>별명</LableText>
                </LabelBox>
                <Input 
                  autoComplete="off"
                  id="nickname"
                  type="text"
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
        <SignUpButton>가입하기</SignUpButton>
        <LoginBox>
                <LoginText>
                  이미 회원인가요?
                </LoginText>
                <Link href="#">
                  <p>로그인</p>
                </Link>
        </LoginBox>
    </Container>)
}
const Container = styled.section`
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;
`;
const Title = styled.h2`
text-align:center;
`;

// 회원 가입 틀
const SignUp = styled.section`
`;
const JoinTitle = styled.h3``;
const InputBox = styled.div`
border: 1px solid #000;`;
const LabelBox = styled.label``;
const LableText = styled.p``;
const Input = styled.input`
border:none`;
const SubTextBox=styled.div``;
const Message = styled.p``;
const Select = styled.select``;
const PolicyDesc = styled.p``;

// 가입하기 버튼
const SignUpButton = styled.button``;

// 로그인 
const LoginBox = styled.div``;
const LoginText = styled.p``;
