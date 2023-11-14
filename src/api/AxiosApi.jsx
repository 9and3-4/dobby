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
  // 개인 회원 정보 수정
  memberUpdate: async (id, name, nickName, pwd) => {
    const memInfo = {
      id: id,
      name: name,
      nickName: nickName,
      pwd: pwd,
    };
    return await axios.post(DOBBY_DOMAIN + "/users/memUpdate", memInfo);
  },
  // 기업 회원 정보 수정
  memberUpdate2: async (id, name, phone, pwd) => {
    const memInfo = {
      id: id,
      name: name,
      phone: phone,
      pwd: pwd,
    };
    return await axios.post(DOBBY_DOMAIN + "/users/memUpdate2", memInfo);
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

  customerCompanyGet: async (email) => {
    // 자바 url
    return await axios.get(
      DOBBY_DOMAIN + `/company/customercompany/?email=${email}`
    );
  },
  // 회원 탈퇴
  memberDel: async (id) => {
    const del = {
      id: id,
    };
    return await axios.post(DOBBY_DOMAIN + "/users/delete", del);
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
  // 기업 company 회원 수정
  companyUpdate: async (
    id,
    companyName,
    sizeScale,
    ceo,
    contactNumber,
    category,
    address,
    year,
    staff,
    income,
    profile,
    logo
  ) => {
    const comupdate = {
      id: id,
      companyName: companyName,
      sizeScale: sizeScale,
      ceo: ceo,
      contactNumber: contactNumber,
      category: category,
      address: address,
      year: year,
      staff: staff,
      income: income,
      profile: profile,
      logo: logo,
    };
    return await axios.post(DOBBY_DOMAIN + "/company/update", comupdate);
  },
  // 기업 탈퇴
  companyDel: async (id) => {
    const del = {
      id: id,
    };
    return await axios.post(DOBBY_DOMAIN + "/company/delete", del);
  },
  // 기업 리뷰 페이지 내 기업 정보(기업명만) 가져오기
  infoGet: async () => {
    return await axios.get(DOBBY_DOMAIN + `/companyreview/companyinfoall`);
  },

  // 기업 리뷰 페이지 내 기업명 클릭시 자세한 정보 가져오기
  companyDetail: async (id) => {
    return await axios.get(DOBBY_DOMAIN + `/companyreview/companyinfo/${id}`);
  },

  // 기업 리뷰 페이지 내 기업에 대한 리뷰 가져오기
  companyFeedback: async (id) => {
    return await axios.get(
      DOBBY_DOMAIN + `/companyreview/companyfeedback/${id}`
    );
  },

  // 기업 리뷰 페이지 내 기업 게시글 가져오기 (모바일 전용 제외함)
  companyPost: async (id) => {
    return await axios.get(DOBBY_DOMAIN + `/companyreview/companypost/${id}`);
  },

  // 기업 리뷰 페이지 내 기업 채용공고 가져오기
  companyJobPosting: async (id) => {
    return await axios.get(
      DOBBY_DOMAIN + `/companyreview/companyjobposting/${id}`
    );
  },

  // 광고 신청하기
  adApplication: async (id, image, startDate, endDate, adFee) => {
    const adApp = {
      id: id,
      image: image,
      startDate: startDate,
      endDate: endDate,
      adFee: adFee,
    };
    return await axios.post(DOBBY_DOMAIN + "/advertisement/new", adApp);
  },
  managerUserInfoGet: async () => {
    return await axios.get(DOBBY_DOMAIN + "/manager/userinfo");
  },
  managerCompanyInfoGet: async () => {
    return await axios.get(DOBBY_DOMAIN + "/manager/companyinfo");
  },
};
export default AxiosApi;
