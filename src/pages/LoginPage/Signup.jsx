import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../util/Modal";
import AxiosApi from "../../api/AxiosApi";
import {
  Input,
  Button,
  Container,
  Items,
} from "../../components/signup/SignupComponent";
import { SelectBox } from "../../components/signup/SignupEmailComponent";
import styled from "styled-components";

const AuthBtn = styled.button`
  width: 330px;
  height: 40px;
  background-color: transparent;
  border: 1px solid var(--RED);
`;
const Signup = () => {
  const navigate = useNavigate();
  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputAuth, setInputAuth] = useState(""); // 백에서 받아온 인증번호
  const [inputAuthCheck, setInputAuthCheck] = useState(""); // 내가 입력한 인증번호
  const [inputPw, setInputPw] = useState("");
  const [inputConPw, setInputConPw] = useState("");
  const [inputName, setInputName] = useState("");
  const [inputNickName, setInputNickName] = useState("");
  const [inputCompanyName, setInputCompanyName] = useState("");
  const [inputEmail, setInputEmail] = useState("naver.com");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");
  const [conPwMessage, setConPwMessage] = useState("");
  const [authMessage, setAuthMessage] = useState("");
  const [authCheckMessage, setAuthCheckMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isPw, setIsPw] = useState(false);
  const [isConPw, setIsConPw] = useState(false);
  const [isName, setIsName] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isCompanyName, setIsCompanyName] = useState(false);
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
  const onChangeAuthCheck = (e) => {
    setInputAuthCheck(e.target.value);
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
  const onChangeNickName = (e) => {
    setInputNickName(e.target.value);
    setIsNickName(true);
  };
  const onChangeCompanyName = (e) => {
    setInputCompanyName(e.target.value);
    setIsCompanyName(true);
  };

  // 인증번호 보내는 axios
  const onClickAuthBtn = async () => {
    console.log("인증번호받기 버튼 클릭");
    const authCheck = await AxiosApi.authCheck(inputEmail);
    console.log(authCheck.data);
    setInputAuth(String(authCheck.data)); // 백엔드에서 인증번호 가져오기
    setAuthMessage("  인증번호가 발송되었습니다.");
  };
  const onClickAuthCheckBtn = async () => {
    console.log("인증번호 체크");
    // 내가 입력한 인증 번호 === 받아온 인증 번호
    if (inputAuthCheck === inputAuth) {
      setIsAuth(true);
      setAuthCheckMessage("인증번호가 일치합니다.");
    } else {
      console.log(inputAuthCheck + inputAuth);
      setIsAuth(false);
      setAuthCheckMessage("인증번호를 다시 확인해주십시오.");
    }
  };

  const onClickLogin = async () => {
    console.log("Click 회원가입");
    // 가입 여부 우선 확인
    const memberCheck = await AxiosApi.memberRegCheck(inputEmail);
    console.log("가입 가능 여부 확인 : ", memberCheck.data);
    // 가입 여부 확인 후 가입 절차 진행

    if (memberCheck.data === true) {
      console.log("가입된 아이디가 없습니다. 다음 단계 진행 합니다.");
      const memberReg = await AxiosApi.memberReg(
        inputEmail,
        inputPw,
        inputName,
        inputNickName,
        "user"
      );
      console.log(memberReg.data);
      if (memberReg.data === true) {
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
  const [data, setData] = useState([]);
  const [selected, setSelected] = useState("naver.com");

  const handleSelect = (e) => {
    setSelected(e.target.value);
  };

  // 이메일 합치기
  useEffect(() => {
    console.log("setSelected : " + selected);
    setInputEmail(inputId + "@" + selected);
    console.log("inputEmail : " + inputEmail);
  }, [selected, inputId, inputEmail]);

  // 회사 테이블에서 url 가져와서 @ 뒤에 형식으로 만들기 위해 문자열 자르기
  useEffect(() => {
    const filterOption = async () => {
      const companyList = await AxiosApi.companyGet();
      const newData = companyList.data;
      const extractedData = [];
      for (let i = 0; i < newData.length; i++) {
        if (newData[i] && newData[i].url) {
          const url = newData[i].url;
          let startIndex;

          if (url.startsWith("http://www.") || url.startsWith("https://www.")) {
            // "www."으로 시작하는 경우
            startIndex = url.indexOf("//") + 6;
          } else {
            // "www."으로 시작하지 않는 경우
            startIndex = url.indexOf("//") + 2;
          }

          if (startIndex !== -1) {
            extractedData.push(url.slice(startIndex));
          } else {
            extractedData.push(url);
          }
        }
      }

      console.log(extractedData);
      setData(extractedData);
    };
    filterOption();
  }, []);

  return (
    <Container>
      <Items className="sign">
        <span>User Sign Up</span>
      </Items>

      <Items className="item2">
        <Input placeholder="이메일" value={inputId} onChange={onChangeId} />
        <p>@</p>
        <SelectBox onChange={handleSelect} value={selected}>
          {data.map((url, index) => (
            <option key={index}>{url}</option>
          ))}
        </SelectBox>
        <AuthBtn onClick={onClickAuthBtn}>인증번호받기</AuthBtn>
      </Items>
      <Items className="hint">
        {inputId.length > 0 && (
          <span className={`message ${isId ? "success" : "error"}`}>
            {idMessage}
          </span>
        )}
      </Items>
      <Items className="hint">
        {/* 인증번호 가지고 왔을 때 (버튼 클릭 후) */}
        {inputAuth && <span className>{authMessage}</span>}
      </Items>
      <Items className="item2">
        <Input
          type="auth"
          placeholder="인증번호 6자리"
          value={inputAuthCheck}
          onChange={onChangeAuthCheck}
        />
        <AuthBtn onClick={onClickAuthCheckBtn}>인증번호확인</AuthBtn>
      </Items>
      <Items className="hint">
        {inputAuthCheck.length > 0 && (
          <span className={`message ${isAuth ? "success" : "error"}`}>
            {authCheckMessage}
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
          placeholder="닉네임"
          value={inputNickName}
          onChange={onChangeNickName}
        />
      </Items>
      <Items className="item2">
        <Input
          type="text"
          placeholder="소속 회사명"
          value={inputCompanyName}
          onChange={onChangeCompanyName}
        />
      </Items>

      <Items className="item2">
        {isId &&
        isPw &&
        isConPw &&
        isName &&
        isNickName &&
        isCompanyName &&
        isAuth ? (
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

export default Signup;
