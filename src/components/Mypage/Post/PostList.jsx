import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import AxiosApi from "../../../api/AxiosApi";
import PostDate from "./PostDate";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 65vw;
  justify-content: center; /* 수평 가운데 정렬 */

  @media only screen and (max-width: 768px) {
    width: 95vw;
  }
`;

const PostTable = styled.table`
  border-collapse: collapse;
  width: 100%;
`;

const TableHead = styled.thead`
  text-align: center;
`;

const TableRow = styled.tr`
  color: var(--RED);
`;

const TableHeader = styled.th`
  padding: 8px;
  text-align: center;
  border-top: 1px solid var(--RED);
  border-bottom: 1px solid var(--RED);

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const TableBody = styled.tbody``;

const TableData = styled.td`
  padding: 8px;
  text-align: center;
  cursor: pointer;

  @media only screen and (max-width: 768px) {
    width: 100vw;
  }
`;

const PostList = () => {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPostList = async () => {
      try {
        const rsp = await AxiosApi.mypostlist(
          window.localStorage.getItem("userId")
        );
        console.log(rsp.data);
        setPostList(rsp.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchPostList();
  }, []);

  const detailClick = (id) => {
    navigate(`/PostDetail/${id}`);
  };

  return (
    <Container>
      <PostTable>
        <TableHead>
          <TableRow>
            <TableHeader>Post ID</TableHeader>
            <TableHeader>제목</TableHeader>
            <TableHeader>작성자</TableHeader>
            <TableHeader>작성일</TableHeader>
            <TableHeader>조회수</TableHeader>
            <TableHeader>♡</TableHeader>
          </TableRow>
        </TableHead>
        <TableBody>
          {postList &&
            postList.map((post) => (
              <TableRow key={post.id} onClick={() => detailClick(post.id)}>
                <TableData>{post.id}</TableData>
                <TableData>{post.title}</TableData>
                <TableData>{post.nickName}</TableData>
                <TableData>
                  <PostDate date={post.writeDate} />
                </TableData>
                <TableData>{post.viewCount}</TableData>
                <TableData>{post.likeCount}</TableData>
              </TableRow>
            ))}
        </TableBody>
      </PostTable>
    </Container>
  );
};

export default PostList;
