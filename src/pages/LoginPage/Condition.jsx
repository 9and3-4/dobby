import styled from "styled-components";
import Checkbox from "../../components/CheckBox";

const List = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #ed342e;
  font-size: 30px;
`;
const ListEl = styled.li`
  margin: 3.2vw;
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
Condition.defaultProps = {
  user: "user",
};

export default Condition;
