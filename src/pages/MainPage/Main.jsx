import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdCarousel from "./MainAd";

const PageTitle = styled.div`
  background-color: #ed342e;
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 24px;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 100px;
`;

const BoardItem = styled.div`
  flex: 1;
  padding: 10px;
  border-radius: 5px;
  transition: transform 0.3s ease-in-out;
  /* text-align: center; */
  position: relative;

  @media (min-width: 768px) {
    min-width: calc(33.33% - 10px);
  }

  @media (max-width: 768px) {
    min-width: calc(100% - 10px);
  }

  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }
`;

const AdContainer = styled.div`
  flex: 1;
  padding: 10px;
  background-color: #ed342e;
  border-radius: 10px;
  margin: 0 50px;
  margin-bottom: 50px;
`;

const Main = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [showImage1, setShowImage1] = useState(false);
  const [showImage2, setShowImage2] = useState(false);
  const [showImage3, setShowImage3] = useState(false);
  const [showImage4, setShowImage4] = useState(false);
  const [showImage5, setShowImage5] = useState(false);
  const [showImage6, setShowImage6] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <PageTitle>Topic Best TOP 5</PageTitle>
      <BoardContainer>
        <BoardItem
          onMouseEnter={() => setShowImage1(true)}
          onMouseLeave={() => setShowImage1(false)}
        >
          <img
            src={showImage1 ? "/Main/티끌모으기.png" : "/Main/investment5.jpg"}
            alt="도비의 티끌모으기"
          />
        </BoardItem>
        <BoardItem
          onMouseEnter={() => setShowImage2(true)}
          onMouseLeave={() => setShowImage2(false)}
        >
          <img
            src={showImage2 ? "/Main/사랑과전쟁.png" : "/Main/kiss3.jpg"}
            alt="도비의 사랑과전쟁"
          />
        </BoardItem>
        <BoardItem
          onMouseEnter={() => setShowImage3(true)}
          onMouseLeave={() => setShowImage3(false)}
        >
          <img
            src={showImage3 ? "/Main/은밀한취미생활.png" : "/Main/hobby2.jpg"}
            alt="도비의 은밀한 취미 생활"
          />
        </BoardItem>
        <BoardItem
          onMouseEnter={() => setShowImage4(true)}
          onMouseLeave={() => setShowImage4(false)}
        >
          <img
            src={showImage4 ? "/Main/주인교체작전.png" : "/Main/work4.jpg"}
            alt="도비의 주인 교체 작전"
          />
        </BoardItem>
        <BoardItem
          onMouseEnter={() => setShowImage5(true)}
          onMouseLeave={() => setShowImage5(false)}
        >
          <img
            src={showImage5 ? "/Main/채용공고.png" : "/Main/hire.jpg"}
            alt="채용공고"
          />
        </BoardItem>
        {isSmallScreen && (
          <BoardItem
            onMouseEnter={() => setShowImage6(true)}
            onMouseLeave={() => setShowImage6(false)}
          >
            <img
              src={showImage6 ? "/Main/회사라운지.png" : "/Main/secret.jpg"}
              alt="회사라운지"
            />
          </BoardItem>
        )}
      </BoardContainer>
      <AdContainer>
        <AdCarousel />
      </AdContainer>
    </>
  );
};

export default Main;
