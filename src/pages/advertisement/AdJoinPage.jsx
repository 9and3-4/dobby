import styled from "styled-components";
import TransBtn from "../../components/Button";
import Modal from "../../util/Modal";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../api/AxiosApi";
import { storage } from "../../api/Firebase";

const Container = styled.div`
  /* height: 800px; */
  margin: 100px 0;
  color: var(--RED);
  display: flex;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    height: 1700px;
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
const InputImg = styled.input`
  margin-bottom: 50px;
  margin-left: 70px;
`;
const AdJoinPage = () => {
  const navigate = useNavigate();
  const today = new Date();
  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState(""); // Date 함수 사용

  //팝업 처리
  const [modalOpen, setModalOpen] = useState(false); // confirm(확인)이 있는 Modal
  const [modalOpen2, setModalOpen2] = useState(false); // close(취소)만 있는 Modal
  const [modalText, setModalText] = useState("");
  const [application, setApplication] = useState(false); // 신청 확인 버튼
  // Modal 닫기 버튼
  const closeModal = () => {
    setModalOpen(false);
  };
  const closeModal2 = () => {
    setModalOpen2(false);
  };
  // Modal 확인 버튼
  const sucModal = () => {
    setApplication(true);
    setModalOpen(false);
  };

  // 날짜 형식 'YYYY-MM-DD'으로 변환
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  // 미래 날짜 계산하기
  function calculateFutureDate(p2) {
    const today = new Date();
    const futureDate = new Date(today);
    futureDate.setDate(today.getDate() + p2);
    console.log(formatDate(futureDate));
    return formatDate(futureDate);
  }
  // firebase에 이미지 업로드
  const imageUpload = () => {
    const storageRef = storage.ref();
    const fileRef = storageRef.child(file.name);
    fileRef.put(file).then(() => {
      console.log("File uploaded successfully!");
      fileRef.getDownloadURL().then((url) => {
        console.log("저장 경로 확인 : " + url);
        setUrl(url);
      });
    });
    return url;
  };

  const priceSum = async (p1, p2) => {
    // 첨부된 파일이 있을 때,
    if (file !== null) {
      setModalOpen(true);
      setModalText("신청하시겠습니까?");
      // // Modal에서 확인 버튼 눌렸을 때,
      if (application === true) {
        setPrice(p1); // 가격 price에 전달
        const futureDate = calculateFutureDate(p2); // 미래 날짜 계산
        try {
          const urlImage = imageUpload();
          console.log(urlImage, futureDate, formatDate(today), price);
          // AxiosApi로 광고 신청한 정보 전송
          const adApplication = await AxiosApi.adApplication(
            window.localStorage.getItem("userId"),
            urlImage, // firebase를 이용해 url 주소 받아오기
            formatDate(today), // 오늘 날짜
            futureDate, // 오늘 날짜 + 선택한 기간
            price
          );
          console.log("광고 신청 정보 : " + adApplication.data);
          setApplication(false);
          if (adApplication.data === true) {
            setModalOpen2(true);
            setModalText(
              "광고 신청이 완료되었습니다. 관리자 승인 후 게시됩니다. 자세한 사항은 이메일을 확인해주십시오."
            );
            navigate("/home");
          } else {
            // setModalOpen2(true);
            setModalText(
              "광고 신청을 실패했습니다. 자세한 사항은 관리자에게 문의해주십시오."
            );
          }
        } catch (error) {
          console.error("Error uploading image:", error);
          setModalOpen2(true);
          setModalText("이미지 업로드 중 오류가 발생했습니다.");
        }
      }
    } else {
      // 첨부된 파일이 없을 때
      setModalOpen2(true);
      setModalText("사진 파일을 첨부해주십시오.");
    }
  };

  // 파일 업로드
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");

  const handleFileInputChange = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);
    } else {
      console.log("File selection canceled");
    }
  };

  const onClickBtn = (price) => {
    switch (price) {
      case 1:
        priceSum("70", 7); // 70만원 7일
        break;
      case 2:
        priceSum("250", 30); // 1개월
        break;
      case 3:
        priceSum("800", 90); // 3개월
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
          <Period>7일</Period>
          <Price>70 만 원</Price>
          <TransBtn
            width="200px"
            height="65px"
            margin="80px"
            fontsize="30px"
            onClick={() => onClickBtn(1)}
          >
            신청하기
          </TransBtn>
          <InputImg type="file" onChange={handleFileInputChange} />
        </Box>
      </StandardBox>
      <DeluxeBox>
        <Box>
          <BoxTitle>DELUXE</BoxTitle>
          <Period>30일</Period>
          <Price>250 만 원</Price>
          <TransBtn
            width="200px"
            height="65px"
            margin="80px"
            fontsize="30px"
            onClick={() => onClickBtn(2)}
          >
            신청하기
          </TransBtn>
          <InputImg type="file" onChange={handleFileInputChange} />
        </Box>
      </DeluxeBox>
      <PremiumBox>
        <Box>
          <BoxTitle>PREMIUM</BoxTitle>
          <Period>90일</Period>
          <Price>800 만 원</Price>
          <TransBtn
            width="200px"
            height="65px"
            margin="80px"
            fontsize="30px"
            onClick={() => onClickBtn(3)}
          >
            신청하기
          </TransBtn>
          <InputImg type="file" onChange={handleFileInputChange} />
          <Modal
            open={modalOpen}
            type="true"
            confirm={sucModal}
            close={closeModal}
            header="광고 신청"
          >
            {modalText}
          </Modal>
          <Modal open={modalOpen2} close={closeModal2} header="알림">
            {modalText}
          </Modal>
        </Box>
      </PremiumBox>
    </Container>
  );
};
export default AdJoinPage;
