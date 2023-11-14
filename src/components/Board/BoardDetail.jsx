import { useState, useEffect } from "react";
import BoardAxiosApi from "../../api/BoardAxiosApi";
import { useParams } from "react-router-dom";
import styled from "styled-components";

// 여기에 스타일드 컴포넌트를 정의합니다.
const Container = styled.div`
  padding: 20px;
  margin: auto;
  max-width: 800px;
  height: 90%;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 8px;
`;

const Title = styled.h1`
  color: #ed342e;
  font-size: 2em;
  margin: 40px 0 40px;
`;

const Content = styled.p`
  color: #666;
  height: 50%;
  line-height: 2;
`;

const CommentForm = styled.form`
  margin-top: 20px;
  clear: left;
`;

const CommentInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  margin-bottom: 10px;
  border: 1px solid #ed342e;
  border-radius: 5px;
  box-sizing: border-box;
`;
const SubmitButton = styled.button`
  background-color: #ed342e;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  /* display: inline-block; */
  font-size: 16px;
  margin: 4px 2px;
  transition-duration: 0.4s;
  cursor: pointer;

  &:hover {
    background-color: #ed342e;
  }
`;
const CommentList = styled.ul`
  list-style: none;
  padding: 0;
  height: 20%;
`;

const CommentItem = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid #ddd;
`;

const CommentContent = styled.p`
  color: #444;
  font-size: 1em;
  margin: 0;
  padding: 0;
  font-size: 13px;
  float: left;
`;
const CommentUser = styled.p`
  color: #555;
  font-style: italic;
  font-size: 13px;
  margin: 0;
  padding: 0;
  text-align: right;
`;

const Buttoncontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BoardDate = styled.p`
  color: #ccc;
  font-size: 0.8em;
  padding: 10px;
  text-align: right;
  border-bottom: 1px solid #ffc8c6;
`;

function BoardDetail() {
  const { id } = useParams();
  console.log(`useParams Board ID: ${id}`);
  const [board, setBoard] = useState("");
  const [comments, setComments] = useState("");
  const [inputComment, setInputComment] = useState("");
  const [comAddFlag, setComAddFlag] = useState(false); // 댓글 추가 성공 여부
  const [showComments, setShowComments] = useState(false);
  const toggleComments = () => {
    setShowComments(!showComments);
  };

  const userId = localStorage.getItem("Id");
  console.log(`Board ID: ${id}`);

  useEffect(() => {
    const getBoardDetail = async () => {
      try {
        console.log(`Board ID in useEffect: ${id}`);
        const response = await BoardAxiosApi.boardDetail(id);
        console.log(response.data);
        setBoard(response.data);
        const response2 = await BoardAxiosApi.commentList(id);
        setComments(response2.data);
        console.log(`Board ID: ${id}`);
      } catch (error) {
        console.log(error);
      }
    };
    if (id) {
      getBoardDetail();
    }
  }, [comAddFlag, id]);

  const handleCommentChange = (e) => {
    setInputComment(e.target.value);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    try {
      const response = await BoardAxiosApi.commentWrite(
        userId,
        id,
        inputComment
      );
      console.log(response);
      setInputComment("");
      setComAddFlag(!comAddFlag);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <Title>{board.title}</Title>
      <Content>{board.content}</Content>
      <BoardDate>{board.regDate}</BoardDate>

      <CommentForm onSubmit={handleSubmitComment}>
        <label>
          <CommentInput
            type="text"
            value={inputComment}
            onChange={handleCommentChange}
          />
        </label>
        <Buttoncontainer>
          <SubmitButton onClick={toggleComments}>
            {showComments ? "댓글 숨기기" : `댓글보기 ${comments.length}`}
          </SubmitButton>
          <SubmitButton type="submit">댓글등록</SubmitButton>
        </Buttoncontainer>
      </CommentForm>
      {showComments && (
        <CommentList>
          {comments &&
            comments.map((comment) => (
              <CommentItem key={comment.replyId}>
                <CommentContent>{comment.content}</CommentContent>
                <CommentUser>{comment.customerId}</CommentUser>
              </CommentItem>
            ))}
        </CommentList>
      )}
    </Container>
  );
}

export default BoardDetail;
