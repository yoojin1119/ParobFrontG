import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

const Header = () => {
    const [menu, setMenu] = useState(false)
    const openMenu = () =>{
        setMenu(!menu)
    }
    return(
        <Container>
            <HeaderWrap>
                <Logo>
                    <LogoImg src="/assets/images/logos/smallLogo.png"></LogoImg>
                </Logo>
                <MenuWrap>
                    <Menu>만들기</Menu>
                    <Menu>내 갤러리</Menu>
                    <Menu>공지사항</Menu>
                </MenuWrap>
                <UserInfo>
                    <Link href='/login'>
                        <Login>로그인</Login>
                    </Link>
                    <Link href='/join'>
                    <Join>회원가입</Join>
                    </Link>
                </UserInfo>
                <MenuBtn onClick={openMenu}></MenuBtn>
            </HeaderWrap>
        </Container>
    )
}

export default Header;

const Container = styled.section`
hieght: 105px;
margin-top: 30px;
background-color: transparent;
`;
const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 320px;
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : landscape) {
    margin: 0 20px;
}
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : portrait) {
    margin: 0 20px;
}
@media all and (max-width : 528px){
    margin: 0 10px;
}
`;
const Logo = styled.button``;
const LogoImg = styled.img`
width: 162px;
height: 48px;
@media all and (min-width : 540px) and (max-width : 960px) and (orientation : landscape) {
    width: 120px;
    height: 35px;
};
@media all and (max-width : 528px){
    width: 110px;
    height: 30px;
}
`;
const MenuWrap = styled.ul`
display: flex;
gap: 90px;
@media all and (min-width : 540px) and (max-device-width : 960px) and (orientation : portrait) {
    display: none;
}
@media all and (min-device-width : 540px) and (max-device-width : 960px) and (orientation : landscape) {
    gap: 50px;
}
@media all and (max-width : 528px){
    display: none;
}
`;
const Menu = styled.li`
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textDeepGray};
cursor: pointer;
`;
const UserInfo = styled.div`
display: flex;
align-items:center;
gap: 40px;
@media all and (min-width : 540px) and (max-device-width : 960px) and (orientation : portrait) {
    display: none;
}
@media all and (max-width : 528px){
    display: none;
}`;

const Login = styled.a`
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textGray};`;
const Join = styled.a`
width:147px;
height:50px;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 14.3px;
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textWhite};
text-align:center;
padding-top: 16px;
cursor: pointer;
@media all screen and (min-device-width : 540px) and (max-device-width : 960px) and (orientation : landscape){
    width: 100px;
    height: 38px;
    padding-top: 10px;
}
`;

const MenuBtn = styled.button`
background:url('/assets/images/icons/menuBar.png') no-repeat;
width: 41px;
height: 35px;
display: none;
@media all and (min-width : 540px) and (max-device-width : 960px) and (orientation : portrait){
    display: block;
}
@media all and (max-width : 528px){
    display: block;
    width: 31px;
    height: 35px;
}`;