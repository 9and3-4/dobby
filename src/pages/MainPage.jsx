import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;
const TopContainer = styled.div``;
const MajorContainer = styled.div``;
const TransBtn = styled.div`
  &.top5 {
  }
  &.item1 {
    height: auto;
    background-image: url("src/images/사랑과전쟁.png");
  }
`;

const MainPage = () => {
  const navigate = useNavigate();

  const onClickBtn = (num) => {
    switch (num) {
      case 1:
        navigate("/BoardListPage");
        break;
      case 2:
        navigate("/BoardListPage");
        break;
      case 3:
        navigate("/BoardListPage");
        break;
      case 4:
        navigate("/BoardListPage");
        break;
      case 5:
        navigate("/BoardListPage");
        break;
      case 6:
        navigate("/BoardListPage");
        break;
      case 7:
        navigate("/BoardListPage");
        break;
      default:
    }
  };
  return (
    <div>
      <Container>
        <TopContainer>
          <TransBtn
            className="top5"
            onClickBtn={() => onClickBtn(1)}
          ></TransBtn>
        </TopContainer>
        <MajorContainer>
          <TransBtn
            className="item1"
            onClickBtn={() => onClickBtn(3)}
          ></TransBtn>
          <TransBtn
            className="item2"
            onClickBtn={() => onClickBtn(4)}
          ></TransBtn>
          <TransBtn
            className="item3"
            onClickBtn={() => onClickBtn(5)}
          ></TransBtn>
          <TransBtn
            className="item4"
            onClickBtn={() => onClickBtn(6)}
          ></TransBtn>
        </MajorContainer>
      </Container>
    </div>
  );
};

export default MainPage;
