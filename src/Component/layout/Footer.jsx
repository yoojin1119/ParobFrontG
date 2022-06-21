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
padding: 2.5rem 0 3.313rem;
box-sizing: border-box;
background-color:${({ theme }) => theme.color.backGray};
@media all and (max-width : 528px){
    padding: 25px 0;
}`;

const FooterWrap = styled.div`
display: flex;
flex-direction:column;
margin: 0 20rem;
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : landscape)  {
    margin: 0 1.25rem;
};
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : portrait) {
    margin: 0 1.25rem;
}
@media all and (max-width : 528px){
    margin: 0 1.25rem;
}
`;
const Contact = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
padding-bottom: 1.438rem;
border-bottom: 1px solid #D3D3D3;
@media all and (max-width : 528px){ 
    flex-direction: column;
    align-items: start;
    gap: 1rem;
}
`;
const SnsContact = styled.ul`
display: flex;
gap: 1.875rem;
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : portrait) {
    gap: 0.625rem;
}
@media all and (max-width : 528px){
    gap: 0.625rem;
}
`;
const Sns = styled.button``;
const SnsImg = styled.img``;
const PolicyDes = styled.ul`
display: flex;
align-items:center;
gap: 3.125rem;  
${({ theme }) => theme.fontSize.smallRegular};
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : portrait) {
    gap: 1.25rem;
}
@media all and (max-width : 528px){
    gap: 0.625rem;
}
`;
const P = styled.p`
color: ${({ theme }) => theme.color.textGray};`;
const Info = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
margin-top: 1.438rem;
@media all and (max-width : 528px){
    position:relative;
}
`;
const CompanyInfo = styled.div``;
const Logo = styled.img`
margin-bottom:1rem;
`;
const CompanyDes = styled.p`
${({ theme }) => theme.fontSize.smallRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const LanSelect = styled.div`
align-self: start;
position: relative;
width: 8.125rem;
height: 1.875rem;
border-radius: 0.813rem;
background-color: #ffffff;
`;
const SelectTxt = styled.p`
position: absolute;
top: 0.375rem;
left: 1.25rem;
${({ theme }) => theme.fontSize.smallRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const SelectBtn = styled.button`
position: absolute;
top: 0.563rem;
right: 0.875rem;
width:0.75rem;
height: 0.75rem;
background: url('/assets/images/icons/smallPolygon.png') no-repeat;
`;