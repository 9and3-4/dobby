import axios from "axios";
const DOBBY_DOMAIN = "http://localhost:8111";
// const DOBBY_DOMAIN = "http://192.168.10.20:8111";

const BoardAxiosApi = {
  //게시글 조회
  boardList: async () => {
    return await axios.get(DOBBY_DOMAIN + "/api/board");
  },

  // 게시글 상세 조회
  boardDetail: async (id) => {
    return await axios.get(DOBBY_DOMAIN + `/api/board/detail/${id}`);
  },

  //대분류, 소분류 가져오기
  getMajorCategories: async () => {
    try {
      const response = await axios.get(`${DOBBY_DOMAIN}/api/board/categories`);
      return response.data;
    } catch (error) {
      console.error("대분류 카테고리 에러:", error);
      throw error;
    }
  },

  getSubCategories: async (majorCategory) => {
    try {
      const response = await axios.get(
        `${DOBBY_DOMAIN}/api/board/subcategories/${majorCategory}`
      );
      return response.data;
    } catch (error) {
      console.error("소분류 카테고리 에러:", error);
      throw error;
    }
  },

  // 게시글 쓰기
  boardWrite: async (major, sub, title, content, userId) => {
    const board = {
      major: major,
      sub: sub,
      title: title,
      content: content,
      userId: userId,
    };
    console.log("보드데이터 : ", board);
    return await axios.post(DOBBY_DOMAIN + "/api/board/new", board);
  },

  // 게시글에 달린 댓글 조회
  commentList: async (Id) => {
    return await axios.get(DOBBY_DOMAIN + `/api/comment/list/${Id}`);
  },
  // 댓글 쓰기
  commentWrite: async (userId, postId, content) => {
    const comment = {
      postId: postId,
      customerId: userId,
      content: content,
    };
    console.log("댓글쓰기 : ", comment);
    return await axios.post(DOBBY_DOMAIN + `/api/comment/new`, comment);
  },
};

export default BoardAxiosApi;
