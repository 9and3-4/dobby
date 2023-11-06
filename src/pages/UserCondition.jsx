import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import styled from "styled-components";
import { Wrapper } from "../components/Styles";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 40px;
`;
const ListEl = styled.li``;

const UserCondition = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <List>
          <ListEl>전체 동의하기</ListEl>
          <ListEl>9 3/4 이용약관</ListEl>
          <ListEl>[필수]개인정보 수집이용 및 약관</ListEl>
          <ListEl>[선택]개인정보 수집이용 및 약관</ListEl>
        </List>
        <Footer />
      </Wrapper>
    </>
  );
};

export default UserCondition;
