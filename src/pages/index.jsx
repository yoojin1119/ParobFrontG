import styled from "styled-components";
import Header from "../Component/layout/header";
import Footer from "../Component/layout/Footer";
import useWindowSize from '../utils/common/useWindowSize'
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
width: 100vw;
display: flex;
flex-direction:column;
justify-content:center;
align-items:center;
background: url('/assets/images/backGround/mainBack.svg');
@media all and (max-width: 540px) {
    background: url('/assets/images/backGround/miniBack.png');
    width: 100%;
}`;
const DeskImg = styled.img`
width: 80rem;
height: 29.375rem;
`;
const MiniDesk = styled.img`
width:45rem;
height: 53.333rem;
`;
const Title = styled.h1`
${({ theme }) => theme.fontSize.h2};
margin-top: 2.5rem;
text-align: center;
@media all and (max-width: 540px) {
    width: 26.833rem;
}
`;
const StartBtn = styled.button`
width: 17.5rem;
height: 4.167rem;
margin-top:2rem;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 20px;
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textWhite};
`;