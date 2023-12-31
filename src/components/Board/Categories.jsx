import styled, { css } from "styled-components";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const categories = [
  { name: "도비의 티끌 모으기", text: "도비의 티끌 모으기" },
  { name: "도비의 사랑과 전쟁", text: "도비의 사랑과 전쟁" },
  { name: "도비의 은밀한 취미 생활", text: "도비의 은밀한 취미 생활" },
  { name: "도비의 채용 공고", text: "도비의 채용 공고" },
  { name: "도비의 주인 교체 작전", text: "도비의 주인 교체 작전" },
  { name: "우리 회사 라운지", text: "우리 회사 라운지" },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  // 화면 너비가 768픽셀 이하 적용
  @media screen and (max-width: 768px) {
    width: 105%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1.3rem;
  cursor: pointer;
  white-space: pre; // 공백이나 줄바꿈이 있는 경우 그대로 표시
  text-decoration: none;
  color: inherit; // 부모의 컬러값을 그대로 가져옴
  padding-bottom: 0.25rem;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    font-size: 0.75rem;
  }

  &:hover {
    border-radius: 5px;
    color: #fff;
    background-color: #ed342e;
  }
  ${(props) =>
    props.active &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      border-radius: 5px;
      color: #ed342e;
      &:hover {
        color: #fff;
        background-color: #ed342e;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  const location = useLocation();
  const nameFromUrl = location.state?.name;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CategoriesBlock>
      {categories.map((c, index) => (
        <Category
          key={c.name}
          active={category === c.name || nameFromUrl === c.name}
          onClick={() => onSelect(c.name)}
          // 화면 너비가 768px 초과일 때 마지막 카테고리만 표시하지 않도록 설정
          style={
            index === categories.length - 1 && windowWidth > 768
              ? { display: "none" }
              : {}
          }
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
