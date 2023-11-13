import axios from "axios";
const DOBBY_DOMAIN = "http://localhost:8111";

const BoardAxiosApi = {
  //게시글 조회
  boardList: async () => {
    return await axios.get(DOBBY_DOMAIN + "/api/board");
  },

  // 게시글 상세 조회
  boardDetail: async (id) => {
    return await axios.get(DOBBY_DOMAIN + `/api/board/detail/${id}`);
  },

  // // 게시글 쓰기
  // boardWrite: async (title, content, userId, img) => {
  //   const board = {
  //     title: title,
  //     content: content,
  //     userId: userId,
  //     img: img,
  //   };
  //   return await axios.post(DOBBY_DOMAIN + "/api/board/new", board);
  // },

  // 게시글에 달린 댓글 조회
  commentList: async (boardId) => {
    return await axios.get(DOBBY_DOMAIN + `/api/comment/list/${boardId}`);
  },
  // 댓글 쓰기
  commentWrite: async (customerId, Id, content) => {
    const comment = {
      boardId: Id,
      userId: customerId,
      content: content,
    };
    return await axios.post(DOBBY_DOMAIN + `/api/comment/new`, comment);
  },
};

export default BoardAxiosApi;
