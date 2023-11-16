import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import BoardAxiosApi from "../../api/BoardAxiosApi";
import Modal from "../../util/Modal";

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

const FieldContainer = styled.div`
  margin: 10px;
  border: 1px solid #ed342e;
  display: flex;
  align-items: center;
  background-color: white;
  padding: 0 5px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  outline: none;
`;

const StyledLabel = styled.label`
  flex: 0 0 40px;
  margin-right: 0;
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
  margin-bottom: 20px;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const DropdownContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 5px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 5px;
  margin: 5px;
  border: 1px solid #ed342e;
  border-radius: 0px;
  font-size: 16px;
  outline: none;
`;

const HeadContainer = styled.div`
  display: flex;
  width: 100%;
`;

const DropdownOption = ({ value, children }) => (
  <option value={value}>{children}</option>
);

const BoardWrite = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [majorCategories, setMajorCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedMajorCategory, setSelectedMajorCategory] = useState([]);
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const userId = window.localStorage.getItem("userId");
  const navigate = useNavigate();

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState(false);

  // close 버튼 눌렀을 때 실행되는 함수
  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    //대분류 선택에 따라 소분류를 가져오는 역할을 하는 fetch
    const fetchMajorCategories = async () => {
      try {
        const rsp = await BoardAxiosApi.getMajorCategories();
        console.log("대분류 : ", rsp);
        setMajorCategories(rsp);
      } catch (error) {
        console.error("대분류를 가져오는 중 오류 발생:", error);
      }
    };

    // majorCategories 데이터를 가져오는 useEffect 호출
    fetchMajorCategories();
  }, []);

  useEffect(() => {
    // selectedMajorCategory가 변경될 때마다 호출되도록 변경
    const fetchSubCategories = async () => {
      if (selectedMajorCategory) {
        // 여기서 빈 배열이 되지 않도록 확인
        try {
          const rsp = await BoardAxiosApi.getSubCategories(
            selectedMajorCategory
          );
          setSubCategories(rsp);
        } catch (error) {}
      }
    };

    // selectedMajorCategory가 변경될 때마다 소분류 데이터를 가져오는 useEffect 호출
    fetchSubCategories();
  }, [selectedMajorCategory]);

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handleContentChange = (e) => setContent(e.target.value);

  const handleMajorCategoryChange = (e) => {
    // const selectedValue = e.target.value;
    // setSelectedMajorCategory(selectedValue);
    setSelectedMajorCategory(e.target.value);
    console.log("setSelectedMajorCategory : ", e.target.value);
    setSelectedSubCategory("");
  };

  const handleSubCategoryChange = (e) => setSelectedSubCategory(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedMajorCategory || !selectedSubCategory) {
      setModalOpen(true);
      setModalText("대분류와 소분류를 선택하십시오.");
      return;
    }

    const boardData = {
      major: selectedMajorCategory,
      sub: selectedSubCategory,
      title,
      content,
      userId,
    };

    try {
      const rsp = await BoardAxiosApi.boardWrite(
        selectedMajorCategory,
        selectedSubCategory,
        title,
        content,
        userId
      );
      console.log("글쓰기 업로드 : " + rsp.data);

      if (rsp.data === true) {
        setModalOpen(true);
        setModalText("업로드를 성공하였습니다.");
        navigate("/BoardListPage");
      } else {
        setModalOpen(true);
        setModalText("업로드를 성공하였습니다.");
      }
    } catch (error) {
      console.log("데이터 업로드 중 오류 발생:", error);
    }
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
              <DropdownOption value="">대분류 선택</DropdownOption>
              {majorCategories.map((majorCategory, index) => (
                <DropdownOption key={index} value={majorCategory}>
                  {majorCategory}
                </DropdownOption>
              ))}
            </Dropdown>
          </DropdownContainer>
          <DropdownContainer>
            <Dropdown
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
            >
              <DropdownOption value="">소분류 선택</DropdownOption>
              {subCategories.map((subCategory, index) => (
                <DropdownOption key={index} value={subCategory}>
                  {subCategory}
                </DropdownOption>
              ))}
            </Dropdown>
          </DropdownContainer>
        </HeadContainer>

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
      <Modal open={modalOpen} close={closeModal} header="알림">
        {modalText}
      </Modal>
    </FormContainer>
  );
};

export default BoardWrite;
