import { Wrapper } from "../../components/Styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AdComponent from "../../components/advertisement/AdJoinComponent";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  height: 800px;
  color: var(--RED);
`;
const Maincontents = styled.div`
  font-size: clamp(10px, 7vw, 70px);
  margin-top: 20vh;
  margin-left: 15vw;
  white-space: nowrap;
`;
const Subcontents = styled.div`
  font-size: clamp(5px, 4vw, 40px);
  margin-top: 5vh;
  margin-left: 15vw;
  white-space: nowrap;
`;
const JoinBtn = styled.button`
  font-size: clamp(5px, 3vw, 30px);
  margin-top: 20vh;
  margin-left: 15vw;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  border: 2px solid var(--RED);
  background-color: transparent;
  color: var(--RED);
`;
const AdPage = () => {
  const navigate = useNavigate();

  const onClickBtn = () => {
    navigate("/adjoinpage");
  };
  return (
    <Container>
      <Maincontents>우리 기업을 소개해보세요</Maincontents>
      <Subcontents>
        9와 3/4 홈페이지에 기업 맞춤형 광고를 게시해보세요.
      </Subcontents>
      <JoinBtn onClick={onClickBtn}>즉시 신청</JoinBtn>
    </Container>
  );
};
export default AdPage;
