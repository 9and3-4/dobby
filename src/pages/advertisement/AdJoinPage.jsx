import styled from "styled-components";
import TransBtn from "../../components/Button";
import Modal from "../../util/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";

const Container = styled.div`
  /* height: 800px; */
  margin: 100px 0;
  color: var(--RED);
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 1500px;
  }
`;
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const StandardBox = styled.div`
  flex: 1; // 균일한 비율
  border-right: 1px solid var(--RED);
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
    border-right: none;
    border-bottom: 1px solid var(--RED);
  }
`;
const DeluxeBox = styled.div`
  flex: 1;
  border-right: 1px solid var(--RED);
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
    border-right: none;
    border-bottom: 1px solid var(--RED);
  }
`;
const PremiumBox = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    margin-top: 50px;
  }
`;

const BoxTitle = styled.div`
  margin-top: 150px;
  font-size: 70px;
  @media only screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
const Period = styled.div`
  margin-top: 150px;
  font-size: 40px;
  @media only screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;
const Price = styled.div`
  margin-top: 80px;
  font-size: 20px;
  @media only screen and (max-width: 768px) {
    margin-top: 20px;
  }
`;

const AdJoinPage = () => {
  const navigate = useNavigate();
  const today = new Date(); // 오늘 날짜
  const url = ""; // 이미지 주소(임시)
  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState(); // Date 함수 사용

  const priceSum = async (e) => {
    setPrice(e);
    setPeriod(today + e); // 오늘 날짜 + 선택한 기간 나중에 수정
    console.log("priceSum 광고 DB에 넣기");
    const adApplication = await AxiosApi.adApplication(
      window.localStorage.getItem("userId"),
      url, // firebase를 이용해 url 주소 받아오기
      today, // 오늘 날짜
      period, // 오늘 날짜 + 선택한 기간
      price
    );
    console.log("광고 신청 정보 : " + adApplication.data[0]);
    if (adApplication.data[0]) {
      //setModalOpen(true);
      // setModelText("광고 신청이 완료되었습니다. 관리자 승인 후 게시됩니다. 자세한 사항은 이메일을 확인해주십시오.")
      navigate("/home");
    } else {
      //setModalOpen(true);
      //setModelText("광고 신청을 실패했습니다. 자세한 사항은 관리자에게 문의해주십시오.")
    }
  };

  //     //팝업 처리
  //     const [modalOpen, setModalOpen] = useState(false);
  //     const closeModal = () => {
  //       setModalOpen(false);
  //     };
  //     const sucModal = (price) => {
  //       setModalOpen(false);
  //       navigate("/AdPage");
  //     };

  const onClickBtn = (price) => {
    switch (price) {
      case 1:
        priceSum("");
        break;
      case 2:
        priceSum("");
        break;
      case 3:
        priceSum("");
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <StandardBox>
        <Box>
          <BoxTitle>STANDARD</BoxTitle>
          <Period>1주일</Period>
          <Price>가격</Price>
          <TransBtn
            width="200px"
            height="65px"
            margin="80px"
            fontsize="30px"
            onClick={() => onClickBtn(1)}
          >
            신청하기
          </TransBtn>
        </Box>
      </StandardBox>
      <DeluxeBox>
        <Box>
          <BoxTitle>DELUXE</BoxTitle>
          <Period>1개월</Period>
          <Price>가격</Price>
          <TransBtn
            width="200px"
            height="65px"
            margin="80px"
            fontsize="30px"
            onClick={() => onClickBtn(2)}
          >
            신청하기
          </TransBtn>
        </Box>
      </DeluxeBox>
      <PremiumBox>
        <Box>
          <BoxTitle>PREMIUM</BoxTitle>
          <Period>3개월</Period>
          <Price>가격</Price>
          <TransBtn
            width="200px"
            height="65px"
            margin="80px"
            fontsize="30px"
            onClick={() => onClickBtn(3)}
          >
            신청하기
          </TransBtn>
          {/* <Modal
            open={modalOpen}
            type="true"
            confirm={sucModal}
            close={closeModal}
            header="오류"
          >
            아이디 및 패스워드를 재확인해 주세요.
          </Modal> */}
        </Box>
      </PremiumBox>
    </Container>
  );
};
export default AdJoinPage;
