import React from "react";
import styled from "styled-components";
import searchIcon from "../../images/searchicon.jpg";
import companyicon from "../../images/companyprofile.png";

const MenuContainer = styled.div`
  background-color: #fff;
  color: #ed342e;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 12%;
    right: -1%;
    width: 400px;
    height: 76%;
    border-radius: 0.35rem;
    opacity: 0.9;
    border: 1px solid #ed342e;
    flex-direction: column;
    padding: 20px;
    z-index: 1000;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }

  @media (min-width: 768px) {
    padding: 0 10px;
    margin: 0;
    justify-content: space-between;
  }
`;

const MenuItem = styled.div`
  margin: 10px;
  font-size: 18px;
  cursor: pointer;
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

const CompanyIcon = styled.img`
  width: 30px;
  height: auto;
`;

const Menu = () => {
  return (
    <MenuContainer open>
      <SearchBox>
        <SearchIcon src={searchIcon} alt="돋보기" />
        <SearchInput type="text" />
      </SearchBox>
      <MenuItem>회사소개</MenuItem>
      <MenuItem>채용 공고</MenuItem>
      <MenuItem>광고 신청</MenuItem>
      <MenuItem>
        <CompanyIcon src={companyicon}></CompanyIcon>
      </MenuItem>
    </MenuContainer>
  );
};

export default Menu;
