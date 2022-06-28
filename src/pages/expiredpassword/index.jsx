import styled from "styled-components"
import Header from "../../Component/layout/header";
import Footer from "../../Component/layout/Footer"

export default function ExpiredPasswordPage (){
    return(
        <Container>
            <Header/>
            <ExpiredWrap>
                <ExpiredImg src='assets/images/error/password_fail.png'></ExpiredImg>
                <ExpiredTit>비밀번호 재설정 링크가 만료되었어요 </ExpiredTit>
                <ExpiredCard>
                    <ExpiredMsg>요청 후 24시간이 지났거나, 시도 중 오류가 발생했어요</ExpiredMsg>
                    <ExpiredMsg>재설정 링크를 다시 요청해주세요.</ExpiredMsg>
                </ExpiredCard>
                <ExpiredBtn>다시 요청하기</ExpiredBtn>
            </ExpiredWrap>
            <Footer/>
        </Container>
    )
}
const Container = styled.section``;
const ExpiredWrap = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin: 6.667rem 0;
`;
const ExpiredImg = styled.img`
width: 7.25rem;
height:5.917rem;
margin-bottom: 2.667rem;
`;
const ExpiredTit =styled.h2`
margin-bottom: 3rem;
${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textDeepGray};
`;
const ExpiredCard = styled.div`
width: 35rem;
height:12.583rem; 
border-radius: 10px;
padding: 3.833rem 0;
margin-bottom: 4.167rem;
text-align: center;
background-color: ${({ theme }) => theme.color.Select};
`;
const ExpiredMsg = styled.p`
${({ theme }) => theme.fontSize.bigBold};
color: ${({ theme }) => theme.color.textGray};
`;
const ExpiredBtn = styled.button`
width: 35rem;
height: 5.833rem;
${({ theme }) => theme.fontSize.h2};
color:${({ theme }) => theme.color.textWhite};
background-color:${({ theme }) => theme.color.primaryOrange}; 
border-radius: 20px;
`;