import styled from "styled-components";
import Header from "../../Component/layout/header";
import Footer from "../../Component/layout/Footer";

export default function VerifiyPage (){
    const email = 'yurina@gmail.com'
    return(
        <Container>
            <Header />
            <VerifyWrap>
                <Title>
                    <TitleImg src='/assets/images/icons/mail.png'></TitleImg>
                    <TitleTxt>이메일을 인증해주세요</TitleTxt>
                </Title>
                <VerifyTxtWrap>
                    <VerifyTxt>아래 주소로 인증 메일이 전송되었어요.</VerifyTxt>
                    <VerifyTxt>메일을 열어서 확인 버튼을 클릭해주세요.</VerifyTxt>
                </VerifyTxtWrap>
                <Email>{email}</Email>
            </VerifyWrap>
            <Footer />
        </Container>
    )
}
const Container = styled.section``;
const VerifyWrap = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
`;
const Title = styled.div`
display: flex;
align-items:center;
justify-content: center;
gap:1.25rem;
margin-bottom: 1.938rem;
`;
const TitleImg = styled.img`
width: 3.063rem;
height: 2.063rem`;
const TitleTxt = styled.h2`
${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textDeepGray};
`;
const VerifyTxtWrap = styled.div`
margin-bottom: 2rem;`;
const VerifyTxt = styled.h3`
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textGray};
text-align: center;
`;
const Email = styled.p`
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.primaryBlue};
`;