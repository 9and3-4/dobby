import styled, { css } from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../../util/Modal";
import AxiosApi from "../../api/AxiosApi";
import newLogo from "../../images/newlogo.jpg";

const Input = styled.input`
  margin-left: 30px;
  margin-right: 30px;
  width: 100%; /* 원하는 너비 설정 */
  height: auto; /* 높이값 초기화 */
  line-height: normal; /* line-height 초기화 */
  padding: 0.8em 0.5em; /* 원하는 여백 설정, 상하단 여백으로 높이를 조절 */
  font-family: inherit; /* 폰트 상속 */
  border: 1px solid #ed342e;
  border-radius: 18px; /* iSO 둥근모서리 제거 */
  outline-style: none; /* 포커스시 발생하는 효과 제거를 원한다면 */
`;

const TitleItem = styled.div`
  margin-bottom: 100px;
  padding: 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const LogoImage = styled.img`
  width: 50px;
  height: auto;
`;

const Title = styled.p`
  color: #ed342e;
  font-size: 18px;
  padding-left: 15px;
`;

const Button = styled.button`
  margin-top: 60px;
  margin-left: 30px;
  margin-right: 30px;
  cursor: pointer;
  width: 100%; /* 원하는 너비 설정 */
  height: 50px;
  color: white;
  background-color: #ed342e;
  font-size: 15px;
  /* font-weight: 400; */
  border-radius: 18px;
  border: #ed342e;
  font-weight: 700;
  ${(props) =>
    props.enabled &&
    css`
      background-color: #ed342e;
    `};

  &:active {
    border: #ed342e;
    font-weight: 700;
    background-color: #90130e;
  }
`;

const Container = styled.div`
  height: 800px;
  width: 500px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 500px;
  margin: auto;

  .success {
    color: #ed342e;
  }
  .error {
    color: #ed342e;
  }
`;

const Items = styled.div`
  display: flex;
  align-items: center;

  &.item1 {
    margin-top: 100px;
    margin-bottom: 40px;
    justify-content: center;
  }
  &.item2 {
    margin: 10px;
    align-items: center;
  }
  &.item3 {
    margin-top: 10px;
    margin-left: 40px;
    margin-right: 40px;
    justify-content: space-between;
    color: #999;
    font-size: 14px;
  }
  &.hint {
    margin-top: -5px;
    margin-bottom: 10px;
    margin-right: 40px;
    justify-content: right;
    font-size: 12px;
    color: #999;
  }

  &.signup {
    justify-content: right;
    color: #ed342e;
    font-weight: 700;
    margin-top: 10px;
    margin-right: 40px;
    font-size: 14px;
    .link_style {
      color: #ed342e;
      text-decoration-line: none;
    }
  }
`;

const Login = () => {
  const navigate = useNavigate();

  // 키보드 입력
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");

  // 오류 메시지
  const [idMessage, setIdMessage] = useState("");
  const [pwMessage, setPwMessage] = useState("");

  // 유효성 검사
  const [isId, setIsId] = useState("");
  const [isPw, setIsPw] = useState("");

  //팝업 처리
  const [modalOpen, setModalOpen] = useState(false);
  const closeModal = () => {
    setModalOpen(false);
  };

  // 5~ 20자리의 영문자, 숫자, 언더스코어(_)로 이루어진 문자열이 유효한 아이디 형식인지 검사하는 정규표현식
  const onChangeId = (e) => {
    const regexId = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    setInputId(e.target.value);
    if (!regexId.test(e.target.value)) {
      setIdMessage("유효한 이메일 형식이 아닙니다.");
      setIsId(false);
    } else {
      setIdMessage("올바른 이메일 형식입니다.");
      setIsId(true);
    }
  };

  const onChangePw = (e) => {
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordCurrent = e.target.value;
    setInputPw(passwordCurrent);
    if (!passwordRegex.test(passwordCurrent)) {
      setPwMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요.");
      setIsPw(false);
    } else {
      setPwMessage("올바른 비밀번호 입니다.");
      setIsPw(true);
    }
  };

  const handleTitleItemClick = () => {
    // 클릭 시 "/"로 이동
    navigate("/");
  };
  const onClickLogin = async () => {
    //로그인을 위한 axios 호출
    const res = await AxiosApi.memberLogin(inputId, inputPw);
    const res2 = await AxiosApi.memberGet(inputId);
    console.log(res.data);
    if (res.data === true) {
      window.localStorage.setItem("userId", inputId); // 브라우저에서 임시로 값을 저장하는 기술
      window.localStorage.setItem("userPw", inputPw);
      window.localStorage.setItem("isLogin", "TRUE");
      window.localStorage.setItem("userInfo", res2.data[0]);
      window.localStorage.setItem("userRole", res2.data[0].role);
      if (res2.data[0].role === "user") {
        window.localStorage.setItem("userNickName", res2.data[0].nickName);
        navigate("/");
      } else if (res2.data[0].role === "company") {
        const res3 = await AxiosApi.customerCompanyGet(inputId); // role이 company이면 email로 회사 정보 가져오기
        window.localStorage.setItem("userCompanyName", res3.data[0].name);
        window.localStorage.setItem();
        navigate("/CompanyMyPage");
      } else {
        navigate("/AdminMain");
      }
    } else {
      setModalOpen(true);
    }
  };

  return (
    <Container>
      <TitleItem onClick={handleTitleItemClick}>
        <LogoImage src={newLogo} alt="logo image" />
        <Title>9&3/4 Platform</Title>
      </TitleItem>
      <></>
      <Items className="item2">
        <Input placeholder="이메일" value={inputId} onChange={onChangeId} />
      </Items>
      <Items className="hint">
        {inputId.length > 0 && (
          <span className={`${isId ? "success" : "error"}`}>{idMessage}</span>
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
          <span className={`${isPw ? "success" : "error"}`}>{pwMessage}</span>
        )}
      </Items>
      <Items className="item2">
        {isId && isPw ? (
          <Button enabled onClick={onClickLogin}>
            로그인
          </Button>
        ) : (
          <Button disabled>로그인</Button>
        )}
      </Items>
      <Modal open={modalOpen} close={closeModal} header="오류">
        아이디 및 패스워드를 재확인해 주세요.
      </Modal>
      {/* <Items className="signup">
        <Link to="/Condition" className="link_style">
          <span>개인 회원가입</span>
        </Link>
      </Items>
      <Items className="signup">
        <Link to="/Condition" className="link_style">
          <span>기업 회원가입</span>
        </Link>
      </Items> */}
      <Items className="signup">
        <Link
          to="/Condition"
          className="link_style"
          state={{ userType: "user" }}
        >
          <span>개인 회원가입</span>
        </Link>
      </Items>
      <Items className="signup">
        <Link
          to="/Condition"
          className="link_style"
          state={{ userType: "company" }}
        >
          <span>기업 회원가입</span>
        </Link>
      </Items>
    </Container>
  );
};

export default Login;
