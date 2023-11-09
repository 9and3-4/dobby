import React, { useState } from "react";
import styled from "styled-components";
import searchIcon from "../../images/searchicon.jpg";
import userIcon from "../../images/userprofile.png";
import companyIcon from "../../images/companyprofile.png";
import adminIcon from "../../images/93152D.jpg";

const MenuContainer = styled.div`
  background-color: #fff;
  color: #ed342e;
  display: flex;

  @media (max-width: 768px) {
    position: fixed;
    bottom: 12%;
    right: -1%;
    width: 200px;
    height: 76%;
    border-radius: 0.35rem;
    opacity: 0.9;
    border: 1px solid #ed342e;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    z-index: 1000;
    transition: all 0.5s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  }

  @media (min-width: 768px) {
    align-items: center;
    padding: 0 15px;
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

const Icon = styled.img`
  width: 30px;
  height: auto;
  @media (max-width: 768px) {
    width: 60px;
  }
`;

const Menu = (props) => {
  const menuItem1 =
    props.user === "user"
      ? "기업 리뷰"
      : props.user === "company"
      ? "회사소개"
      : "회원정보 관리";
  const menuItem2 =
    props.user === "user"
      ? "채용 공고"
      : props.user === "company"
      ? "채용 공고"
      : "게시글 관리";
  const menuItem3 =
    props.user === "user"
      ? "글쓰기"
      : props.user === "company"
      ? "광고 신청"
      : "기업 관리";
  const menuItem4 =
    props.user === "user"
      ? null
      : props.user === "company"
      ? null
      : "광고 관리";
  const menuIcon =
    props.user === "user"
      ? userIcon
      : props.user === "company"
      ? companyIcon
      : adminIcon; // You would need to have an 'adminIcon' defined.

  return (
    <MenuContainer open={props.open}>
      <SearchBox>
        <SearchIcon src={searchIcon} alt="돋보기" />
        <SearchInput type="text" />
      </SearchBox>
      <MenuItem>{menuItem1}</MenuItem>
      <MenuItem>{menuItem2}</MenuItem>
      <MenuItem>{menuItem3}</MenuItem>
      {menuItem4 && <MenuItem>{menuItem4}</MenuItem>}
      <MenuItem>
        <Icon src={menuIcon} />
      </MenuItem>
    </MenuContainer>
  );
};
export default Menu;
