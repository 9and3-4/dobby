import styled from "styled-components";
import newLogo from "../images/newlogo.jpg";
import Burger from "./Dropdown/Burger";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  padding: 0 10px;
  margin: 0;
  display: flex;
  align-items: center;
  background-color: #fff;
  color: #ed342e;
  justify-content: space-between;
`;

const TitleItem = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 50px;
  height: auto;
`;

const Title = styled.p`
  font-size: 18px;
  padding-left: 15px;
`;

const Header = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // 클릭 이벤트 핸들러
  const handleTitleItemClick = () => {
    // 클릭 시 "/"로 이동
    navigate("/");
  };
  return (
    <Container>
      <TitleItem onClick={handleTitleItemClick}>
        <LogoImage src={newLogo} alt="logo image" />
        <Title>9&3/4 Platform</Title>
      </TitleItem>
      <Burger />
    </Container>
  );
};
export default Header;
