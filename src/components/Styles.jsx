import styled from "styled-components";

const StyledBackground = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Wrapper = styled.div`
  /* display: flex; */
  /* position: relative; */
  flex-direction: column;
  height: 100vh;
`;

const ContentWrapper = styled.div`
  flex: 1;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ed342e;
  font-size: 30px;
`;
const ListEl = styled.li`
  margin: 3.2vw;
`;

export { StyledBackground, Wrapper, ContentWrapper, List, ListEl };
