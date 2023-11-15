import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import PostDate, { formatDate } from "../../components/Mypage/Post/PostDate";

const PostBox = styled.div`
  margin: 10px;
  color: var(--RED);
  font-size: 18px;
  display: flex;
  flex-direction: column;
`;

const Posting = styled.div`
  flex-direction: column;
  margin: 15px;

  h2 {
    font-size: 23px;
    font-weight: bold;
    margin: 10px;
  }
  p {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 10px;
    color: var(--BLACK);
  }
  hr {
    border: 1px solid #fcb1b1;
  }
  span {
    color: var(--RED);
  }
`;

const CompanyPost = () => {
  const [companyPost, setCompanyPost] = useState([]);

  useEffect(() => {
    const id = localStorage.getItem("comId");
    console.log("기업 상세 조회 id : ", id);
    const fetchCompanyPost = async () => {
      try {
        const response = await AxiosApi.companyPost(id);
        if (response.status === 200) {
          // setCompanyPost(response.data);
          // console.log(response.data);
          // 변환된 날짜를 추가
          const postsWithFormattedDate = response.data.map((post) => ({
            ...post,
            formattedDate: formatDate(post.writedate),
          }));
          setCompanyPost(postsWithFormattedDate);
          console.log(postsWithFormattedDate);
        }
      } catch (error) {
        console.error("Error fetching company detail:", error);
      }
    };
    fetchCompanyPost();
  }, []);

  if (!CompanyPost) {
    return <div>올라온 글이 없습니다.</div>;
  }

  return (
    <>
      <PostBox>
        {companyPost.map((e, index) => (
          <Posting key={index}>
            <h2>제목 : {e.title}</h2>
            <p>{e.content}</p>
            {/* <p>작성시간 : {e.writedate}</p> */}
            <PostDate date={e.formattedDate} />
            <p>👀 {e.viewCount}</p>
            <p>
              <span>♥ </span>
              {e.likeCount}
            </p>
            <hr />
          </Posting>
        ))}
      </PostBox>
    </>
  );
};

export default CompanyPost;
