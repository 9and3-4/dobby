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

const Title = styled.h1`
  color: #333;
  text-align: center;
`;

const BoardWrite = () => {
  const majorDropdown = useState("");

  const subDropdown = useState("");

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
  <FormContainer>
    <Title>write</Title>
  </FormContainer>;
};

export default BoardWrite;
