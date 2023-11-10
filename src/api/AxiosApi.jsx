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
  // 회원 가입
  memberReg: async (id, pwd, name, nickName) => {
    const member = {
      id: id,
      pwd: pwd,
      name: name,
      nickName: nickName,
    };
    return await axios.post(DOBBY_DOMAIN + "/users/new", member);
  },
  // 회원 가입 여부 확인
  memberRegCheck: async (id) => {
    return await axios.get(DOBBY_DOMAIN + `/users/check/?id=${id}`);
  },

  // 마이페이지 내가 쓴 글 리스트
  mypostlist: async (email) => {
    return await axios.get(DOBBY_DOMAIN + `/post/mypostlist/?email=${email}`);
  },

  // 기업 정보 조회
  companyGet: async () => {
    return await axios.get(DOBBY_DOMAIN + "/company/companylist");
  },
};
export default AxiosApi;
