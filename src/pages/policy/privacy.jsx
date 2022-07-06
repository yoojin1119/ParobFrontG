import styled from "styled-components"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import Header from "../../Component/layout/component/header";
import Footer from "../../Component/layout/component/Footer"

// dinamic import
const PrivacyVersion0 = dynamic(
    () => import('../../Component/policy/Privacy/PrivacyVersion0')
    );
const PrivacyVersion1 = dynamic(
        () => import('../../Component/policy/Privacy/PrivacyVersion1')
    );
const PrivacyVersion2 = dynamic(
    () => import('../../Component/policy/Privacy/PrivacyVersion2')
);
  

export default function PrivacyPage (){
    const [open, setOpen] = useState(false)
    const [clickedPrivacyTerms, setClickedPrivacyTerms] = useState(2);
    const termsOpen = () => {
        setOpen(!open)
    }

  const handlePrivacyTermsClick = (e) => {
    setClickedPrivacyTerms(e.target.value);
    window.scrollTo(0,0);
  };

    return(
        <Container>
            <Header />
            <TermsWrap>
                <Title>개인정보처리방침</Title>
                <PrivacyBox>
                    {clickedPrivacyTerms === 0 ? <PrivacyVersion0 /> : clickedPrivacyTerms === 1 ? <PrivacyVersion1/> : <PrivacyVersion2 />}
                </PrivacyBox>
                <AllTermsDropboxWrapper>
                    <DropBoxWrap>
                        <AllTermsDropbox
                            name="privacyTermsVersion"
                            onClick={termsOpen}
                        >
                            이전 개인정보처리방침
                        <DropBoxBtn></DropBoxBtn>
                        </AllTermsDropbox>
                        { open ? 
                         <OptionWrap>
                            <DropBox onClick={handlePrivacyTermsClick}  value="2" defaultValue="true">
                                {clickedPrivacyTerms === 2  ? <BoxCheck src='/assets/images/icons/blueCheck.png' /> : null}
                              시행일자 : 2022년 5월 30일
                            </DropBox>
                            <DropBox   onClick={handlePrivacyTermsClick} value="1">
                                {clickedPrivacyTerms === 1  ? <BoxCheck src='/assets/images/icons/blueCheck.png' />: null}
                              시행일자 : 2021년 12월 26일
                            </DropBox>
                            <DropBox   onClick={handlePrivacyTermsClick} value="0">
                                {clickedPrivacyTerms === 0  ? <BoxCheck src='/assets/images/icons/blueCheck.png' />: null}
                              시행일자 : 2021년 8월 30일
                            </DropBox>
                        </OptionWrap> : null}
                    </DropBoxWrap>
                </AllTermsDropboxWrapper>
            </TermsWrap>
            <Footer />
        </Container>
    )
}

const Container = styled.section`
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    @media all and (max-width: 540px) {
    
    }
`;
const TermsWrap = styled.div`
    width: 80rem;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items:center;
    margin: 0 2.5rem 17.083rem;
    @media all and (max-width: 959px) {
        width: 45rem;
      }
`;
const Title = styled.h2`
    margin:6.667rem 0;
    ${({ theme }) => theme.fontSize.h2};
    color: ${({ theme }) => theme.color.textDeepGray};
`;
const PrivacyBox = styled.div`
    padding: 2.583rem 0;
    margin: 0 2.5rem;
    box-sizing: border-box;
    border-top: solid 1px #B7B7B7;
    border-bottom: solid 1px #B7B7B7;
    background-color: white;
    ${({ theme }) => theme.fontSize.middleRegular};
    color: ${({ theme }) => theme.color.textGray};
`;
const AllTermsDropboxWrapper = styled.div`
    margin-top: 25px;
    width: 80rem;
    display: flex;
    flex-direction:column;
    align-items:end;
    justify-content:center;
    box-sizing:border-box;
    @media all and (max-width: 959px) {
        width: 45rem;
      }
`;

const DropBoxWrap= styled.div`
    margin:4.083rem 2.5rem 0 0;
    position:relative;
`;
const AllTermsDropbox = styled.button`
    width: 27.833rem;
    height:4.167rem;
    padding: 0.4rem 1.1rem;
    border: solid 1px #a8a8a8;
    border-radius:10px;
    text-align: start;
    font-size: 1rem;
    color: #a8a8a8;
    ${({ theme }) => theme.fontSize.h4};
    color: ${({ theme }) => theme.color.textGray};
`;
const DropBoxBtn = styled.div`
    position:absolute;
    top:1.5rem;
    right: 1rem;
    background: url('/assets/images/icons/polygon.png') no-repeat;
    background-size: contain;
    border: none;
    width: 2.083rem; 
    height: 1.667rem;
`;
const OptionWrap = styled.ul`
    position:absolute;
    bottom: -13rem;
    text-indent: 1rem;
    border: solid 1px #a8a8a8;
    border-radius:10px;
`;
const DropBox = styled.li`
    height: 4.167rem;
    width: 27.833rem;
    box-sizing:border-box;
    text-align: center;
    padding-top: 1.5rem;
    display: flex;
    justify-content: center;
    position:relative;
    border-bottom: solid 1px #a8a8a8;
    ${({ theme }) => theme.fontSize.h4};
    color: ${({ theme }) => theme.color.textGray};
    :last-child {
        border-bottom: none;
    }
`;
const BoxCheck = styled.img`
    width:1.417rem;
    height: 1.167rem;
    position:absolute;
    left: 3rem;
`;