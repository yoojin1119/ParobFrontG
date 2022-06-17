import styled from "styled-components";
import Link from "next/link";

const Header = () => {
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
padding:0 320px;
width: 100vw;
display: flex;
align-items: center;
justify-content: space-between;
`;
const Logo = styled.button``;
const LogoImg = styled.img`
width: 162px;
height: 48px;
`;
const MenuWrap = styled.ul`
display: flex;
gap: 90px;
`;
const Menu = styled.li`
font: ${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textDeepGray};
cursor: pointer;
`;
const UserInfo = styled.div`
display: flex;
align-items:center;
gap: 40px;`;
const Login = styled.a`
font: ${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textGray};`;
const Join = styled.a`
width:147px;
height:50px;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 14.3px;
font: ${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textWhite};
text-align:center;
padding-top: 16px;
cursor: pointer;
`;