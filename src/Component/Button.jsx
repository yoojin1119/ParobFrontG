import styled from "styled-components";

const Button = ({value, onClick}) => {
    return(
    <Container>
        <Name>가입 하기</Name>
    </Container>
    )
}
export default Button;

const Container = styled.button`
width: 420px;
height: 70px;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 20px;`

const Name = styled.h2`
font: ${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textWhite}`;