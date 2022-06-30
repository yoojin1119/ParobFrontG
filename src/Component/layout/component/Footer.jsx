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
                    <Link href="/policy/terms">
                        <P>이용약관</P>
                    </Link>
                    <Link href="/policy/privacy">
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
                <GoogleTrans>
                    <div id="google_translate_element"></div>
                </GoogleTrans>
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

const GoogleTrans = styled.div`
    align-self:start;
 .goog-te-gadget-simple {
    position:relative;
    width: 10.833rem;
    height: 2.5rem;
    display: flex;
    align-items:center;
    padding-left:1.667rem;
    border-radius: 13px;
    border: 1px solid #7B7B7B;
    @media all and (max-width: 460px) {
        width: 71px;
        height: 17px;
    }
 }
 .goog-te-gadget img {
    display:none;
 }
 .goog-te-gadget-simple .goog-te-menu-value span:first-child {
    ${({ theme }) => theme.fontSize.smallRegular};
    margin-right:28px;
    border: none;
    @media all and (max-width: 460px) {
        ${({ theme }) => theme.fontSize.Message};
        margin-left: -10px;

    }
 }
 .goog-te-gadget-simple .goog-te-menu-value span:nth-child(3){
    border:none !important
 }
 .goog-te-gadget-simple .goog-te-menu-value span:last-child {
    position:absolute;
    top: 0.6rem;
    right:12px;
    width: 12px;
    height: 12px;
    @media all and (max-width: 460px) {
        right: 9px;
        top: 0;
        width: 8px;
        height: 8px;
    }
 }
`;