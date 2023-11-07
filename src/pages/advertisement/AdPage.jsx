import { Wrapper } from "../../components/Styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import styled from "styled-components";

const Container = styled.div`
  height: 800px;
  color: var(--RED);
`;
const Maincontents = styled.div`
  font-size: 70px;
  margin-top: 20vh;
  margin-left: 15vw;
  word-break: keep-all;
  @media only screen and (max-width: 768px) {
    font-size: 50px;
    line-height: 70px;
  }
`;
const Subcontents = styled.div`
  font-size: 30px;
  margin-top: 5vh;
  margin-left: 15vw;
  word-break: keep-all;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 30px;
  }
`;
const JoinBtn = styled.button`
  font-size: 30px;
  margin-top: 20vh;
  margin-left: 15vw;
  padding: 15px;
  padding-left: 30px;
  padding-right: 30px;
  border: 2px solid var(--RED);
  background-color: transparent; // 버튼 배경색 없애기
  color: var(--RED);
  &:hover {
    background-color: var(--RED);
    color: white;
  }
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    word-break: keep-all;
  }
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
