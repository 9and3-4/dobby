import styled from "styled-components";
import headerLogo from "../../images/7B010C.jpg";

const Container = styled.div`
  padding: 0 10px;
  margin: 0;
  display: flex;
  align-items: center;
  background-color: #212121;
  color: white;
`;

const TitleItem = styled.div`
  padding: 0 10px;
`;

const LogoImage = styled.img`
  width: 50px;
  height: auto;
`;

const Title = styled.p`
  font-size: 18px;
`;

const Header = () => {
  return (
    <Container>
      <TitleItem>
        <LogoImage src={headerLogo} alt="logo image" />
      </TitleItem>
      <TitleItem>
        <Title>알려지지 않은 통로</Title>
      </TitleItem>
    </Container>
  );
};
export default Header;
