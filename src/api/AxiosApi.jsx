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
  // 개인 회원 가입
  memberReg: async (id, pwd, name, nickName, role) => {
    const member = {
      id: id,
      pwd: pwd,
      name: name,
      nickName: nickName,
      role: role,
    };
    return await axios.post(DOBBY_DOMAIN + "/users/new", member);
  },
  // 회원 가입 여부 확인
  memberRegCheck: async (id, url) => {
    return await axios.get(DOBBY_DOMAIN + `/users/check/?id=${id}&url=${url}`);
  },

  // 마이페이지 내가 쓴 글 리스트
  mypostlist: async (email) => {
    return await axios.get(DOBBY_DOMAIN + `/post/mypostlist/?email=${email}`);
  },

  // 기업 정보 조회
  companyGet: async () => {
    return await axios.get(DOBBY_DOMAIN + "/company/companylist");
  },

  // 기업 customer 회원 가입
  comMemberReg: async (id, pwd, name, phone, role) => {
    const comMember = {
      id: id,
      pwd: pwd,
      name: name,
      phone: phone,
      role: role,
    };
    return await axios.post(DOBBY_DOMAIN + "/users/comnew", comMember);
  },
  // 기업 company 회원 가입
  companyReg: async (
    companyName,
    sizeScale,
    ceo,
    contactNumber,
    url,
    category,
    address,
    year,
    staff,
    income,
    profile,
    logo
  ) => {
    const comMember = {
      companyName: companyName,
      sizeScale: sizeScale,
      ceo: ceo,
      contactNumber: contactNumber,
      url: url,
      category: category,
      address: address,
      year: year,
      staff: staff,
      income: income,
      profile: profile,
      logo: logo,
    };
    return await axios.post(DOBBY_DOMAIN + "/company/new", comMember);
  },
};
export default AxiosApi;
