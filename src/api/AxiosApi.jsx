import axios from "axios";
const DOBBY_DOMAIN = "http://localhost:8111";

const AxiosApi = {
  // 로그인
  memberLogin: async (id, pw) => {
    const login = {
      id: id,
      pwd: pw,
    };
    return await axios.post(DOBBY_DOMAIN + "/users/login", login);
  },
  //회원 조회
  memberGet: async (id) => {
    return await axios.get(DOBBY_DOMAIN + `/users/member/?name=${id}`);
  },
};

export default AxiosApi;
