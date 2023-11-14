/* 기업 마이페이지 정보 수정 */
import React from "react";
import profile_img from "../../images/companyprofile.png";
import styled from "styled-components";
import { useState, useEffect } from "react";
import Profile from "../../components/Mypage/profile/Profile";
import BackButtonComponent from "./BackButton";
import Modal from "../../util/Modal";
import { Items } from "../../components/signup/SignupComponent";
import { storage } from "../../api/Firebase";
import AxiosApi from "../../api/AxiosApi";

const Container = styled.div`
  display: flex;
  /* height: 800px; */

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    height: 2000px;
  }
`;

// profile 맨 하단에 깔려 있음
const Profilebox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* color: white; */
  margin: 30px;
  background-color: white;
  height: 78vh;
`;

const SelectBox = styled.select`
  width: 200px;
  height: 35px;
  /* padding: 15px; */
  /* margin: 10px 0; */
  border: 2px solid #ed342e;
  border-radius: 5px;
  outline: none;
`;
const BtnProfile = styled.button`
  width: 200px;
  background-color: #fff;
  color: #ed342e;
  margin: 15px 0;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s color 0.2s;

  &:hover {
    background-color: #ed342e;
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
  }
`;

// 내정보수정 시작
// 맨 하단에 editwrite 깔아줌
const EditWrite = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  padding-top: 50px;

  @media only screen and (max-width: 768px) {
    padding-left: 0;
    padding-top: 0;
  }
`;

// margin-top은 옆 editwrite input창과 줄 맞추기 위해서
const EditWrite2 = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 95px;

  @media only screen and (max-width: 768px) {
    margin-top: 0;
  }
`;

const MainText = styled.p`
  font-size: 25px;
  color: #ed342e;
  font-weight: bold;
  padding-bottom: 20px;

  @media only screen and (max-width: 768px) {
    text-align: center;
    padding-right: 25px;
  }
`;
const Inputlogo = styled.input`
  width: 200px;
  height: 30px;
  margin: 10px 0 10px 10px;
  outline: none;
`;

const InputContainer = styled.div`
  display: flex;
  margin: 10px;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    display: flex;
    /* flex-direction: row; */
    justify-content: flex-end;
    padding-right: 190px;
  }
`;

const InputLabel = styled.label`
  font-size: 15px;
  color: #ed342e;
  margin: 10px;
  padding-top: 7px;
  white-space: nowrap;
`;

const InputField = styled.input`
  width: 200px;
  height: 20px;
  padding: 15px;
  margin: 10px 0;
  border: 2px solid #ed342e;
  border-radius: 5px;
  outline: none;
`;

const ButtonContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  padding: 10px;
  margin-top: auto;
  justify-content: flex-end;

  @media only screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`;

// const BackButton = styled.button`
//   width: 150px;
//   background-color: #ed342e;
//   color: white;
//   margin: 15px 15px;
//   padding: 5px;
//   border-radius: 15px;
//   border: 2px solid #ed342e;
//   transition: background-color 0.2s color 0.2s;

//   &:hover {
//     color: #fff;
//     box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
//     transform: translateY(
//       -2px
//     ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
//   }
// `;

const UpdateButton = styled.button`
  width: 150px;
  background-color: #ed342e;
  color: white;
  margin: 15px 15px;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s color 0.2s;

  &:hover {
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
  }
`;

// 회원 탈퇴 버튼
const Withdraw = styled.button`
  width: 200px;
  background-color: #ed342e;
  color: white;
  padding: 5px;
  margin-top: 5px;
  border-radius: 5px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s color 0.2s;
  justify-content: flex-end;

  &:hover {
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1); /* 호버 상태일 때 그림자 효과를 추가합니다 */
    transform: translateY(
      -2px
    ); /* 약간 위로 올라가는 효과를 주기 위해 translateY를 사용합니다 */
  }
`;

