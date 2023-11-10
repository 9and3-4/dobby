import styled from "styled-components";
import newLogo from "../images/newlogo.jpg";
import searchIcon from "../images/searchicon.jpg";
import usericon from "../images/userprofile.png";

const Container = styled.div`
  padding: 0 10px;
  margin: 0;
  display: flex;
  align-items: center;
  /* background-color: #212121; */
  background-color: #fff;
  color: #ed342e;
  justify-content: space-between;
`;

const TitleItem = styled.div`
  padding: 0 10px;
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

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled.div`
  padding: 0 10px;
  font-size: 12px;
  font-weight: bold;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  /* border: 2px solid #ed342e; 네모칸 */
  border: none; /* 네모 대신 밑줄로 변경 */
  border-bottom: 2px solid #ed342e; /* 밑줄 스타일 */
  /* border-radius: 5px; 네모칸 만들 때 다시 활성화*/
  padding: 4px;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  padding: 4px;
`;

const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const UserIcon = styled.img`
  width: 30px;
  height: auto;
`;

const UserHeader = () => {
  return (
    <Container>
      <TitleItem>
        <LogoImage src={newLogo} alt="logo image" />
        <Title>9&3/4 Platform</Title>
      </TitleItem>
      <Menu>
        <MenuItem>기업 리뷰</MenuItem>
        <MenuItem>채용 공고</MenuItem>
        <MenuItem>글쓰기</MenuItem>
        <SearchBox>
          <SearchIcon src={searchIcon} alt="돋보기" />
          <SearchInput type="text" />
        </SearchBox>
        <MenuItem>
          <UserIcon src={usericon}></UserIcon>
        </MenuItem>
      </Menu>
    </Container>
  );
};
export default UserHeader;
