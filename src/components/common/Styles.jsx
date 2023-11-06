import styled from "styled-components";

const StyledBackground = styled.div`
  background-color: #282828; /* 원하는 배경색으로 대체 */
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  /* display: flex; */
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

export { StyledBackground, Wrapper, ContentWrapper };
