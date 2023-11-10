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
  border: 1px solid black;
`;

const CardImg = styled.img`
  width: auto;
  height: 200px;
`;

const images = ["/Main/cat1.jpg", "/Main/cat2.jpg", "/Main/cat3.jpg"];

const AdCarousel = () => {
  const settings = {
    showThumbs: false, // 썸네일 비활성화
    showStatus: false,
    infiniteLoop: true, // 무한 루프
    autoPlay: true, // 자동 재생ㅅ
    interval: 3000, // 슬라이드 전환 간격(ms)
    transitionTime: 1000, // 슬라이드 전환 시간(ms)
    // autoFocus: true,
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
