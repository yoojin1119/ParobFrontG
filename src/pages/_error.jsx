import styled from "styled-components";
import Link from "next/link";
import Header from "../Component/layout/header";
import Footer from "../Component/layout/Footer";

export default function ErrorPage (){
    return(
        <Container>
            <Header/>
            <ErrorWrap>
                <ErrorImg src='assets/images/error/500Tablet.png'></ErrorImg>
                <ErrorMsg>잠시 후 다시 이용해주세요</ErrorMsg>
                <SmallMsg>
                    일시적인 문제로 서비스에 접속할 수 없어요.
                    오류가 계속된다면 고객센터로 문의해주세요.
                </SmallMsg>
                <Link href='/'>
                <ErrorBtn>메인으로 이동</ErrorBtn>
                </Link>
            </ErrorWrap>
            <Footer/>
        </Container>
    )
}
const Container = styled.section``;
const ErrorWrap = styled.div`
display: flex;
flex-direction:column;
align-items:center;
margin: 6.5rem 0;
gap:2rem`;
const ErrorImg = styled.img``;
const ErrorMsg = styled.h3`
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.primaryBlue};
`;
const SmallMsg = styled.p`
width: 29.667rem;
text-align:center;
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const ErrorBtn = styled.button`
width: 27.917rem;
height: 5.833rem;
margin-top: 3.333rem;
border: 1px solid #ED6F1E;
color: ${({ theme }) => theme.color.primaryOrange};
${({ theme }) => theme.fontSize.h3};
border-radius: 20px;
`;