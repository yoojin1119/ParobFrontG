import styled from "styled-components";
import Header from "../Component/layout/header";
import Footer from "../Component/layout/Footer";

export default function MainPage (){
 return(
    <Container>
        <Header/>
        <Title>세상에 단 하나뿐인 나만의 로봇을 만들어보세요!</Title>
        <StartBtn>지금 만들러 가기</StartBtn>
        <DeskImg src='/assets/images/backGround/desk.png'></DeskImg>
        <Footer/>
    </Container>
 )
}

const Container = styled.section`
background: url('/assets/images/backGround/mainBack.svg');
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 100vw;
`;
const DeskImg = styled.img`
width: 80rem;
`;
const Title = styled.h1`
font: ${({ theme }) => theme.fontSize.h1};
margin-top: 3.333rem;
`;
const StartBtn = styled.button`
width: 17.5rem;
height: 4.167rem;
margin-top:2rem;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 20px;
font: ${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textWhite}`;