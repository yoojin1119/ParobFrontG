import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";
import MenuBar from "../menu/MenuBar";
import Modal from "../modal/Modal";

const Header = () => {
    const [menu, setMenu] = useState(false);
    const [notice, setNotice] = useState(false);
    const [making, setMaking] = useState(false)
    const openMenu = () =>{
        setMenu(!menu)
    }
    const noticeModal = () => {
        setNotice(!notice)
    }
    const getData = () => {
        setNotice(false)
        setMaking(false)
    }
    const makingModal = () =>{
        setMaking(!making)
    }
    return(
        <Container>
            <HeaderWrap>
                <Link href='/'>
                    <Logo>
                        <LogoImg src="/assets/images/logos/smallLogo.svg"></LogoImg>
                    </Logo>
                </Link>
                <MenuWrap>
                    <Menu onClick={makingModal} >만들기</Menu>
                    {making ? <Modal getData={getData} value='만들기 최대 개수를 초과했어요' msg='이전에 만든 로봇을 삭제 또는 수정만 가능해요.'/> : null}
                    <Menu>내 갤러리</Menu>
                    <Menu onClick={noticeModal} >공지사항</Menu>
                    {notice ? <Modal getData={getData} value='준비중입니다.' />: null}
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
                {menu ? <MenuBar/> : null}
            </HeaderWrap>
        </Container>
    )
}

export default Header;

const Container = styled.section`
hieght: 4.375rem;
padding: 1.917rem 0;
background-color: transparent;
box-size:border-box;
display: flex;
justify-content:center;
width: 100vw;
`;
const HeaderWrap = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80rem;
padding: 0 1.667rem;
box-sizing: border-box;
@media all and (max-width: 959px) {
    width: 100vw;
}
@media all and (min-width: 540px) and (max-width: 959px) {
    width: 45rem;
}
`;
const Logo = styled.button``;
const LogoImg = styled.img`
width: 10rem;
height: 3rem;
@media all and (max-width: 540px) {
    width: 11.333rem;
    height: 4rem;
}
`;
const MenuWrap = styled.ul`
display: flex;
gap: 7.5rem;
@media all and (max-width: 959px) {
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
gap: 3.333rem;
@media all and (max-width: 959px) {
    display: none;
}
`;

const Login = styled.a`
${({ theme }) => theme.fontSize.bigRegular};
color: ${({ theme }) => theme.color.textGray};
`;
const Join = styled.a`
width: 8.333rem;
height:3.167rem;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 14.3px;
${({ theme }) => theme.fontSize.middleRegular};
color: ${({ theme }) => theme.color.textWhite};
text-align:center;
padding-top: 0.667rem;
cursor: pointer;
`;

const MenuBtn = styled.button`
width: 3.417rem;
height: 2.917rem;
display: none;
z-index: 20;
@media all and (max-width: 959px) {
    display: block;
    background-image: url(${(props)=> (props.menu ? '/assets/images/icons/close.png'  : '/assets/images/icons/menuBar.png')});
    background-repeat: no-repeat;
    background-size: contain;
}
`;