const EditCompanyMain = () => {
  const [contactPerson, setContactPerson] = useState(""); // 담당자 이름
  const contactPersonChange = (e) => {
    setContactPerson(e.target.value);
  };

  const [newPw, setNewPw] = useState(""); // 새 비밀번호 & 조건 검사
  const newPwChange = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordNew = e.target.value;
    setNewPw(passwordNew);
    if (!passwordRegex.test(passwordNew)) {
      setPwMessage("숫자+영문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요 : )");
      setIsPw(true);
    }
  };

  const [newPwCheck, setNewPwCheck] = useState(""); // 새 비밀번호 확인 & 조건 검사
  const newPwCheckChange = (e) => {
    const passwordCurrent = e.target.value;
    setNewPwCheck(passwordCurrent);
    if (passwordCurrent !== newPw) {
      setConPwMessage("비밀 번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀 번호가 일치 합니다.");
      setIsConPw(true);
    }
  };

  const [phoneNumber, setPhoneNumber] = useState(""); // 담당자 전화번호
  const PhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  const [companyName, setCompanyName] = useState(""); // 기업명
  const NameChange = (e) => {
    setCompanyName(e.target.value);
  };

  const [ceoName, setCeoName] = useState(""); // 기업 CEO 이름
  const ceoChange = (e) => {
    setCeoName(e.target.value);
  };
  const [companyTel, setCompanyTel] = useState(""); // 기업 대표 전화번호
  const TelChange = (e) => {
    setCompanyTel(e.target.value);
  };
  const [companySize, setCompanySize] = useState(""); // 기업 규모
  const sizeChange = (e) => {
    setCompanySize(e.target.value);
  };
  const [category, setCategory] = useState(""); // 업종
  const categoryChange = (e) => {
    setCategory(e.target.value);
  };
  const [address, setAddress] = useState(""); // 기업 주소
  const addressChange = (e) => {
    setAddress(e.target.value);
  };
  const [year, setYear] = useState(""); // 설립 년도
  const yearChange = (e) => {
    setYear(e.target.value);
  };
  const [income, setIncome] = useState(""); // 연봉
  const incomeChange = (e) => {
    setIncome(e.target.value);
  };

  const [staff, setStaff] = useState(""); // 직원수
  const staffChange = (e) => {
    setStaff(e.target.value);
  };
  const [profile, setProfile] = useState(""); // 기업 소개
  const profileChange = (e) => {
    setProfile(e.target.value);
  };

  // Modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("중복된 아이디 입니다.");

  const closeModal = () => {
    setModalOpen(false);
  };

  // 오류 메시지
  const [pwMessage, setPwMessage] = useState(""); // 새비밀번호
  const [conPwMessage, setConPwMessage] = useState(""); // 재확인

  // 유효성 검사
  const [isPw, setIsPw] = useState(""); // 새비밀번호
  const [isConPw, setIsConPw] = useState(""); // 재확인

  // 회사 규모 option
  const data = ["기업 규모 선택", "대기업", "중견기업", "중소기업", "스타트업"];

  // 파일 업로드
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  // 파일이 들어오면 file에 저장
  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
  };
  // 이미지 업로드
  const imageUpload = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("File uploaded successfully!");
      fileRef.getDownloadURL().then((url) => {
        console.log("저장 경로 확인 : " + url);
        setUrl(url);
        console.log(url);
      });
    });
  };

  const [userData, setUserData] = useState([]);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    const getMember = async () => {
      // CUSTOMER 테이블의 정보 불러오기
      const res = await AxiosApi.memberGet(
        window.localStorage.getItem("userId")
      );
      setUserData(res.data[0]);

      // COMPANY 테이블의 정보 불러오기
      const res2 = await AxiosApi.customerCompanyGet(
        window.localStorage.getItem("userId")
      );
      setCompanyData(res2.data[0]);
      console.log("고객의 회사 정보 : " + res2.data[0]);
    };
    getMember();
  }, []);

  // 수정하기 클릭 시
  const onClickBtn = async () => {
    if (file) {
      imageUpload();
    }

    // 비밀번호 일치하면
    if (isPw && isConPw) {
      const res2 = await AxiosApi.memberUpdate2(
        window.localStorage.getItem("userId"),
        contactPerson,
        phoneNumber,
        newPw
      );
      const res3 = await AxiosApi.companyUpdate(
        window.localStorage.getItem("userId"),
        companyName,
        companySize,
        ceoName,
        companyTel,
        category,
        address,
        year,
        staff,
        income,
        profile,
        url
      );
      const jsonStr = JSON.stringify(res3.data);
      const str = JSON.parse(jsonStr);
      console.log("str : " + str);
      console.log("res2 : " + res2);
      console.log("res3 : " + res3);

      if (res2 === true && res3 === true) {
        // 팝업
        setModalOpen(true);
        setModalText("회원 정보가 수정되었습니다.");
      } else {
        setModalOpen(true);
        setModalText("회원 정보 수정을 실패했습니다.");
      }
    } else {
      setModalOpen(true);
      setModalText("비밀번호가 일치하지 않습니다.");
    }
  };

  // 탈퇴하기 클릭 시
  const onClickBtn2 = async () => {
    const res3 = await AxiosApi.companyDel(
      window.localStorage.getItem("userId")
    );
    const res4 = await AxiosApi.memberDel(
      window.localStorage.getItem("userId")
    );
    if (res3 && res4) {
      setModalOpen(true);
      setModalText("회원 탈퇴가 정상적으로 처리되었습니다.");
    } else {
      setModalOpen(true);
      setModalText("회원 탈퇴가 정상적으로 처리되지 않았습니다.");
    }
  };

  if (!userData && !companyData) return <></>;

  return (
    <>
      <Container>
        <Profilebox>
          <Profile />
        </Profilebox>
        <EditWrite>
          <MainText>내 정보 수정</MainText>
          <InputContainer>
            <InputLabel htmlFor="contactPerson">담당자 이름</InputLabel>
            <InputField
              id="contactPerson"
              type="text"
              placeholder={userData.name}
              value={contactPerson} // 입력 필드의 값으로 기존 담당자이름 상태 사용
              onChange={contactPersonChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="newPw">새 비밀번호</InputLabel>
            <InputField
              id="newPw"
              type="text"
              value={newPw} // 입력 필드의 값으로 새 비밀번호 상태 사용
              onChange={newPwChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <Items className="hint">
            {newPw.length > 0 && (
              <span className={`message ${isPw ? "success" : "error"}`}>
                {pwMessage}
              </span>
            )}
          </Items>
          <InputContainer>
            <InputLabel htmlFor="newPwCheck">새 비밀번호 확인</InputLabel>
            <InputField
              id="newPwCheck"
              type="text"
              value={newPwCheck} // 입력 필드의 값으로 새 비밀번호 확인 상태 사용
              onChange={newPwCheckChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <Items className="hint">
            {newPwCheck.length > 0 && (
              <span className={`message ${isConPw ? "success" : "error"}`}>
                {conPwMessage}
              </span>
            )}
          </Items>
          <InputContainer>
            <InputLabel htmlFor="phoneNumber">휴대폰 번호</InputLabel>
            <InputField
              id="phoneNumber"
              type="tel"
              placeholder="하이픈(-) 포함"
              value={phoneNumber} // 입력 필드의 값으로 휴대폰번호 상태 사용
              onChange={PhoneNumberChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="companyName">기업명</InputLabel>
            <InputField
              id="companyName"
              type="text"
              value={companyName} // 입력 필드의 값으로 기업명 상태 사용
              onChange={NameChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="ceoName">기업 CEO 이름</InputLabel>
            <InputField
              id="ceoName"
              type="text"
              value={ceoName} // 입력 필드의 값으로 기업명 상태 사용
              onChange={ceoChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="companyTel">기업 대표 전화</InputLabel>
            <InputField
              id="companyTel"
              type="text"
              placeholder="하이픈(-) 포함"
              value={companyTel} // 입력 필드의 값으로 기업명 상태 사용
              onChange={TelChange} // 값이 변경될 때 호출
            />
          </InputContainer>
        </EditWrite>
        <EditWrite2>
          <InputContainer>
            <InputLabel htmlFor="companySize">기업 규모</InputLabel>
            <SelectBox value={companySize} onChange={sizeChange}>
              {data.map((size, index) => (
                <option key={index}>{size}</option>
              ))}
            </SelectBox>
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="category">업종</InputLabel>
            <InputField
              id="category"
              type="text"
              value={category} // 입력 필드의 값으로 직무 상태 사용
              onChange={categoryChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="address">기업 주소</InputLabel>
            <InputField
              id="address"
              type="text"
              value={address} // 입력 필드의 값으로 규모 상태 사용
              onChange={addressChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="year">설립 년도</InputLabel>
            <InputField
              id="year"
              type="text"
              placeholder="설립년도 (숫자만 입력)"
              value={year} // 입력 필드의 값으로 규모 상태 사용
              onChange={yearChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="staff">직원수</InputLabel>
            <InputField
              id="staff"
              type="text"
              placeholder="직원수 (숫자만 입력)"
              value={staff} // 입력 필드의 값으로 규모 상태 사용
              onChange={staffChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="income">연봉</InputLabel>
            <InputField
              id="income"
              type="text"
              placeholder="연봉 (만 단위로 입력)"
              value={income} // 입력 필드의 값으로 규모 상태 사용
              onChange={incomeChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="profile">기업 소개</InputLabel>
            <InputField
              id="profile"
              type="text"
              value={profile} // 입력 필드의 값으로 규모 상태 사용
              onChange={profileChange} // 값이 변경될 때 호출
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="file">로고</InputLabel>
            <Inputlogo type="file" onChange={handleFileInputChange} />
          </InputContainer>

          <InputContainer>
            <Withdraw onClick={onClickBtn2}>회원 탈퇴</Withdraw>
          </InputContainer>
          <ButtonContainer>
            <BackButtonComponent />
            <UpdateButton onClick={onClickBtn}>수정하기</UpdateButton>
          </ButtonContainer>
        </EditWrite2>
        <Modal open={modalOpen} close={closeModal} header="알림">
          {modalText}
        </Modal>
      </Container>
    </>
  );
};

export default EditCompanyMain;
