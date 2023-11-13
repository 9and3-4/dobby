import styled, { css } from "styled-components";
import { useNavigate } from "react-router";

const categories = [
  { name: "소개", text: "소개" },
  { name: "리뷰", text: "리뷰" },
  { name: "게시글", text: "게시글" },
  { name: "채용", text: "채용" },
  { name: "즐겨찾기", text: "즐겨찾기" },
];

const CategoriesBlock = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  margin: 0 auto;
  // 화면 너비가 768픽셀 이하 적용
  @media screen and (max-width: 768px) {
    width: 100%;
    overflow-x: auto;
  }
`;

const Category = styled.div`
  font-size: 1rem;
  cursor: pointer;
  white-space: pre; // 공백이나 줄바꿈이 있는 경우 그대로 표시
  text-decoration: none;
  color: var(--RED);
  padding-bottom: 0.25rem;
  margin: 0 30px;
  font-weight: bold;
  transition: font-size 0.3s ease-in-out; // 글자 크기 변화를 부드럽게 만들기 위한 트랜지션 설정

  &:hover {
    font-weight: bold;
    font-size: 1.2rem; // 호버 시 글자 크기를 1.2배로 키우기
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #ed342e;
      color: #ed342e;
      &:hover {
        color: var(--RED);
        font-weight: bold;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const CompanyCategories = ({ onSelect, category }) => {
  const navigate = useNavigate();

  const handleDetailClick = (id) => {
    navigate(`/CompanyDetail${id}`);
  };

  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => handleDetailClick(c.name)}
          // key={c.name}
          // to={`/CompanyDetail/${c.path}`}
          // active={category === c.name}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default CompanyCategories;
