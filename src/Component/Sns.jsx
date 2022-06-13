import styled from "@emotion/styled";

const Sns = () => {
    return(
        <Container>
            <Title>
                소셜 회원가입
            </Title>
            <ButtonWrap>
                <Google>
                    <Img src="./asset/google.png"></Img>
                </Google>
                <Kakao>
                    <Img src="./asset/kakaotalk.png"></Img>
                </Kakao>
            </ButtonWrap>
        </Container>
    )
}
export default Sns;

const Container = styled.section`

`;

const Title = styled.h3``;

const ButtonWrap = styled.div`
display: flex;
align-items:center;
justify-content:center;
flex-direction: column;`;

const Google = styled.button``;

const Kakao = styled.button``;

const Img= styled.img``;