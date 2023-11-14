/* timestamp 뒤에 시간 자르기 : 년-월-일-시-분-초 까지 출력 */

import React from "react";
import styled from "styled-components";

const StyledPostDate = styled.p`
  font-size: 0.8em;
`;

export function formatDate(dateString) {
  console.log(dateString);
  const date = new Date(dateString);
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date
    .getSeconds()
    .toString()
    .padStart(2, "0")}`;
  return formattedDate;
}

const PostDate = ({ date }) => {
  const formattedDate = new Date(date).toLocaleString();
  return <StyledPostDate>{formattedDate}</StyledPostDate>;
};

export default PostDate;
