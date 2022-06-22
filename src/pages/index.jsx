import styled from "styled-components";
import Header from "../Component/layout/header";
import Footer from "../Component/layout/Footer";
import { useEffect,useState } from "react";
export default function MainPage (){
    const [width, setWidth] = useState(0)
    useEffect (()=>{
        setWidth(window.innerWidth)
    })
    console.log(width)
 return(
    <Container>
        <Header/>
        <Title>세상에 단 하나뿐인 나만의 로봇을 만들어보세요!</Title>
        <StartBtn>지금 만들러 가기</StartBtn>
        {width > 540 ? <DeskImg src='/assets/images/backGround/desk.png'></DeskImg> : <MiniDeskImg src='/assets/images/backGround/miniDesk.png'></MiniDeskImg>} 
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
height:27.833rem;
`;
const MiniDeskImg = styled.img`
width: 45rem;
`;
const Title = styled.h1`
font: ${({ theme }) => theme.fontSize.h2};
margin-top: 3.333rem;
text-align: center;
@media all and (max-width: 540px) {
    width: 26.833rem;
}
`;
const StartBtn = styled.button`
width: 17.5rem;
height: 4.167rem;
margin:2rem 0 2.167rem;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 20px;
font: ${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textWhite}
`;