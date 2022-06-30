import styled from "styled-components";
import Link from "next/link";
import Header from "../Component/layout/component/header";
import Footer from "../Component/layout/component/Footer";

export default function ErrorPage (){
    return(
        <Container>
            <Header/>
            <ErrorWrap>
                <ErrorImg src='assets/images/error/404Tablet.png'></ErrorImg>
                <ErrorMsg>요청하신 페이지를 찾을 수 없어요</ErrorMsg>
                <SmallMsg>
                    페이지가 삭제되었거나 다른 페이지로 변경되었어요.
                    잘못된 주소를 입력했다면, URL을 확인 후 정확히 입력해주세요.
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