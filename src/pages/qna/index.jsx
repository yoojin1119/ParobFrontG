import { FAQPageJsonLd } from 'next-seo';
import styled,{ keyframes } from "styled-components";
import { useState } from 'react';
import Image from 'next/image';
import Header from "../../Component/layout/header";
import Footer from '../../Component/layout/Footer'

export default function QnaPage (){
    const [faqTogglIndex, setFaqTogglIndex] = useState('');

    const handleFaqToggle = (e) => {
      if (e?.target?.id !== faqTogglIndex) {
        setFaqTogglIndex(e?.target?.id);
      } else {
        setFaqTogglIndex('');
      }
    };
    const FaqList = [
        {
          index: '1',
          category: '서비스',
          question: '파로브는 어떤 서비스인가요?',
          answer: `파로브는 내가 원하는 장난감을 스스로 만들고 직접 종이 로봇으로 조립하는 서비스입니다. 파로브에서 원하는 종이 로봇을 마음껏 만들어보세요!`,
        },
        {
          index: '2',
          category: '회원',
          question: '어린이도 이용할 수 있나요?',
          answer:
            '네, 파로브는 어린이 이용자를 환영해요! 단, 안전한 이용을 위해서 보호자의 동의 및 인증이 필요해요.',
        },
        {
          index: '3',
          category: '에디터',
          question: '로봇을 어떻게 만드는건가요?',
          answer:
            '홈페이지 오른쪽 상단에 [로봇 만들기] 버튼을 클릭하면 로봇을 만들러 갈 수 있어요. 마음에 드는 로봇을 선택해서 시작해보세요.',
        },
        {
          index: '4',
          category: '에디터',
          question: '파츠는 무엇인가요?',
          answer:
            '파츠는 머리, 몸체, 다리, 바퀴 같은 로봇의 모양을 구성하는 부품이예요. 마음에 드는 파츠를 붙여서 원하는 모양을 만들 수 있어요.',
        },
        {
          index: '5',
          category: '에디터',
          question: '모듈은 무엇인가요?',
          answer:
            '모듈은 센서, 모터 등으로 로봇에 움직임을 더해주는 부품이에요.바퀴를 굴리거나, 빛을 깜빡이는 등 다양한 동작을 표현할 수 있어요.',
        },
        {
          index: '6',
          category: '에디터',
          question: '파츠/모듈을 어떻게 붙일 수 있나요?',
          answer:
            '붙이고 싶은 부품을 클릭하고 붙이기 아이콘을 선택해주세요. 부품을 붙이고 싶은 면에 마우스 클릭하면 붙일 수 있어요.',
        },
        {
          index: '7',
          category: '에디터',
          question: '이미 붙인 파츠/모듈을 떼고싶어요.',
          answer:
            '떼고 싶은 부품을 더블클릭 해주세요. 떼기 버튼을 클릭하면 뗄 수 있어요.',
        },
        {
          index: '8',
          category: '에디터',
          question: '로봇을 직접 만들기가 어려워요',
          answer:
            '파로브 기본 템플릿이나 커뮤니티에 올라온 친구들의 로봇을 편집하는 것부터 시작할 수 있어요. 커뮤니티에서 친구들이 만든 템플릿을 구경해보세요. 멋진 로봇들을 발견할 수 있을거에요.',
        },
        {
          index: '9',
          category: '결제',
          question: '내가 만든 로봇을 주문할 수 있나요?',
          answer:
            '네, 내가 만든 로봇을 집으로 주문할 수 있어요. 배송받은 종이 도면을 뜯어서 조립하면 내가 만든 하나뿐인 로봇이 완성돼요. 직접 만든 종이 로봇으로 재미있게 놀아보세요!',
        },
        {
          index: '10',
          category: '결제',
          question: '결제는 어떻게 하나요?',
          answer: `주문하고 싶은 로봇을 선택한 후 [주문하기] 버튼을 클릭해주세요. 주문 정보를 입력하고 결제하면 내가 만든 로봇의 종이도면을 집으로 주문할 수 있어요! 
          * 만 19세 미만의 청소년은 "결제 조르기"로 보호자에게 결제를 요청해주세요.`,
        },
        {
          index: '11',
          category: '결제',
          question: '결제 요청 문자를 받았습니다',
          answer:
            '만 19세 미만의 청소년이 결제를 요청한 경우에만 결제요청 문자가 발송됩니다. 주문 상품을 확인 후 결제를 완료해서 종이 로봇을 선물해주세요. 집으로 배송된 로봇을 직접 조립할 수 있어요!',
        },
        {
          index: '12',
          category: '결제',
          question: '회원에 탈퇴하고 싶어요',
          answer:
            '회원 탈퇴는 고객센터 help@parob.io 로 요청해주세요. 탈퇴 후에는 이전에 작성한 게시글과 댓글을 삭제할 수 없으니 미리 확인해주세요.',
        },
      ];
    return(
        <Container>
            <Header />
            <BannerCont>
                <Banner>
                    <BannerAir src='/assets/images/backGround/airPlain.png'></BannerAir>
                    <BannerWrap>
                        <BannerTit>고객센터</BannerTit>
                        <BannerTxt>서비스 이용 중 궁금한 점들을 해결해 드립니다.</BannerTxt>
                    </BannerWrap>
                    <BannerMargi src='/assets/images/backGround/margi.png'></BannerMargi>
                </Banner>
            </BannerCont>
            <ContentWrap>
                <FaqInner>
                    <FAQPageJsonLd
                      mainEntity={FaqList?.map((item) => {
                        return {
                          questionName: item?.question,
                          acceptedAnswerText: item?.answer,
                        };
                      })}
                    />
                    {FaqList?.map((item, idx) => {
                      return (
                        <div key={idx} id={item?.index}>
                          <QeustionBox id={item?.index} onClick={handleFaqToggle}>
                            <QeustionText id={item?.index}>
                              <BodyImg src='/assets/images/icons/Q.png' id={item?.index} />
                              {item?.question}
                            </QeustionText>
                            <Image
                              src={
                                faqTogglIndex === item?.index
                                  ? `/assets/images/icons/arrow_up_gray.svg`
                                  : `/assets/images/icons/arrow_down_gray.svg`
                              }
                              width={15}
                              height={15}
                              id={item?.index}
                              onClick={handleFaqToggle}
                            />
                          </QeustionBox>
                          
                          {faqTogglIndex === item?.index ? (
                            <AnswerBox>
                              {item?.answer?.split('\n').map((answer) => {
                                return (
                                  <AnswerText>
                                      <AnsweImg src='/assets/images/icons/A.png' />
                                    {answer}
                                  </AnswerText>
                                );
                              })}
                            </AnswerBox>
                          ) : (
                            <ClosedAnswerBox />
                          )}
                        </div>
                      );
                    })}
                </FaqInner>
            </ContentWrap>
            <Contact>
              <ContactWrap>
                <ContactImgWrap>
                  <ContactImg src='/assets/images/backGround/cs.png'></ContactImg>
                  <ContactTxt>고객센터</ContactTxt>
                </ContactImgWrap>
                <ContactInfo>
                  <InfoBlue>help@parob.io</InfoBlue>
                  <InfoBlue>+82 70-8800-4351</InfoBlue>
                  <Info>운영시간 : 10:00 ~ 18:00 한국 (UTC +9)</Info>
                  <InfoSmall>* 주말 및 공휴일은 휴무입니다.</InfoSmall>
                </ContactInfo>
              </ContactWrap>
            </Contact>
            <Footer />
        </Container>
    )
}

