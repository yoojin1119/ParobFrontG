import styled from "styled-components";

const Sns = () => {
    return(
        <Container>
            <Title>
                소셜 회원가입
            </Title>
            <ButtonWrap>
                <Google>
                    <Img src="./assets/images/icons/google.png"></Img>
                </Google>
                <Kakao>
                    <Img src="./assets/images/icons/kakaotalk.png"></Img>
                </Kakao>
            </ButtonWrap>
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