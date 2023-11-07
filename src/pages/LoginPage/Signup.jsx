import React, { useState } from "react";
import styled from "styled-components";

const Signup = () => {
  // 키보드 입력
  const [inputName, setInputName] = useState("");
  const [inputNickName, setInputNickName] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputPwCheck, setInputPwCheck] = useState("");
  const [inputCompany, setInputCompany] = useState("");
  const [inputCompanyEmail, setInputCompanyEmail] = useState("");
  const [inputVerificationCode, setInputVerificationCode] = useState("");

  // 오류 메세지
  const [pwMessage, setPwMessage] = useState("");
  const [pwCheckMessage, setPwCheckMessage] = useState("");
  const [companyEmailMessage, setCompanyEmailMessage] = useState("");

  // 유효성검사

  const [isNickName, setIsNickName] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isPwCheck, setIsPwCheck] = useState(false);
  const [isCompanyEmail, setCompanyEmail] = useState(false);
  const [isVerificationCode, setVerificationCode] = useState(false);

  // 팝업
  const [modalOpen, setModalOpen] = useState(false);
  const [modalText, setModalText] = useState("이미 가입된 이메일 입니다.");

  const closeModal = () => {
    setModalOpen(false);
  };

  const onChangePw = (e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수 문자 조합으로 8자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMessage("안전한 비밀번호에요 !");
      setIsPw(true);
    }
  };

  const onChangePwCheck = (e) => {
    const passwordCurrent = e.target.value;
    setIsPwCheck(passwordCurrent);
    if (passwordCurrent !== inputPw) {
      setPwCheckMessage("비밀 번호가 일치하지 않습니다.");
      setIsPwCheck(false);
    } else {
      setPwCheckMessage("비밀 번호가 일치 합니다. )");
      setIsPwCheck(true);
    }
  };

  return <></>;
};

export default Signup;
