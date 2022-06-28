import styled from "styled-components";
import Link from "next/link";

const Footer = () => {
    return(
    <Container>
        <FooterWrap>
            <Contact>
                <SnsContact>
                    <Sns>
                        <SnsImg src='/assets/images/logos/sns/facebook-f.png'></SnsImg>
                    </Sns>
                    <Sns>
                        <SnsImg src='/assets/images/logos/sns/instagram.png'></SnsImg>
                    </Sns>
                    <Sns>
                        <SnsImg src='/assets/images/logos/sns/naver.png'></SnsImg>
                    </Sns>
                    <Sns>
                        <SnsImg src='/assets/images/logos/sns/youtube.png'></SnsImg>
                    </Sns>
                </SnsContact>
                <PolicyDes>
                    <Link href="/qna">
                        <P>고객 센터</P>
                    </Link>
                    <Link href="/terms">
                        <P>이용약관</P>
                    </Link>
                    <Link href="/privacy">
                        <P>개인정보처리방침</P>
                    </Link>
                </PolicyDes>
            </Contact>
            <Info>
                <CompanyInfo>
                    <Logo src='/assets/images/logos/bnwLogo.png'></Logo>
                    <CompanyDes>
                        Robotry Inc.<br />
                        CEO Sang-Uk Ahn  |  Address 2F 83-13, Gaeunsa-gil, Seongbuk-gu, Seoul, South Korea <br/>
                        Business License 151-87-01050 |<br/>
                        E-Commerce Permit No 2018-Seoul Seongbuk-0011<br/>
                        Privacy Manager Yu-Ri Na  | Email help@parob.io  |  CS Center +82 70-8800-4351<br/>
                        ©Robotry. All Rights Reserved.<br/>
                    </CompanyDes>
                </CompanyInfo>
                <LanSelect>
                    <SelectTxt>한국어</SelectTxt>
                    <SelectBtn></SelectBtn>
                </LanSelect>
            </Info>
        </FooterWrap>
    </Container>)
}
export default Footer;

const Container = styled.section`
width: 100vw;
display: flex;
justify-content: center;
padding: 3.333rem 0;
background-color:${({ theme }) => theme.color.backGray};
@media all and (max-width: 540px) {
    display: block;
    width: 100%;
}
@media all and (min-width: 540px) and (max-width: 959px) {
    width: 100vw;
}
`;
const FooterWrap = styled.div`
display: flex;
flex-direction:column;
width: 80rem;
padding: 0 1.667rem;
@media all and (max-width: 959px) {
    width: 100vw;
}
`;
const Contact = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
flex-direction: row;
padding-bottom: 1.667rem;
border-bottom: 1px solid #D3D3D3;
@media all and (max-width: 460px) {
   flex-direction: column;
   align-items: start;
`;
const SnsContact = styled.ul`
display: flex;
margin-left: -0.417rem;
`;
const Sns = styled.button``;
const SnsImg = styled.img``;
const PolicyDes = styled.ul`
display: flex;
align-items:center;
gap: 4.167rem;
@media all and (max-width: 460px) {
    gap: 0.625rem;
}
`;
const P = styled.p`
color: ${({ theme }) => theme.color.textGray};
cursor:pointer;
`;
const Info = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
margin-top: 1.667rem;
@media all and (max-width: 460px) {
    position:relative;
}
`;
const CompanyInfo = styled.div``;
const Logo = styled.img`
margin-bottom:1.333rem;
`;
const CompanyDes = styled.p`
${({ theme }) => theme.fontSize.smallRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const LanSelect = styled.div`
align-self: start;
position: relative;
width: 10.833rem;
height: 2.5rem;
border-radius: 0.813rem;
background-color: #ffffff;
@media all and (max-width: 460px) {
    position:absolute;
    top:0;
    right:0;
    width: 71px;
    height: 17px;
}
`;
const SelectTxt = styled.p`
position: absolute;
top: 0.5rem;
left: 1.667rem;
${({ theme }) => theme.fontSize.smallRegular};
color: ${({ theme }) => theme.color.textGray};
@media all and (max-width: 460px) {
    top: 2px;
    left:8px;
    ${({ theme }) => theme.fontSize.Message};
`;
const SelectBtn = styled.button`
position: absolute;
top: 0.75rem;
right: 0.75rem;
width:1rem;
height: 1rem;
background: url('/assets/images/icons/smallPolygon.png') no-repeat;
@media all and (max-width: 460px) {
    width: 8px;
    height: 8px;
    top: 4px;
    right: 4px;
`;
