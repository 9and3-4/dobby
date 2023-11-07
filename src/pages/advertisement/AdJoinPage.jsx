import styled from "styled-components";

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
const Join = styled.button`
  font-size: 30px;
  width: 200px;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 80px;
  border: 2px solid var(--RED);
  background-color: transparent; // 버튼 배경색 없애기
  color: var(--RED);
  &:hover {
    background-color: var(--RED);
    color: white;
  }
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    margin-top: 20px;
  }
`;

const AdJoinPage = () => {
  return (
    <Container>
      <StandardBox>
        <Box>
          <BoxTitle>STANDARD</BoxTitle>
          <Period>1주일</Period>
          <Price>가격</Price>
          <Join>신청하기</Join>
        </Box>
      </StandardBox>
      <DeluxeBox>
        <Box>
          <BoxTitle>DELUXE</BoxTitle>
          <Period>1개월</Period>
          <Price>가격</Price>
          <Join>신청하기</Join>
        </Box>
      </DeluxeBox>
      <PremiumBox>
        <Box>
          <BoxTitle>PREMIUM</BoxTitle>
          <Period>3개월</Period>
          <Price>가격</Price>
          <Join>신청하기</Join>
        </Box>
      </PremiumBox>
    </Container>
  );
};
export default AdJoinPage;
