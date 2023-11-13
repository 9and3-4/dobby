import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../util/Modal";
import AxiosApi from "../../api/AxiosApi";
import styled from "styled-components";
import { storage } from "../../api/Firebase";
import {
  Input,
  Button,
  Container,
  Items,
} from "../../components/signup/SignupComponent";
import { SelectBox } from "../../components/signup/SignupEmailComponent";

const CompanySignup = () => {
  const InputNone = styled.p`
    margin-left: 30px;
    margin-right: 30px;
    width: 170px; /* 원하는 너비 설정 */
    height: 40px; /* 높이값 초기화 */
    line-height: normal; /* line-height 초기화 */
    padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
    font-family: inherit; /* 폰트 상속 */
    border: 1px solid var(--RED);
    border-radius: 18px; /* iSO 둥근모서리 제거 */
    outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
    color: #999;
  `;

  const navigate = useNavigate();
  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputCompanyName, setInputCompanyName] = useState("");
  const [inputSizeScale, setInputSizeScale] = useState("");
  const [inputCeo, setInputCeo] = useState("");
  const [inputContactNumber, setInputContactNumber] = useState("");
  const [inputUrl, setInputUrl] = useState("");
  const [inputCategory, setInputCategory] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputYear, setInputYear] = useState("");
  const [inputStaff, setInputStaff] = useState("");
  const [inputIncome, setInputIncome] = useState("");
  const [inputProfile, setInputProfile] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isCompanyName, setIsCompanyName] = useState(false);
  const [isSizeScale, setIsSizeScale] = useState("");
  const [isCeo, setIsCeo] = useState("");
  const [isContactNumber, setIsContactNumber] = useState("");
  const [isUrl, setIsUrl] = useState("");
  const [isCategory, setIsCategory] = useState("");
  const [isAddress, setIsAddress] = useState("");
  const [isYear, setIsYear] = useState("");
  const [isStaff, setIsStaff] = useState("");
  const [isIncome, setIsIncome] = useState("");
  const [isProfile, setIsProfile] = useState("");
  const [isLogo, setIsLogo] = useState("");

  // 파일 업로드
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleFileInputChange = (e) => {
    // 파일이 들어오면 file에 저장
    setFile(e.target.files[0]);
    setIsLogo(true);
  };

  // 팝업
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModelText] = useState("중복된 아이디 입니다.");

  const closeModal = () => {
    setModalOpen(false);
  };

  const onChangeId = (e) => {
    setInputId(e.target.value);
    setIdMessage("로그인 시 사용될 이메일입니다.");
    setIsId(true);
  };
  const onChangePw = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자 조합으로 8자리 이상 입력해주세요!");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요 : )");
      setIsPw(true);
    }
  };
  const onChangeConPw = (e) => {
    const passwordCurrent = e.target.value;
    setInputConPw(passwordCurrent);
    if (passwordCurrent !== inputPw) {
      setConPwMessage("비밀 번호가 일치하지 않습니다.");
      setIsConPw(false);
    } else {
      setConPwMessage("비밀 번호가 일치 합니다.");
      setIsConPw(true);
    }
  };
  const onChangeName = (e) => {
    setInputName(e.target.value);
    setIsName(true);
  };
  const onChangePhone = (e) => {
    setInputPhone(e.target.value);
    setIsPhone(true);
  };
  const onChangeCompanyName = (e) => {
    setInputCompanyName(e.target.value);
    setIsCompanyName(true);
  };
  const onChangeSizeScale = (e) => {
    setInputSizeScale(e.target.value);
    // if (inputSizeScale === "" || inputSizeScale === "기업 규모 선택") {
    //   setIsSizeScale(false);
    // } else {
    //   setIsSizeScale(true);
    // }
    setIsSizeScale(true);
    console.log("onChangeSizeScale : " + inputSizeScale);
  };
  const onChangeCeo = (e) => {
    setInputCeo(e.target.value);
    setIsCeo(true);
  };
  const onChangeContactNumber = (e) => {
    setInputContactNumber(e.target.value);
    setIsContactNumber(true);
  };
  const onChangeUrl = (e) => {
    setInputUrl(e.target.value);
    setIsUrl(true);
  };
  const onChangeCategory = (e) => {
    setInputCategory(e.target.value);
    setIsCategory(true);
  };
  const onChangeAddress = (e) => {
    setInputAddress(e.target.value);
    setIsAddress(true);
  };
  const onChangeYear = (e) => {
    setInputYear(e.target.value);
    setIsYear(true);
  };
  const onChangeStaff = (e) => {
    setInputStaff(e.target.value);
    setIsStaff(true);
  };
  const onChangeIncome = (e) => {
    setInputIncome(e.target.value);
    setIsIncome(true);
  };
  const onChangeProfile = (e) => {
    setInputProfile(e.target.value);
    setIsProfile(true);
  };

  const Unit = styled.p`
    white-space: nowrap;
  `;

  const onClickLogin = async () => {
    console.log("Click 회원가입");
    // 가입 여부 우선 확인
    const memberCheck = await AxiosApi.memberRegCheck(inputId, inputUrl);
    console.log("가입 가능 여부 확인 : ", memberCheck.data);
    // 가입 여부 확인 후 가입 절차 진행

    // NEXT 클릭 시 이미지 업로드
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("File uploaded successfully!");
      fileRef.getDownloadURL().then((url) => {
        console.log("저장 경로 확인 : " + url);
        setUrl(url);
      });
    });
    if (memberCheck.data === true && url !== null) {
      console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
      const companyReg = await AxiosApi.companyReg(
        inputCompanyName,
        inputSizeScale,
        inputCeo,
        inputContactNumber,
        inputUrl,
        inputCategory,
        inputAddress,
        inputYear,
        inputStaff,
        inputIncome,
        inputProfile,
        url
      );
      const comMemberReg = await AxiosApi.comMemberReg(
        inputId,
        inputPw,
        inputName,
        inputPhone,
        "company"
      );
      console.log(companyReg.data);
      console.log(comMemberReg.data);
      if (companyReg.data === true && comMemberReg.data === true) {
        setModalOpen(true);
        setModelText("회원 가입에 성공 했습니다.");
        navigate("/home");
      } else {
        setModalOpen(true);
        setModelText("회원 가입에 실패 했습니다.");
      }
    } else {
      console.log("이미 가입된 회원 입니다.");
      setModalOpen(true);
      setModelText("이미 가입된 회원 입니다.");
    }
  };

  // 이메일 옵션
  const data = ["기업 규모 선택", "대기업", "중견기업", "중소기업", "스타트업"];

  return (
    <Container>
      <Items className="sign">
        <span>Company Sign Up</span>
      </Items>

      <Items className="item2">
        <Input placeholder="이메일" value={inputId} onChange={onChangeId} />
      </Items>
      <Items className="hint">
        {inputId.length > 0 && (
          <span className={`message ${isId ? "success" : "error"}`}>
            {idMessage}
          </span>
        )}
      </Items>
      <Items className="item2">
        <Input
          type="password"
          placeholder="패스워드"
          value={inputPw}
          onChange={onChangePw}
        />
      </Items>
      <Items className="hint">
        {inputPw.length > 0 && (
          <span className={`message ${isPw ? "success" : "error"}`}>
            {pwMessage}
          </span>
        )}
      </Items>
      <Items className="item2">
        <Input
          type="password"
          placeholder="패스워드 확인"
          value={inputConPw}
          onChange={onChangeConPw}
        />
      </Items>
      <Items className="hint">
        {inputConPw.length > 0 && (
          <span className={`message ${isConPw ? "success" : "error"}`}>
            {conPwMessage}
          </span>
        )}
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="이름"
          value={inputName}
          onChange={onChangeName}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="전화번호 (하이픈(-) 포함)"
          value={inputPhone}
          onChange={onChangePhone}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="기업명"
          value={inputCompanyName}
          onChange={onChangeCompanyName}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="기업 CEO 이름"
          value={inputCeo}
          onChange={onChangeCeo}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="기업 대표 전화 (하이픈(-) 포함)"
          value={inputContactNumber}
          onChange={onChangeContactNumber}
        />
      </Items>
      <Items className="item2">
        <SelectBox value={inputSizeScale} onChange={onChangeSizeScale}>
          {data.map((size, index) => (
            <option key={index}>{size}</option>
          ))}
        </SelectBox>
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="홈페이지 URL ex: (https://www.secret.com)"
          value={inputUrl}
          onChange={onChangeUrl}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="업종"
          value={inputCategory}
          onChange={onChangeCategory}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="기업 주소"
          value={inputAddress}
          onChange={onChangeAddress}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="설립년도 (숫자만 입력)"
          value={inputYear}
          onChange={onChangeYear}
        />
        <Unit>년</Unit>
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="직원수 (숫자만 입력)"
          value={inputStaff}
          onChange={onChangeStaff}
        />
        <Unit>명</Unit>
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="연봉 (만 단위로 입력)"
          value={inputIncome}
          onChange={onChangeIncome}
        />
        <Unit>만 원</Unit>
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="기업 소개"
          value={inputProfile}
          onChange={onChangeProfile}
        />
      </Items>
      <Items className="item2">
        <InputNone>기업 로고 (정사각형)</InputNone>
        <input type="file" onChange={handleFileInputChange} />
      </Items>

      <Items className="item2">
        {isId &&
        isPw &&
        isConPw &&
        isName &&
        isPhone &&
        isCompanyName &&
        isSizeScale &&
        isCeo &&
        isContactNumber &&
        isUrl & isCategory &&
        isAddress &&
        isYear &&
        isStaff &&
        isIncome &&
        isProfile &&
        isLogo ? (
          <Button enabled onClick={onClickLogin}>
            NEXT
          </Button>
        ) : (
          <Button disabled>NEXT</Button>
        )}
        <Modal open={modalOpen} close={closeModal} header="오류">
          {modalText}
        </Modal>
      </Items>
    </Container>
  );
};

export default CompanySignup;
