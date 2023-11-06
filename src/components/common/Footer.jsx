import styled from "styled-components";

const Position = styled.div`
  position: absolute;
  justify-content: center;
  bottom: 0;
`;

const Container = styled.div`
  padding: 0 10px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
const Text = styled.p`
  font-size: 20px;
`;

const Line = styled.hr`
  border: 0;
  border-top: 1px solid #a13333; /* 원하는 색상으로 대체  93152d */
  width: 100vw; /* 줄의 너비 조정 가능 */
`;

const Footer = () => {
  return (
    <Position>
      <Line />
      <Container>
        <Text>Footer</Text>
      </Container>
    </Position>
  );
};
export default Footer;
