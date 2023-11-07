import styled from "styled-components";
import Checkbox from "../../components/CheckBox";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ed342e;
  font-size: 30px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;
const ListEl = styled.li`
  margin: 45px 3.2vw;
  @media (max-width: 1024px) {
    margin: 45px 6.2vw;
  }
  @media (max-width: 768px) {
    margin: 45px 9.2vw;
  }
  @media (max-width: 480px) {
    margin: 45px 12.2vw;
  }
`;

const Condition = (props) => {
  return (
    <>
      <List>
        <ListEl>
          <Checkbox text={"전체 동의하기"} />
        </ListEl>
        <ListEl>
          <Checkbox text={"9 3/4 이용약관"} />
        </ListEl>
        <ListEl>
          <Checkbox text={"[필수]개인정보 수집이용 및 약관"} />
        </ListEl>
        <ListEl>
          <Checkbox text={"[선택]개인정보 수집이용 및 약관"} />
        </ListEl>
        {props.user === "company" && (
          <ListEl>
            <Checkbox text={"단체 회원 이용 시 주의사항에 대한 동의"} />
          </ListEl>
        )}
      </List>
    </>
  );
};

// 외부에서 props가 안들어 왔을경우 props.user 디폴트 값을 "user"로 설정
Condition.defaultProps = {
  user: "user",
};

export default Condition;
