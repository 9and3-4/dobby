// footer 개인서비스

import React from "react";
import styled from "styled-components";
import BackButtonComponent from "../pages/MyPage/BackButton";

const Container = styled.div`
  height: 800px;
  color: var(--RED);
  display: flex;
`;

const Box1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const MainImage = styled.img`
  width: 500px;
  height: auto;
  margin: 10px;
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.p`
  font-size: 1.8em;
  font-weight: bold;
  margin: 10px;
  padding-bottom: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;

  h6 {
    font-size: 20px;
    font-weight: bold;
  }
  p {
    font-size: 18px;
    padding: 10px;
  }
`;

const ProvideService = () => {
  const Url =
    "https://firebasestorage.googleapis.com/v0/b/mini-project-1f72d.appspot.com/o/%EC%86%8C%ED%86%B5%20%EC%95%84%EC%9D%B4%EC%BD%98.png?alt=media&token=d9f587eb-9fb5-4b56-babf-a69d81180e18";
  return (
    <>
      <Container>
        <Box1>
          <MainImage src={Url} alt="소통 이미지" />
        </Box1>
        <Box2>
          <Title>
            비밀 통로를 통해 투명한 소통의 기회와 긍정적인 기업 문화를 만드세요.
          </Title>
          <Content>
            <h6>투명한 소통으로 우리 기업 평판 관리</h6>
            <p>
              구성원들의 솔직한 의견을 살펴보고 정확한 정보를 공식적으로
              알려주세요.
            </p>
          </Content>
          <Content>
            <h6>기업 문화를 보여주는 브랜딩 컨텐츠 제작</h6>
            <p>
              우리 기업의 문화와 가치를 보여줄 수 있는 기업 브랜딩 컨텐츠를
              만들어 회사 페이지에 등록하고 홍보하세요.
            </p>
          </Content>
          <Content>
            <h6>우리 기업에 딱 맞는 경력 인재 채용</h6>
            <p>
              비밀 통로에 모인 많은 구직자 중에서 우리 기업에 딱 맞는 경력
              인재를 채용하세요.
            </p>
          </Content>
          <Content>
            <h6>실시간 기업 인사이트 제공</h6>
            <p>
              비밀 통로의 다양한 데이터를 분석하여 회사별/업계별 인사이트를
              실시간으로 확인할 수 있습니다.
            </p>
          </Content>
          <Content>
            <h6>
              궁금하신 사항은 admin@secret.com 이나 02 - 1000 - 7777 로 문의
              바랍니다.
            </h6>
          </Content>
          <BackButtonComponent />
        </Box2>
      </Container>
    </>
  );
};

export default ProvideService;
