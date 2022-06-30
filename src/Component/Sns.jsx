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
margin-bottom:2.083rem 
`;

const ButtonWrap = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
gap: 1.25rem;
`;

const Google = styled.button`
width:100%;
`;
const Kakao = styled.button`
width:100%;
`;

const Img= styled.img`
width: 35rem;
`;