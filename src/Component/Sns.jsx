import styled from "styled-components";
import { useRouter } from "next/router";

const Sns = () => {
    const router = useRouter();
    const url = router.pathname;
    return(
        <Container>
            {url === '/join' ?
            <>
                <Title>
                    소셜 회원가입
                </Title>
                <ButtonWrap>
                    <Google>
                        <Img src="./assets/images/icons/googleJoin.png"></Img>
                    </Google>
                    <Kakao>
                        <Img src="./assets/images/icons/kakaotalkJoin.png"></Img>
                    </Kakao>
                </ButtonWrap>  
            </>: 
                <ButtonWrap>
                    <Google>
                        <Img src="./assets/images/icons/googleLogin.png"></Img>
                    </Google>
                    <Kakao>
                        <Img src="./assets/images/icons/kakaotalkLogin.png"></Img>
                    </Kakao>
                </ButtonWrap> }
        </Container>
    )
}
export default Sns;

const Container = styled.section`
display: flex;
flex-direction: column;
`;

const Title = styled.div`
font: ${({ theme }) => theme.fontSize.bigBold};
margin:0 0 25px 10px `;

const ButtonWrap = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap: 15px;
`;

const Google = styled.button``;

const Kakao = styled.button``;

const Img= styled.img``;