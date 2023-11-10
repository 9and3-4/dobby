import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const BackButton = styled.button`
  width: 150px;
  background-color: #ed342e;
  color: white;
  margin: 15px 15px;
  padding: 5px;
  border-radius: 15px;
  border: 2px solid #ed342e;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    color: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 1);
    transform: translateY(-2px);
  }
`;

function BackButtonComponent() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return <BackButton onClick={goBack}>이전으로</BackButton>;
}

export default BackButtonComponent;