const Container = styled.section`
`;
const BannerCont = styled.div`
width: 100vw;
background-color:${({ theme }) => theme.color.primaryBlue};
display: flex;
justify-content:center;
`;
const Banner =  styled.div`
width: 80rem;
height: 16.667rem;
padding: 0 1.667rem;
box-sizing: border-box;
display: flex;
justify-content: space-between;
align-items:center;
`;
const BannerAir = styled.img`
width: 10.417rem;
height: 7rem;
align-self:start;
margin-top: 1.833rem;
`;
const BannerMargi = styled.img`
width: 13.25rem;
height: 12rem;
align-self:end;
`;
const BannerWrap = styled.div`
text-align: center;
`;
const BannerTit = styled.h2`
${({ theme }) => theme.fontSize.h2};
color: ${({ theme }) => theme.color.textWhite};
margin-bottom: 1.25rem
`;
const BannerTxt = styled.h3`
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textWhite};
`;

// 고객센터 내용
const ContentWrap = styled.div`
display: flex;
justify-content:center;
margin-bottom: 4.5rem;
`;
const FaqInner = styled.ul`
display: flex;
flex-direction:column;
align-items:center;
`;
const QeustionBox = styled.li`
width: 80rem;
padding: 0 1.417rem;
height: 4.688rem;
display: flex;
align-items:center;
justify-content: space-between;
cursor: pointer;
border-bottom: 1px solid #D3D3D3;
`;
const QeustionText= styled.p`
display: flex;
align-items: center;
gap: 0.833rem;
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.textDeepGray};

`;
const BodyImg = styled.img`
`;

// 클릭 오픈 내용
const open = keyframes`
  0% {
    width: 100%;
    padding: 0 5rem;
  }
  100% {
    width: 100%;
  padding: 2rem 5rem;
  }
`;

const close = keyframes`
  0% {
    width: 100%;
    padding: 2rem 5rem;
  }
  100% {
    width: 100%;
  padding: 0rem 5rem;
  }
`;
const AnswerBox = styled.div`
  list-style: none;
  padding: 2rem 5rem;
  animation: ${open} 0.1s linear;
  background-color: ${({ theme }) => theme.color.backLight};  
  border-bottom: 1px solid #D3D3D3;
`;
const ClosedAnswerBox = styled.li`
  list-style: none;
  animation: ${close} 0.1s linear;
`;

const AnswerText = styled.p`
  list-style: none;
  ${({ theme }) => theme.fontSize.h3};
  color: ${({ theme }) => theme.color.textDeepGray};  
  display: flex;
  gap: 0.833rem;
`;
const AnsweImg = styled.img`
width: 2.417rem;
height: 2rem;`;


// 고객 센터 연락처
const Contact = styled.section`
display: flex;
justify-content: center;
`;
const ContactWrap = styled.div`
width: 80rem;
padding: 2rem 0;
margin-bottom: 6.833rem;
background-color: ${({ theme }) => theme.color.backLight};
display: flex;
align-items:center;
gap: 4.5rem;
box-sizing: border-box;
`;
const ContactImgWrap = styled.div`
margin-left: 4.25rem;
display: flex;
justify-content:center;
flex-direction:column;
`;
const ContactImg = styled.img`
width: 6.583rem;
height: 6rem;
margin-bottom: 1.25rem;
`;
const ContactTxt = styled.p`
margin-left: 0.5rem;`;
const ContactInfo = styled.div`
display: flex;
flex-direction: column;
gap: 0.167rem;
`;
const InfoBlue = styled.p`
${({ theme }) => theme.fontSize.h3};
color: ${({ theme }) => theme.color.secondaryBule};
`;
const Info = styled.p`
${({ theme }) => theme.fontSize.middleRegular};
`;
const InfoSmall = styled.p`
${({ theme }) => theme.fontSize.smallRegular};
`;