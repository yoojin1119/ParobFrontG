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
                    <Link href="#">
                        <P>고객 센터</P>
                    </Link>
                    <Link href="#">
                        <P>이용약관</P>
                    </Link>
                    <Link href="#">
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
padding: 40px 0 53px;
box-sizing: border-box;
background-color:${({ theme }) => theme.color.backGray};
@media all and (max-width : 528px){
    padding: 40px 0;
}
`;

const FooterWrap = styled.div`
display: flex;
flex-direction:column;
margin: 0 320px;
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : landscape)  {
    margin: 0 20px;
};
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : portrait) {
    margin: 0 20px;
}
@media all and (max-width : 528px){
    margin: 0 10px;
}
`;
const Contact = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
padding-bottom: 23px;
border-bottom: 1px solid #D3D3D3;
@media all and (max-width : 528px){ 
    flex-direction: column;
}
`;
const SnsContact = styled.ul`
display: flex;
gap: 30px;
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : portrait) {
    gap: 10px;
}
@media all and (max-width : 528px){
    gap: 2px;
}
`;
const Sns = styled.button``;
const SnsImg = styled.img``;
const PolicyDes = styled.ul`
display: flex;
align-items:center;
gap: 50px;
${({ theme }) => theme.fontSize.smallRegular};
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : portrait) {
    gap: 20px;
}
@media all and (max-width : 528px){
    gap: 20px;
}
`;
const P = styled.p`
color: ${({ theme }) => theme.color.textGray};`;
const Info = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
margin-top: 23px;
`;
const CompanyInfo = styled.div``;
const Logo = styled.img`
margin-bottom:16px
`;
const CompanyDes = styled.p`
${({ theme }) => theme.fontSize.smallRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const LanSelect = styled.div`
align-self: start;
position: relative;
width: 130px;
height: 30px;
border-radius: 13px;
background-color: #ffffff;
`;
const SelectTxt = styled.p`
position: absolute;
top: 6px;
left: 20px;
${({ theme }) => theme.fontSize.smallRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const SelectBtn = styled.button`
position: absolute;
top: 9px;
right: 14px;
width:12px;
height: 12px;
background: url('/assets/images/icons/smallPolygon.png') no-repeat;
@media all and (max-width : 528px){
    left: 6px;
    top: 11px;
}`;