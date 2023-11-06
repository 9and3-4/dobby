import Header from "../components/Header";
import Footer from "../components/Footer";
import { Wrapper } from "../components/Styles";
import BoardWrite from "../components/board/BoardWrite/BoardWrite";

const BoardWritePage = () => {
  return (
    <>
      <Wrapper>
        <Header />
        <BoardWrite />
        <Footer />
      </Wrapper>
    </>
  );
};

export default BoardWritePage;
