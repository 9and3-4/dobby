// import BoardWrite from "../../components/board/BoardWrite/BoardWrite";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  height: 800px;
  padding: 20px;
  margin: auto;
  border-radius: 8px;
  background-color: white;
`;

const FieldContainer = styled.div`
  margin: 10px;
  border: 1px solid #ed342e;
  display: flex;
  align-items: center;
  padding: 0 5px;
`;

const StyledInput = styled.input`
  align-items: center;
  width: 90%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`;

const StyledLabel = styled.label`
  flex: 0 0 100px; // 라벨의 너비 고정
  margin-right: 10px; // 라벨과 입력필드 사이 여백
  width: 80%;
`;

const Title = styled.h1`
  color: #ed342e;
  text-align: center;
  padding: 5px;
`;

const StyledForm = styled.div`
  width: 100%;
  display: inline-block;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ed342e;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px; // 입력창 여백
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  height: 400px;
`;
const SubmitButton = styled.button`
  padding: 5px 15px;
  margin: 3px;
  background-color: white;
  color: #ed342e;
  border: 1px solid #ed342e;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    color: white;
    background-color: #ed342e;
  }
`;

// const Label = styled.label`
//   margin-bottom: 5px;
//   color: #ed342e;
// `;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // 버튼을 중앙에 위치시킴
  margin-top: 20px; // 버튼 상단에 여백 추가
`;

const DropdownContainer = styled.div`
  display: flex;
  /* align-items: center; */
  width: 50%;
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Dropdown = styled.select`
  display: flex;
  width: 60px; /* 원하는 너비로 조정하세요 */
  padding: 5px;
  border: 1px solid #ed342e;
  border-radius: 4px;
  font-size: 16px;
`;

const BoardWrite = () => {
  const [title, setTitle] = useState(""); // 제목 입력
  const [content, setContent] = useState(""); // 내용 입력
  const [selectedMajorCategory, setSelectedMajorCategory] = useState(""); // 대분류 선택
  const [selectedSubCategory, setSelectedSubCategory] = useState(""); // 소분류 선택
  const userId = window.localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleMajorCategoryChange = (e) => {
    setSelectedMajorCategory(e.target.value);
  };

  const handleSubCategoryChange = (e) => {
    setSelectedSubCategory(e.target.value);
  };
  const DropdownOption = ({ value, children }) => (
    <option value={value}>{children}</option>
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, content, selectedMajorCategory, selectedSubCategory);
    // try {
    //     const rsp = await AxiosApi.boardWrite();
    //     if(rsp.data === true) {
    //         alert("업로드 완료");
    //         navigate("/BoardList");
    //     } else {
    //         alert("업로드 실패");
    //     }
    // } catch (error) {
    //     console.log(error);
    // }
  };

  return (
    <FormContainer>
      <Title>글쓰기</Title>
      <StyledForm>
        <HeadContainer>
          <DropdownContainer>
            <Dropdown
              value={selectedMajorCategory}
              onChange={handleMajorCategoryChange}
            >
              <DropdownOption value="">1</DropdownOption>
              <DropdownOption value="majorCategory1">2</DropdownOption>
              <DropdownOption value="majorCategory2">3</DropdownOption>
            </Dropdown>
          </DropdownContainer>
          <DropdownContainer>
            <Dropdown
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
            >
              <DropdownOption value="">4</DropdownOption>
              <DropdownOption value="subCategory1">5</DropdownOption>
              <DropdownOption value="subCategory2">6</DropdownOption>
            </Dropdown>
          </DropdownContainer>
          <FieldContainer>
            <StyledLabel htmlFor="title">제목</StyledLabel>
            <StyledInput
              type="text"
              name="title"
              value={title}
              onChange={handleTitleChange}
            />
          </FieldContainer>
        </HeadContainer>
        <FieldContainer>
          {/* <StyledLabel htmlFor="content">내용</StyledLabel> */}
          <StyledTextarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
          />
        </FieldContainer>
        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>업로드</SubmitButton>
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};

const BoardWritePage = () => {
  return (
    <>
      <BoardWrite />
    </>
  );
};

export default BoardWritePage;
