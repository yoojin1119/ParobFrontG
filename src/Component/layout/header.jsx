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
hieght: 6.563rem;
margin-top: 1.875rem;
background-color: transparent;
width: 100vw;
`;
const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 0 20rem;
`;
const Logo = styled.button``;
const LogoImg = styled.img`
width: 10.125rem;
height: 3rem;
`;
const MenuWrap = styled.ul`
display: flex;
gap: 5.625rem;
`;
const Menu = styled.li`
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textDeepGray};
cursor: pointer;
`;
const UserInfo = styled.div`
display: flex;
align-items:center;
gap: 2.5rem;
`;

const Login = styled.a`
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textGray};`;
const Join = styled.a`
width: 9.188rem;
height:3.125rem;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 14.3px;
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textWhite};
text-align:center;
padding-top: 1rem;
cursor: pointer;
`;

const MenuBtn = styled.button`
background:url('/assets/images/icons/menuBar.png') no-repeat;
width: 2.563rem;
height: 2.188rem;
display: none;
`;