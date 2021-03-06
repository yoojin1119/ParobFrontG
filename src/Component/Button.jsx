import styled from "styled-components";
import { useRouter } from "next/router";

const Button = ({value}) => {
    return(
    <Container>
       <Name >{value}</Name>
    </Container>
    )
}
export default Button;

const Container = styled.button`
width: 35rem;
height: 5.833rem;
background-color: ${({ theme }) => theme.color.primaryOrange};
border-radius: 20px;
`;

const Name = styled.h2`
font: ${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textWhite}`;