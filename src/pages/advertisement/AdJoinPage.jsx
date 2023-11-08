import styled from "styled-components";
import TransBtn from "../../components/Button";
import Modal from "../../util/Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";

const Container = styled.div`
  height: 800px;
  color: var(--RED);
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 1200px;
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
  //   const navigate = useNavigate();
  //   //팝업 처리
  //   const [modalOpen, setModalOpen] = useState(false);
  //   const closeModal = () => {
  //     setModalOpen(false);
  //   };
  //   const sucModal = () => {
  //     setModalOpen(false);
  //     navigate("/AdPage");
  //   };
  //  const onClickBtn = (price) => {
  //   swich (price) {
  //     case 1:
  //       navigate("/");
  //       setModalOpen(true);
  //       break;
  //       case 2:
  //         navigate("/");
  //         setModalOpen(true);
  //         break;
  //         case 3:
  //           navigate("/");
  //           setModalOpen(true);
  //           default:
  //             break;
  //   }

  //  }
  //  const onClickLogin = async () => {
  //   //로그인을 위한 axios 호출
  //   const res = await AxiosApi.memberLogin(inputId, inputPw);
  //   console.log(res.data);
  //   if (res.data === true) {
  //     window.localStorage.setItem("userId", inputId); // 브라우저에서 임시로 값을 저장하는 기술
  //     window.localStorage.setItem("userPw", inputPw);
  //     window.localStorage.setItem("isLogin", "TRUE");
  //     navigate("/home");
  //   } else {
  //     setModalOpen(true);
  //   }
  // };
  return (
    <Container>
      <StandardBox>
        <Box>
          <BoxTitle>STANDARD</BoxTitle>
          <Period>1주일</Period>
          <Price>가격</Price>
          <TransBtn width="200px" height="65px" margin="80px" fontsize="30px">
            신청하기
          </TransBtn>
        </Box>
      </StandardBox>
      <DeluxeBox>
        <Box>
          <BoxTitle>DELUXE</BoxTitle>
          <Period>1개월</Period>
          <Price>가격</Price>
          <TransBtn width="200px" height="65px" margin="80px" fontsize="30px">
            신청하기
          </TransBtn>
        </Box>
      </DeluxeBox>
      <PremiumBox>
        <Box>
          <BoxTitle>PREMIUM</BoxTitle>
          <Period>3개월</Period>
          <Price>가격</Price>
          <TransBtn width="200px" height="65px" margin="80px" fontsize="30px">
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
