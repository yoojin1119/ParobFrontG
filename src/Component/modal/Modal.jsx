import styled from "styled-components";

const Modal = ({value,msg,getData}) => {
    const closeModal = () =>{
        getData(false)
    }
    return(
    <Container>
       <Name>{value}</Name>
       <ModalMsg>{msg}</ModalMsg>
       <ModalBtn onClick={closeModal}>확인</ModalBtn>
       <CloseImg onClick={closeModal} src='/assets/images/icons/close.png'></CloseImg>
    </Container>
    )
}
export default Modal;

const Container = styled.section`
    position: absolute;
    width: 32.083rem;
    height: 22.917rem;
    box-sizing: border-box;
    display: flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    background-color:  #fff;
    border-radius: 10px;
    border: 1px solid #B7B7B7;
    gap: 3.5rem;
    `;
const Name = styled.h3`
    ${({ theme }) => theme.fontSize.h3};
    `;
const ModalMsg = styled.p`
    ${({ theme }) => theme.fontSize.middleRegular};
    color: ${({ theme }) => theme.color.textGray}`;
const ModalBtn = styled.button`
    width: 17.25rem;
    height: 4.167rem;
    border-radius:14.3px;
    ${({ theme }) => theme.fontSize.bigRegular};
    background-color: ${({ theme }) => theme.color.primaryOrange};
    color:  ${({ theme }) => theme.color.textWhite};
`;
const CloseImg = styled.img`
    width: 1.25rem;
    height: 1.25rem;
    position: absolute;
    top: 1.5rem;
    right: 2.25rem;
`;