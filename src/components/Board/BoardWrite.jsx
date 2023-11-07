import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  height: 800px;
  width: 950px;
  padding: 20px;
  margin: auto;
  border-radius: 8px;
  @media only screen and (max-width: 768px) {
    width: 600px;
  }
`;

const FieldContainerTitle = styled.div`
  margin: 10px;
  border: 1px solid #ed342e;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 5px;
`;
const FieldContainerText = styled.div`
  margin: 10px;
  border: 1px solid #ed342e;
  display: flex;
  align-items: center;
  padding: 0 5px;
  background-color: white;
`;

const StyledInput = styled.input`
  align-items: center;
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;

const StyledLabel = styled.label`
  flex: 0 0 40px; // 라벨의 너비 고정
  margin-right: 0; // 라벨과 입력필드 사이 여백
  padding: 5px;
  width: 20%;
  color: #ed342e;
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
  background-color: #e8504a1a;
  margin-bottom: 20px; // 입력창 여백
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  border: 0;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  height: 400px;
  outline: none;
  resize: none;
  @media only screen and (max-width: 768px) {
    height: 500px;
  }
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
  width: 100%;
  margin: 5px;
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
`;

const Dropdown = styled.select`
  display: flex;
  width: 100%;
  padding: 5px;
  margin: 5px;
  border: 1px solid #ed342e;
  border-radius: 0px;
  font-size: 16px;
  outline: none;
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
              <DropdownOption value="">도비의 티끌 모으기</DropdownOption>
              <DropdownOption value="majorCategory1">
                도비의 은밀한 취미생활
              </DropdownOption>
              <DropdownOption value="majorCategory2">
                도비의 주인 교체작전
              </DropdownOption>
              <DropdownOption value="majorCategory3">
                도비의 사랑과 전쟁
              </DropdownOption>
              <DropdownOption value="majorCategory4">
                도비네 채용공고
              </DropdownOption>
              <DropdownOption value="majorCategory5">
                도비의 소속회사 라운지
              </DropdownOption>
            </Dropdown>
          </DropdownContainer>
          <DropdownContainer>
            <Dropdown
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
            >
              <DropdownOption value="">소분류1</DropdownOption>
              <DropdownOption value="subCategory1">소분류2</DropdownOption>
              <DropdownOption value="subCategory2">소분류3</DropdownOption>
            </Dropdown>
          </DropdownContainer>
        </HeadContainer>

        <FieldContainerTitle>
          <StyledLabel htmlFor="title">제목</StyledLabel>
          <StyledInput
            type="text"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </FieldContainerTitle>
        <FieldContainerText>
          {/* <StyledLabel htmlFor="content">내용</StyledLabel> */}
          <StyledTextarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
          />
        </FieldContainerText>
        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>업로드</SubmitButton>
        </ButtonContainer>
      </StyledForm>
    </FormContainer>
  );
};

export default BoardWrite;
