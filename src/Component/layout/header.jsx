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
hieght: 7.5rem;
padding-top: 2.5rem;
background-color: transparent;
box-size:border-box;
width: 100vw;
display: flrex;
justify-content:center;
`;
const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80rem;
`;
const Logo = styled.button``;
const LogoImg = styled.img`
width: 10rem;
height: 2.917rem;
`;
const MenuWrap = styled.ul`
display: flex;
gap: 7.5rem;
`;
const Menu = styled.li`
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textDeepGray};
cursor: pointer;
`;
const UserInfo = styled.div`
display: flex;
align-items:center;
gap: 3.333rem;
`;

const Login = styled.a`
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textGray};`;
const Join = styled.a`
width: 8.333rem;
height:3.167rem;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 14.3px;
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textWhite};
text-align:center;
padding-top: 1.333em;
cursor: pointer;
`;

const MenuBtn = styled.button`
background:url('/assets/images/icons/menuBar.png') no-repeat;
width: 3.417rem;
height: 2.917rem;
display: none;
`;