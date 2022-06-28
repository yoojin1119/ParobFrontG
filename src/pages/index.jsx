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
            {width > 1280 ? <BigDesk src='/assets/images/backGround/bigDesk.png'></BigDesk> : width > 540 ?  <DeskImg src='/assets/images/backGround/desk.png'></DeskImg>: <MiniDesk src='/assets/images/backGround/miniDesk.png'></MiniDesk> }
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
}`;
const DeskImg = styled.img`
width: 80rem;
height: 29.375rem;
@media all and (min-width: 540px) and (max-width: 959px) {
    width: 45rem;
}
`;
const BigDesk = styled.img`
width: 80rem;
`;
const MiniDesk = styled.img`
width: 45rem;
height: 54.333rem;

`;
const Title = styled.h1`
${({ theme }) => theme.fontSize.h2};
margin-top: 2.5rem;
text-align: center;
display: flex;
align-items:center;
@media all and (max-width: 540px) {
    width:26.833rem;
}
@media all and (min-width: 540px) and (max-width: 959px) {
    width:26.833rem;
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