import styled from "styled-components"
import Header from "../../Component/layout/header";
import Footer from "../../Component/layout/Footer"
import Link from "next/link";

export default function JoinCompletePage (){
    return(
        <Container>
            <Header/>
            <CompleteWrap>
                <CompleteTit>가입이 완료되었어요!</CompleteTit>
                <CompleteMsg>원하는 로봇을 지금 만들어보세요!</CompleteMsg>
                <CompleteImg src='assets/images/backGround/email_finish.png'></CompleteImg>
                <Link href='/login'>
                    <CompleteBtn>로그인</CompleteBtn>
                </Link>
            </CompleteWrap>
            <Footer/>
        </Container>
    )
}

const Container = styled.section``;
const CompleteWrap = styled.div`
display: flex;
flex-direction:column;
align-items:center;
gap: 3.917rem;
margin: 5rem 0 6.667rem;
`;
const CompleteTit = styled.h2`
${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textDeepGray};
`;
const CompleteMsg = styled.p`
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textGray};
`;
const CompleteImg = styled.img`
width: 32.25rem;
height:30.833rem;`;
const CompleteBtn = styled.button`
width: 35rem;
height: 5.833rem;
${({ theme }) => theme.fontSize.h2};
color:${({ theme }) => theme.color.textWhite};
background-color:${({ theme }) => theme.color.primaryOrange}; 
border-radius: 20px;`;