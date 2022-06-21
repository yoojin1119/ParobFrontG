import styled from "styled-components";
import Header from "../Component/layout/header";
import Footer from "../Component/layout/Footer";
export default function MainPage (){
 return(
    <Container>
        <Header/>
        <Footer/>
    </Container>
 )
}

const Container = styled.section``;
