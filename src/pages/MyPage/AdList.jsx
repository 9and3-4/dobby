// import React from "react";
// import styled from "styled-components";
// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import AxiosApi from "../../api/AxiosApi";
// import Profile from "../../components/Mypage/profile/Profile";

// // 맨 하단 ..
// const Container = styled.div`
//   display: flex;
//   background-color: white;
//   height: 800px;
// `;

// // 그 위에 프로필
// const ProfileBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   padding-left: 50px;
// `;

// const PostList = styled.div`
//   display: flex;
//   display: column;
// `;

// const MainText = styled.div`
//   font-size: 23px;
//   color: var(--RED);
//   font-weight: bold;
//   padding: 10px;
//   padding-top: 20px;
// `;

// const List = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 20px 30px;
// `;

// const ListImage = styled.img`
//   width: 300px;
//   height: auto;
// `;

// const ListTitle = styled.div`
//   font-size: 15px;
//   padding: 10px;
//   text-align: center;
// `;

// const ListDate = styled.div`
//   font-size: 15px;
//   padding: 10px;
//   text-align: center;
// `;

// const AdList = () => {
//   // const navigate = useNavigate();

//   // const [adList, setAdList] = useState([]);

//   const [adList, setAdList] = useState([
//     {
//       ID: 1,
//       COMPANY_ID: 100,
//       IMAGE: "http://example.com/image1.jpg",
//       START_DATE: "2023-11-13 12:00:00",
//       END_DATE: "2023-11-20 12:00:00",
//       AD_FEE: "STANDARD",
//     },
//     {
//       ID: 2,
//       COMPANY_ID: 110,
//       IMAGE: "http://example.com/image2.jpg",
//       START_DATE: "2023-11-15 12:00:00",
//       END_DATE: "2023-11-25 12:00:00",
//       AD_FEE: "DELUXE",
//     },
//     {
//       ID: 3,
//       COMPANY_ID: 120,
//       IMAGE: "http://example.com/image3.jpg",
//       START_DATE: "2023-11-18 12:00:00",
//       END_DATE: "2023-11-28 12:00:00",
//       AD_FEE: "PREMIUM",
//     },
//   ]);

//   useEffect(() => {
//     // API로부터 광고 정보를 받아오는 함수
//     // const fetchAdList = async () => {
//     //   try {
//     //     const response = await AxiosApi.getAdList(); // 적절한 API 호출 함수로 변경
//     //     setAdList(response.data);
//     //     // setAdList();
//     //   } catch (error) {
//     //     console.error("Error fetching ad list:", error);
//     //   }
//     // };
//     // fetchAdList();
//   }, []); // 컴포넌트가 처음 마운트될 때만 실행

//   return (
//     <>
//       <Container>
//         <ProfileBox>
//           <Profile />
//         </ProfileBox>
//         <PostList>
//           <MainText>광고 등록 목록</MainText>
//           {/* <List>
//             {adList.map((ad, index) => (
//               <div key={index}>
//                 <ListImage src={ad.imageURL} alt={`광고 이미지 ${index + 1}`} />
//                 <ListTitle>{ad.title}</ListTitle>
//                 <ListDate>날짜 {ad.date}</ListDate>
//               </div>
//             ))}
//           </List> */}
//           <List>
//             {adList.map((ad, index) => (
//               <div key={index}>
//                 <ListImage src={ad.IMAGE} alt={`광고 이미지 ${index + 1}`} />
//                 <ListTitle>{ad.AD_FEE}</ListTitle>
//                 <ListDate>날짜 {ad.START_DATE}</ListDate>
//               </div>
//             ))}
//           </List>
//         </PostList>
//       </Container>
//     </>
//   );
// };

// export default AdList;

import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import AxiosApi from "../../api/AxiosApi";
import Profile from "../../components/Mypage/profile/Profile";

const Container = styled.div`
  display: flex;
  background-color: white;
  height: 800px;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 50px;
`;

const PostList = styled.div`
  display: flex;
  display: column;
`;

const MainText = styled.div`
  font-size: 23px;
  color: var(--RED);
  font-weight: bold;
  padding: 10px;
  padding-top: 20px;
`;

const AdListContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* 화면 크기에 따라 줄바꿈 처리 */
  gap: 20px; /* 아이템 간격 */
  padding: 20px;
  overflow-y: auto;
