import styled from "styled-components";
import newLogo from "../images/newlogo.jpg";
import Burger from "./Dropdown/Burger";

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
  return (
    <Container>
      <TitleItem>
        <LogoImage src={newLogo} alt="logo image" />
        <Title>9&3/4 Platform</Title>
      </TitleItem>
      <Burger />
    </Container>
  );
};
export default Header;
