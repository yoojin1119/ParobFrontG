import styled from "styled-components";
import Sns from "../../Component/Sns";
import Button from "../../Component/Button";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../Component/layout/component/header";
import Footer from "../../Component/layout/component/Footer";
import helper from '../../utils/common/helper'


// apiss
import { postLoginApi } from "../apis/loginApi";

export default function LoginPage (){
    const router = useRouter();
    const dispatch = useDispatch();
    const [email, setEmail]= useState('')
    const [password,setPassword] = useState('')
    const [loginFail, setLoginFail] = useState(false)
    const [isLoginSaved, setIsLoginSaved] = useState(true)
    const handleLoginSave = () => {
        setIsLoginSaved(!isLoginSaved)
    }
    const handleInput = (e) =>{
        if(e.target.id === 'email') {
            setEmail(e.target.value)
        }
        if(e.target.id === 'password') {
            setPassword(e.target.value)
        }
    }
    const handleLogin = (e) => {
        e.preventDefault();
        postLoginApi(email, password)
        .then((res) => {
            if(res?.data?.accessToken) {
                if(isLoginSaved === true) {
                    helper.setAuthenticateToken(res?.data?.accessToken)
                } else if (isLoginSaved === false) {
                    helper.setSessionAuthenticateToken(res?.data?.accessToken);
                }
                dispatch({
                    type:'AUTH_TOKEN',
                    data: res?.data?.accessToken,
                }),
                dispatch({
                    type: 'LOGIN_STATUS',
                    data: true,
                });
                router.replace('/');
            } else {
                setLoginFail(true)
            }
        })
        .catch((err) => {
            setLoginFail(true)
            console.log(err)
        })
    }
return(
    <Container>
        <LoginWrap>
        <Header/>
        <Title>?????????</Title>
        <Sns/>
        <Looin>
            <LoginTitle>????????? ?????????</LoginTitle>
            <InputForm onSubmit={handleLogin}>
                <InputBox>
                    <LabelBox htmlFor="email">
                        {email ? <ActiveLableText>?????????</ActiveLableText> : <LableText>?????????</LableText>} 
                    </LabelBox>
                    <Input 
                      placeholder="example@email.com"
                      autoComplete="off"
                      id="email"
                      type="text"
                      maxLength={40}
                      onChange={handleInput}
                    ></Input>
                    <SubTextBox>
                        <Message></Message>
                    </SubTextBox>
                </InputBox>
                <InputBox>
                    <LabelBox htmlFor="password">
                    {password ? <ActiveLableText>????????????</ActiveLableText> : <LableText>????????????</LableText>} 
                    </LabelBox>
                    <Input 
                      autoComplete="off"
                      id="password"
                      type= 'password'
                      visible='false'
                      maxLength={16}
                      onChange={handleInput}
                    ></Input>
                    <SubTextBox>
                        {loginFail ? <Message>???????????? ?????? ??????????????????, ??????????????? ????????????  ?????????.</Message> :null}
                    </SubTextBox>
                </InputBox>

            <LoginCheckWrap>
                <LoginCheckBox onClick={handleLoginSave}>
                    {isLoginSaved ? <LoginBtnImg props={'save'} src='./assets/images/icons/orangeCheck.png'></LoginBtnImg> : <LoginBtnImg props={'unsave'} src='./assets/images/icons/unchecked.svg'></LoginBtnImg>}
                    <LoginCheckText>????????? ??????</LoginCheckText>
                </LoginCheckBox>
                <Link href='/login/findpassword'>
                    <FindPassword >???????????? ??????</FindPassword>
                </Link>
            </LoginCheckWrap>
            <Button value='?????????' type="submit"/>
            </InputForm>
            <MoveJoin>
                ?????? ????????? ?????????????
                <Link href="/signup">
                    <LinkP>????????????</LinkP>
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

// ????????? ??????
const Looin = styled.section`
`;
const LoginTitle = styled.p`
margin: 5.083rem 0 3.417rem;
${({ theme }) => theme.fontSize.bigBold};
`;
const InputForm = styled.form`
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

// ????????? ?????? ???, ???????????? ??????
const LoginCheckWrap = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin:30px 0;
`;
const LoginCheckBox = styled.button`
display: flex;
align-items: center;
justify-contenr:space-between;
`;
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