`;

const AdItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #333;
  color: white;
  border: 5px solid #ed342e;
  width: 400px; /* 4개의 열로 나누기 위해 100%를 4로 나눔 */
`;

const AdImage = styled.img`
  width: 370px;
  padding-top: 2%;
  height: auto;
  max-height: 200px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 30px;
`;

const ListTitle = styled.div`
  font-size: 15px;
  padding: 10px;
  text-align: center;
`;

const ListDate = styled.div`
  font-size: 15px;
  padding: 10px;
  text-align: center;
`;

const AdList = () => {
  const [adList, setAdList] = useState([
    {
      ID: 1,
      COMPANY_ID: 100,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-13 12:00:00",
      END_DATE: "2023-11-20 12:00:00",
      AD_FEE: "STANDARD",
    },
    {
      ID: 2,
      COMPANY_ID: 110,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-15 12:00:00",
      END_DATE: "2023-11-25 12:00:00",
      AD_FEE: "DELUXE",
    },
    {
      ID: 3,
      COMPANY_ID: 120,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-18 12:00:00",
      END_DATE: "2023-11-28 12:00:00",
      AD_FEE: "PREMIUM",
    },
    {
      ID: 4,
      COMPANY_ID: 100,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-13 12:00:00",
      END_DATE: "2023-11-20 12:00:00",
      AD_FEE: "STANDARD",
    },
    {
      ID: 5,
      COMPANY_ID: 110,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-15 12:00:00",
      END_DATE: "2023-11-25 12:00:00",
      AD_FEE: "DELUXE",
    },
    {
      ID: 6,
      COMPANY_ID: 120,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-18 12:00:00",
      END_DATE: "2023-11-28 12:00:00",
      AD_FEE: "PREMIUM",
    },
    {
      ID: 7,
      COMPANY_ID: 100,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-13 12:00:00",
      END_DATE: "2023-11-20 12:00:00",
      AD_FEE: "STANDARD",
    },
    {
      ID: 8,
      COMPANY_ID: 110,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-15 12:00:00",
      END_DATE: "2023-11-25 12:00:00",
      AD_FEE: "DELUXE",
    },
    {
      ID: 9,
      COMPANY_ID: 120,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-18 12:00:00",
      END_DATE: "2023-11-28 12:00:00",
      AD_FEE: "PREMIUM",
    },
    {
      ID: 10,
      COMPANY_ID: 100,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-13 12:00:00",
      END_DATE: "2023-11-20 12:00:00",
      AD_FEE: "STANDARD",
    },
    {
      ID: 11,
      COMPANY_ID: 110,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-15 12:00:00",
      END_DATE: "2023-11-25 12:00:00",
      AD_FEE: "DELUXE",
    },
    {
      ID: 12,
      COMPANY_ID: 120,
      IMAGE:
        "https://www.urbanbrush.net/web/wp-content/uploads/edd/2022/11/urbanbrush-20221108214712319041.jpg",
      START_DATE: "2023-11-18 12:00:00",
      END_DATE: "2023-11-28 12:00:00",
      AD_FEE: "PREMIUM",
    },
  ]);

  useEffect(() => {
    // API로부터 광고 정보를 받아오는 함수
    // const fetchAdList = async () => {
    //   try {
    //     const response = await AxiosApi.getAdList(); // 적절한 API 호출 함수로 변경
    //     setAdList(response.data);
    //     // setAdList();
    //   } catch (error) {
    //     console.error("Error fetching ad list:", error);
    //   }
    // };
    // fetchAdList();
  }, []); // 컴포넌트가 처음 마운트될 때만 실행

  return (
    <>
      <Container>
        <ProfileBox>
          <Profile />
        </ProfileBox>
        <MainText>광고 등록 목록</MainText>
        <PostList>
          <AdListContainer>
            {adList.map((ad, index) => (
              <AdItem key={index}>
                <AdImage src={ad.IMAGE} alt={`광고 이미지 ${index + 1}`} />
                <ListTitle>{ad.AD_FEE}</ListTitle>
                <ListDate>{ad.START_DATE}</ListDate>
              </AdItem>
            ))}
          </AdListContainer>
        </PostList>
      </Container>
    </>
  );
};

export default AdList;
