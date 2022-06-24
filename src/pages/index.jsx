import styled from "styled-components";
import Header from "../Component/layout/header";
import Footer from "../Component/layout/Footer";
import useWindowSize from "../utils/useWindowSize";
export default function MainPage (){
    const width = useWindowSize()
 return(
    <Container>
        <Header/>
        <Title>세상에 단 하나뿐인 나만의 로봇을 만들어보세요!</Title>
        <StartBtn>지금 만들러 가기</StartBtn>
        {width < 960 ? <MiniDesk src='/assets/images/backGround/miniDesk.png'></MiniDesk> : <DeskImg src='/assets/images/backGround/desk.png'></DeskImg> }
        <Footer/>
    </Container>
 )
}

const Container = styled.section`
position: relative;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
width: 100%;
background: url('/assets/images/backGround/mainBack.svg');
@media all and (max-width: 540px) {
    background: url('/assets/images/backGround/miniBack.png');
}
`;
const DeskImg = styled.img`
width: 80rem;
height: 39.167rem;
`;
const MiniDesk = styled.img`
width:45rem;
height: 53.333rem;
`;
const Title = styled.h1`
position: absolute;
top: 7.333rem;
${({ theme }) => theme.fontSize.h2};
margin-top: 3.333rem;
text-align: center;
@media all and (max-width: 540px) {
    position:static;
    width: 26.833rem;
}
`;
const StartBtn = styled.button`
position: absolute;
top: 14.667rem;
width: 17.5rem;
height: 4.167rem;
margin-top:2rem;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 20px;
font: ${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textWhite};
@media all and (max-width: 540px) {
    position:static;
}
`;