import styled from "styled-components"
import Header from "../../Component/layout/component/header";
import Footer from "../../Component/layout/component/Footer"
import Link from "next/link";

export default function FailurePage (){
    return(
        <Container>
            <Header/>
            <FailureWrap>
                <FailureImg src='/assets/images/error/email_fail.png'></FailureImg>
                <FailureTit>이메일 인증에 실패했어요</FailureTit>
                <MsgWrap>
                    <Msg>요청 후 24시간이 지났거나, 시도 중 오류가 발생했어요.</Msg>
                    <Msg>가입을 다시 진행해주세요.</Msg>
                </MsgWrap>
                <Link href='/signup'>
                    <FailureBtn>회원가입</FailureBtn>
                </Link>
            </FailureWrap>
            <Footer/>
        </Container>
    )
}
const Container = styled.section``;
const FailureWrap = styled.div`
display: flex;
flex-direction:column;
align-items:center;
gap: 3.917rem;
margin: 5rem 0 6.667rem;
`;
const FailureImg = styled.img`
width: 8.833rem;
height: 5.917rem; 
`;
const FailureTit = styled.h2`
${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textDeepGray};
`;

const MsgWrap = styled.div`
width: 35rem;
height:12.583rem;
display: flex;
flex-direction:column;
align-items:center; 
padding:3.833rem 0;
background-color: ${({ theme }) => theme.color.Select};
border-radius: 10px;
`;
const Msg = styled.p`
${({ theme }) => theme.fontSize.bigBold};
color: ${({ theme }) => theme.color.textGray};
`;
const FailureBtn = styled.button`
width: 35rem;
height: 5.833rem;
${({ theme }) => theme.fontSize.h2};
color:${({ theme }) => theme.color.textWhite};
background-color:${({ theme }) => theme.color.primaryOrange}; 
border-radius: 20px;
`;