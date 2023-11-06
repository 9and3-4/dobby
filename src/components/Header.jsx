// Header.js
//2023-11-04T18:53:00

// import styled from "styled-components";
// import headerLogo from "../images/7B010C.jpg";

// const Container = styled.div`
//   padding: 0 10px;
//   margin: 0;
//   display: ${(props) =>
//     props.flex === "flex" ? "flex" : "none"}; /* props에 따라 display 설정 */
//   align-items: center;
//   background-color: #212121;
//   color: white;
// `;

// const TitleItem = styled.div`
//   padding: 0 10px;
// `;

// const LogoImage = styled.img`
//   width: 50px;
//   height: auto;
// `;

// const Title = styled.p`
//   font-size: 18px;
// `;

// const Header = ({ flex }) => {
//   return (
//     <Container flex={flex}>
//       <TitleItem>
//         <LogoImage src={headerLogo} alt="logo image" />
//       </TitleItem>
//       <TitleItem>
//         <Title>알려지지 않은 통로</Title>
//       </TitleItem>
//     </Container>
//   );
// };

// export default Header;

// import styled from "styled-components";
// import headerLogo from "../images/7B010C.jpg";
// import haederLogo2 from "../images/ed342e.jpg";
// import newLogo from "../images/newlogo.jpg";

// const Container = styled.div`
//   padding: 0 10px;
//   margin: 0;
//   display: flex;
//   align-items: center;
//   /* background-color: #212121; */
//   background-color: white;
//   color: #ed342e;
// `;

// const TitleItem = styled.div`
//   padding: 0 10px;
// `;

// const LogoImage = styled.img`
//   width: 50px;
//   height: auto;
// `;

// const Title = styled.p`
//   font-size: 18px;
// `;

// const Header = () => {
//   return (
//     <Container>
//       <TitleItem>
//         <LogoImage src={newLogo} alt="logo image" />
//       </TitleItem>
//       <TitleItem>
//         <Title>SecretPassage</Title>
//       </TitleItem>
//     </Container>
//   );
// };
// export default Header;

/* 대안 3 : 헤더 흰바탕 + 빨간색 글씨 조합 */

import styled from "styled-components";
import newLogo from "../images/newlogo.jpg";
import searchIcon from "../images/searchicon.jpg";

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

const Header = () => {
  return (
    <Container>
      <TitleItem>
        <LogoImage src={newLogo} alt="logo image" />
        <Title>9&3/4 Platform</Title>
      </TitleItem>
      <Menu>
        <MenuItem>회사소개</MenuItem>
        <MenuItem>채용 공고</MenuItem>
        <MenuItem>광고 신청</MenuItem>
        <SearchBox>
          <SearchIcon src={searchIcon} alt="돋보기" />
          <SearchInput type="text" />
        </SearchBox>
      </Menu>
    </Container>
  );
};
export default Header;
