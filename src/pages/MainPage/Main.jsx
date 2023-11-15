import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AdCarousel from "./MainAd";
import { useNavigate } from "react-router-dom";
import Categories from "../../components/Board/Categories";

const PageTitle = styled.div`
  background-color: #ed342e;
  color: #fff;
  padding: 25px;
  text-align: center;
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
  margin: 0 50px;
  margin-bottom: 50px;
`;

const Main = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 768);
  const [showImages, setShowImages] = useState(Array(6).fill(isSmallScreen));
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      const newIsSmallScreen = window.innerWidth <= 768;
      setIsSmallScreen(newIsSmallScreen);

      // 화면이 작아졌을 때 showImage를 항상 true로 유지
      setShowImages(Array(6).fill(newIsSmallScreen));
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMouseEnter = (index) => {
    setShowImages((prev) => {
      const newImages = [...prev];
      newImages[index] = true;
      return newImages;
    });
  };

  const handleMouseLeave = (index) => {
    if (isSmallScreen) {
      setShowImages((prev) => {
        const newImages = [...prev];
        newImages[index] = true;
        return newImages;
      });
    } else {
      setShowImages((prev) => {
        const newImages = [...prev];
        newImages[index] = false;
        return newImages;
      });
    }
  };

  const renderBoardItem = (index, imageSrc, altText) => (
    <BoardItem
      key={index}
      onClick={() => navigate("/BoardListPage", { state: { name: altText } })}
      onMouseEnter={() => handleMouseEnter(index)}
      onMouseLeave={() => handleMouseLeave(index)}
    >
      <img
        src={showImages[index] ? imageSrc : `/Main/default${index + 1}.png`}
        alt={altText}
      />
    </BoardItem>
  );

  return (
    <>
      <PageTitle></PageTitle>
      <BoardContainer>
        {renderBoardItem(0, "/Main/티끌모으기.png", "도비의 티끌모으기")}
        {renderBoardItem(1, "/Main/사랑과전쟁.png", "도비의 사랑과전쟁")}
        {renderBoardItem(
          2,
          "/Main/은밀한취미생활.png",
          "도비의 은밀한 취미 생활"
        )}
        {renderBoardItem(3, "/Main/주인교체작전.png", "도비의 주인 교체 작전")}
        {renderBoardItem(4, "/Main/채용공고.png", "채용공고")}
        {isSmallScreen &&
          renderBoardItem(5, "/Main/회사라운지.png", "회사라운지")}
      </BoardContainer>
      <AdContainer>
        <AdCarousel />
      </AdContainer>
    </>
  );
};

export default Main;
