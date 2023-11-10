// yarn add react-responsive-carousel
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

// const Container = styled.div`
//   margin: 0 100px;
// `;
const CardBox = styled.div`
  cursor: pointer;
`;

const CardImg = styled.img`
  width: auto;
  height: 600px;
  border: none;
  @media (max-width: 768px) {
    height: 30%;
  }
`;

// ****** 메인 화면 광고 슬라이드 (Carousel) 이미지 리스트 ***********
const images = [
  "/Main/ad1.png",
  "/Main/ad2.png",
  "/Main/ad3.png",
  "/Main/ad4.png",
];

const AdCarousel = () => {
  const settings = {
    showThumbs: false, // 썸네일 비활성화
    showStatus: false,
    infiniteLoop: true, // 무한 루프
    autoPlay: true, // 자동 재생ㅅ
    interval: 3000, // 슬라이드 전환 간격(ms)
    transitionTime: 1000, // 슬라이드 전환 시간(ms)
  };

  return (
    <Carousel {...settings}>
      {images.map((image, index) => (
        <CardBox key={index}>
          <CardImg src={image} alt={`Slide ${index + 1}`} />
        </CardBox>
      ))}
    </Carousel>
  );
};

export default AdCarousel;
