import styled, { css } from "styled-components";
const TransBtn = styled.button`
  border: 2px solid var(--RED);
  background-color: transparent; // 버튼 배경색 없애기
  color: var(--RED);
  white-space: nowrap;
  &:hover {
    background-color: var(--RED);
    color: white;
  }

  ${(props) => {
    return css`
      width: ${props.width};
      height: ${props.height};
      padding: ${props.padding};
      margin: ${props.margin};
      font-size: ${props.fontsize};
      background-color: ${props.backgroundcolor};
      border-radius: ${props.borderradius};
    `;
  }}
`;

export default TransBtn;
