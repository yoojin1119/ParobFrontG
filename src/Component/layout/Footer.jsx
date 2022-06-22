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
padding: 3.333rem 0;
box-sizing: border-box;
background-color:${({ theme }) => theme.color.backGray};
`;
const FooterWrap = styled.div`
display: flex;
flex-direction:column;
`;
const Contact = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
padding-bottom: 1.667rem
border-bottom: 1px solid #D3D3D3;
`;
const SnsContact = styled.ul`
display: flex;
`;
const Sns = styled.button``;
const SnsImg = styled.img``;
const PolicyDes = styled.ul`
display: flex;
align-items:center;
`;
const P = styled.p`
color: ${({ theme }) => theme.color.textGray};`;
const Info = styled.div`
display: flex;
align-items:center;
justify-content: space-between;
margin-top: 1.667rem;
@media all and (max-width : 528px){
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
`;
const SelectTxt = styled.p`
position: absolute;
top: 0.5rem;
left: 1.667rem;
${({ theme }) => theme.fontSize.smallRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const SelectBtn = styled.button`
position: absolute;
top: 0.75rem;
right: 0.75rem;
width:1rem;
height: 1rem;
background: url('/assets/images/icons/smallPolygon.png') no-repeat;
`;
