// import BoardWrite from "../../components/board/BoardWrite/BoardWrite";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const FormContainer = styled.div`
  padding: 20px;
  margin: auto;
  border-radius: 8px;
  border: 1px solid #ed342e;
  background-color: white;
`;

const FieldContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  flex: 0 0 100px; // 라벨의 너비 고정
  margin-right: 10px; // 라벨과 입력필드 사이 여백
`;

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const StyledForm = styled.textarea`
  width: 90%;
  padding: 10px;
  border: 1px solid #ed342e;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px; // 입력창 여백
`;

const StyledInput = styled.input`
  width: 90%;
  padding: 10px;
  border: 1px solid #ed342e;
  border-radius: 4px;
  font-size: 16px;
  margin-bottom: 20px; //입력창 아래 여백추가
`;

const StyledTextarea = styled.textarea`
  width: 90%;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  height: 100px;
`;
const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #ed342e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

const Label = styled.label`
  margin-bottom: 5px;
  color: #666;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // 버튼을 중앙에 위치시킴
  margin-top: 20px; // 버튼 상단에 여백 추가
`;

const BoardWrite = () => {
  // const majorDropdown = useState("");
  // const subDropdown = useState("");
  const [title, setTitle] = useState(""); // 제목 입력
  const [content, setContent] = useState(""); // 내용 입력
  const userId = window.localStorage.getItem("userId");
  const navigate = useNavigate();

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, content);
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
      <Title>write</Title>
      <StyledForm>
        <FieldContainer>
          <StyledLabel htmlFor="title">제목</StyledLabel>
          <StyledInput
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={handleTitleChange}
          />
        </FieldContainer>
        <FieldContainer>
          <StyledLabel htmlFor="content">내용</StyledLabel>
          <StyledTextarea
            id="content"
            name="content"
            value={content}
            onChange={handleContentChange}
          />
        </FieldContainer>
        <ButtonContainer>
          <SubmitButton onClick={handleSubmit}>Submit</SubmitButton>
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
