import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import searchIcon from "../../images/searchicon.jpg";
import userIcon from "../../images/userprofile.png";
import companyIcon from "../../images/companyprofile2.png";
import adminIcon from "../../images/adminprofile.png";

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
  &:hover {
    text-decoration: underline;
  }
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

const menuOptions = {
  user: {
    menuItem1: "기업 리뷰",
    menuItem2: "채용 공고",
    menuItem3: "글쓰기",
    menuItem4: null,
    icon: userIcon,
  },
  company: {
    menuItem1: "회사소개",
    menuItem2: "채용 공고",
    menuItem3: "광고 신청",
    menuItem4: null,
    icon: companyIcon,
  },
  admin: {
    menuItem1: "회원정보 관리",
    menuItem2: "게시글 관리",
    menuItem3: "채용 공고 관리",
    menuItem4: "광고 관리",
    icon: adminIcon,
  },
  default: {
    menuItem1: "기업 리뷰",
    menuItem2: "채용 공고",
    menuItem3: "글쓰기",
    menuItem4: "로그인",
    icon: null,
  },
};

const Menu = (props) => {
  const navigate = useNavigate(); // useNavigate 훅 사용
  // 사용자의 타입에 따른 메뉴 정보 가져오기
  const { menuItem1, menuItem2, menuItem3, menuItem4, icon } =
    menuOptions[props.user] || menuOptions["default"];

  // 메뉴 항목 클릭 시 해당 URL로 이동하는 함수
  const handleMenuClick = (menuItem) => {
    switch (menuItem) {
      case "로그인":
        // 로그인 항목 클릭 시 특별한 동작 수행 (예: 모달 열기, 함수 호출 등)
        navigate("/LoginPage");
        break;
      case "기업 리뷰":
        navigate("/reviews");
        break;
      case "채용 공고":
        navigate("/JobListings");
        break;
      case "글쓰기":
        navigate("/BoardWritePage");
        break;
      // case "회사소개":
      //   navigate();
      //   break;
      case "광고 신청":
        navigate("/AdPage");
        break;
      case "회원정보 관리":
        navigate("/AdminBoardList");
        break;
      case "게시글 관리":
        navigate("/BoardListPage");
        break;
      case "채용 공고 관리":
        navigate("/AdminJobPostList");
        break;
      case "광고 관리":
        navigate("/AdminAdList");
        break;
      default:
        navigate("/");
    }
  };

  // 아이콘 클릭 시 특정 URL로 이동하는 함수
  const handleMypage = () => {
    // user, company, admin에 따라 다른 URL로 이동하도록 수정
    switch (props.user) {
      case "user":
        navigate("/userMypage");
        break;
      case "company":
        navigate("/companyMypage");
        break;
      case "admin":
        navigate("/userMypage");
        break;
      default:
        navigate("/");
    }
  };

  return (
    <MenuContainer open={props.open}>
      <SearchBox>
        <SearchIcon src={searchIcon} alt="돋보기" />
        <SearchInput type="text" />
      </SearchBox>
      {/* 동적으로 메뉴 항목 생성 */}
      {[menuItem1, menuItem2, menuItem3, menuItem4 && menuItem4].map(
        (item, index) => (
          <MenuItem key={index} onClick={() => handleMenuClick(item)}>
            {item}
          </MenuItem>
        )
      )}
      {icon && (
        <MenuItem onClick={handleMypage}>
          <Icon src={icon} />
        </MenuItem>
      )}
    </MenuContainer>
  );
};
export default Menu;
