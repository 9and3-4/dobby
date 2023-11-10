import styled, { css } from "styled-components";

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
  color: inherit; // 부모의 컬러값을 그대로 가져옴
  padding-bottom: 0.25rem;

  &:hover {
    color: #495057;
  }
  ${(props) =>
    props.active &&
    css`
      font-weight: 600;
      border-bottom: 2px solid #ed342e;
      color: #ed342e;
      &:hover {
        color: #ed342e;
      }
    `}

  & + & {
    margin-left: 1rem;
  }
`;

const Categories = ({ onSelect, category }) => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category
          key={c.name}
          active={category === c.name}
          onClick={() => onSelect(c.name)}
        >
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
