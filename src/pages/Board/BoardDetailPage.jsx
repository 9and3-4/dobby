import BoardDetail from "../../components/Board/BoardDetail";
import { useParams } from "react-router-dom";

const BoardDetailPage = () => {
  const { id } = useParams();
  console.log("Board ID:", id);
  return (
    <>
      <BoardDetail />
    </>
  );
};

export default BoardDetailPage;
