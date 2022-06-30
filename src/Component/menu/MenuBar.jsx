import styled from "styled-components";
import Link from "next/link";


const MenuBar = () => {
    return(
        <Container>
            <MenuWrap>
                <UserInfo>
                    <UserImg src='/assets/images/icons/myprofile.png'></UserImg>
                    <UserName>로그인 해주세요</UserName>
                </UserInfo>
                <MenuList>
                    <Menu>
                        <MenuImg src="/assets/images/menu/making.png"></MenuImg>
                        <MenuTxt>만들기</MenuTxt>
                    </Menu>
                    <Menu>
                        <MenuImg src="/assets/images/menu/gallery.png"></MenuImg>
                        <MenuTxt>내 갤러리</MenuTxt>
                    </Menu>
                    <Menu>
                        <MenuImg src="/assets/images/menu/notice.png"></MenuImg>
                        <MenuTxt>공지사항</MenuTxt>
                    </Menu>
                </MenuList>
                <JoinWrap>
                    <Link href='/login'>
                        <LoginBtn>로그인</LoginBtn>
                    </Link>
                    <Link href='/join'>
                        <JoinBtn>회원가입</JoinBtn>
                    </Link>
                </JoinWrap>
            </MenuWrap>
        </Container>
    )
}
export default MenuBar;

const Container = styled.section`
position: absolute;
top: 0;
left: 0;
background-color: #fff;
width: 100%;
height: 100%;
z-index: 10;
`;
const MenuWrap = styled.div``;

// 사용자 정보
const UserInfo = styled.div`
height: 20.417rem;
border-bottom: 1px solid #D3D3D3;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
gap: 2.167rem;
`;
const UserImg = styled.img`
width: 8.333rem`;
const UserName = styled.p`
${({ theme }) => theme.fontSize.bigRegular};`;

// 메뉴 종류
const MenuList = styled.ul`
border-bottom: 1px solid #D3D3D3;
display: flex;
flex-direction: column;
align-items:center;
justify-content:center;
padding: 2.917rem 0;
gap: 2.083rem;
`;
const Menu = styled.li`
display: flex;
gap: 1rem;
align-items:center;
`;
const MenuImg = styled.img``;
const MenuTxt = styled.h3`
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textGray};`;

// 로그인, 회원가입 
const JoinWrap = styled.div`
display: flex;
flex-direction: column;
align-items:center;
justify-content: center;
margin-top: 2.917rem;
gap: 1.667rem;
`;
const LoginBtn = styled.button`
width:13.5rem;
height: 4.167rem;
border: 1px solid #ED6F1E;
border-radius: 14.3px;
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.primaryOrange};
`;
const JoinBtn = styled.button`
width:13.5rem;
height: 4.167rem;
border-radius: 14.3px;
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textWhite};
background-color: ${({ theme }) => theme.color.primaryOrange};
`;