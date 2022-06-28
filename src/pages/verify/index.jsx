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
                <VerifyDes>
                    <VerifyDesList>
                        <VerifyDesTit>이메일을 인증하면</VerifyDesTit>
                        <VerifyDesTxt>비밀번호를 잊어버렸을 때 찾을 수 있어요.</VerifyDesTxt>
                        <VerifyDesTxt>결제 내역이 있는 경우 전송해드려요.</VerifyDesTxt>
                        <VerifyDesTxt>계정을 분실했을 때 찾을 수 있어요.</VerifyDesTxt>
                    </VerifyDesList>
                </VerifyDes>
                <MailBtn>인증메일 재발송</MailBtn>
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
margin: 6.667rem 0;
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
margin-bottom: 1.625rem;
`;
const VerifyDes = styled.div`
width: 35rem;
height: 18.667rem;
padding: 2.833rem 2.167rem;
margin-bottom: 4.167rem;
background-color: ${({ theme }) => theme.color.Select};
border-radius: 10px;
`;
const VerifyDesList = styled.ul`
display: flex;
flex-direction: column;
justify-content:center;

`;
const VerifyDesTit = styled.h4`
display: flex;
gap: 1rem;
margin-bottom: 2rem;
${({ theme }) => theme.fontSize.h4};
color: ${({ theme }) => theme.color.textDeepGray};
&::before{
    content:'';
    display: block;
    background: url('assets/images/icons/verify.png');
    width: 1.5rem;
    height:  1.5rem;
}
`;
const VerifyDesTxt = styled.li`
display: flex;
align-items:center;
gap: 0.75rem;
margin-bottom: 1rem;
${({ theme }) => theme.fontSize. bigRegular};
color: ${({ theme }) => theme.color.textGray};
&::before{
    content:'';
    display: block;
    background: url('assets/images/icons/orangeCheck.svg');
    width: 1.167rem;
    height:  0.833rem;
}
`;
const MailBtn = styled.button`
    ${({ theme }) => theme.fontSize. h2};
    color: ${({ theme }) => theme.color.primaryOrange};
    width:35rem;
    height: 5.833rem;
    border: 1px solid #ED6F1E;
    border-radius: 20px;
`;