import styled from "styled-components";
import { Link } from "react-router-dom";

const Position = styled.div`
  position: relative;
  bottom: 0;
`;

const Container = styled.div`
  padding: 0 10px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #ed342e;
  height: 70px;
`;

const Line = styled.hr`
  border: 0;
  border-top: 2px solid #ed342e; /* 원하는 색상으로 대체  93152d */
  width: 100vw; /* 줄의 너비 조정 가능 */
`;

const Menu = styled.div`
  display: flex;
`;

const MenuItem = styled.div`
  padding: 0 10px;
  font-size: 15px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Copyright = styled.div`
  font-size: 15px;
  padding-right: 20px;
  @media only screen and (max-width: 768px) {
    font-size: 13px;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--RED);
  padding: 0 10px;
  font-size: 15px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Footer = () => {
  return (
    <Position>
      <Line />
      <Container>
        <Menu>
          <StyledLink to="/DobbyIntroduction">서비스 소개</StyledLink>
          <StyledLink to="/TermsofUse">이용약관</StyledLink>
          <StyledLink to="/PrivacyPolicy">개인정보 처리방침</StyledLink>
          <MenuItem>기업 서비스</MenuItem>
        </Menu>
        <Copyright>© 9&3/4 Platform</Copyright>
      </Container>
    </Position>
  );
};
export default Footer;
