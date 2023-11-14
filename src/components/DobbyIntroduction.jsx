// footer 하단 서비스소개

import React from "react";
import styled from "styled-components";
import BackButtonComponent from "../pages/MyPage/BackButton";

const Container = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  color: var(--RED);
  justify: center;
  align-items: center;
`;

const Dobby = styled.div`
  display: flex;
  margin: 30px;
`;

const DobbyBox1 = styled.div`
  margin: 30px;
  h2 {
    font-weight: bold;
    margin: 5px;
  }
`;

const DobbyBox2 = styled.div`
  flex-direction: row;
  padding-top: 25px;
  p {
    font-size: 15px;
    font-weight: bold;
    margin: 10px; /* 추가: 각 p 태그 간격 조절 */
  }
`;
const Qbox = styled.div`
  flex-direction: row;
  justify-content: flex-start;
`;

const DobbyQ = styled.div`
  display: flex;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const AnswearBox = styled.div`
  flex-direction: row;
  margin: 15px;

  h6 {
    font-weight: bold;
    margin: 5px;
  }
`;
const Answear = styled.div`
  font-size: 15px;
  padding: 3px;
`;

const DobbyIntroduction = () => {
  return (
    <>
      <Container>
        <Dobby>
          <DobbyBox1>
            <h2>SECRET PASSAGE,</h2>
            <h2>비밀을 속삭여 보세요</h2>
          </DobbyBox1>
          <DobbyBox2>
            <p>
              2023년 출시된 비밀 통로는 전 세계 기업의 지속 가능한 기업 문화를
              위한 직장인 플랫폼 입니다.
            </p>
            <p>
              대한민국 대기업 직장인 10명 중 9명이 이미 비밀 통로를 통해 많을
              비밀을 공유 했어요 !
            </p>
            <p>당신도 함께 비밀을 공유할 차례입니다.</p>
          </DobbyBox2>
        </Dobby>
        <Title>FAQ</Title>
        <Qbox>
          <DobbyQ>
            <AnswearBox>
              <h6>Q. 비밀 통로는 정말 익명이 맞나요?</h6>
              <Answear>네 ! 100% 익명입니다. </Answear>
              <Answear>
                비밀 통로는 가입자의 어떤 정보도 서비스내에 저장하지 않습니다.
              </Answear>
              <Answear>
                통로 내에서 마음껏 얘기할 수 있도록 사용자에게 편한 공간을
                만들어주는게 비밀 통로의 목적입니다.
              </Answear>
            </AnswearBox>
          </DobbyQ>
          <DobbyQ>
            <AnswearBox>
              <h6>Q. 비밀 통로 웹에서도 글을 쓸 수 있나요?</h6>
              <Answear>
                네 ! 로그인 하시면 글 작성, 좋아요 등의 기능을 앱과 동일하게
                이용 가능하세요.
              </Answear>
              <Answear>
                {" "}
                로그인을 하지 않은 상태에서는 글을 보는 것만 가능해요
              </Answear>
            </AnswearBox>
          </DobbyQ>
          <DobbyQ>
            <AnswearBox>
              <h6>Q. 비밀 통로 웹에서는 회사 채널이 안 보여요</h6>
              <Answear>
                회사, 업계, 그룹사 채널은 앱에서만 사용 가능하십니다.
              </Answear>
              <Answear>
                가입자 보호를 위해 비밀 통로 웹에서는 일부 토픽 채널만 제공하는
                점 양해 부탁 드립니다.
              </Answear>
            </AnswearBox>
          </DobbyQ>
          <DobbyQ>
            <AnswearBox>
              <h6>Q. 비밀 통로를 사용하다 문제가 발생 했어요</h6>
              <Answear>
                {" "}
                02-1000-7777로 오전9시-오후6시 사이 연락 주시면 해결해
                드리겠습니다.
              </Answear>
              <Answear>* 도비 점심시간 1-2시</Answear>
            </AnswearBox>
          </DobbyQ>
        </Qbox>
        <BackButtonComponent />
      </Container>
    </>
  );
};

export default DobbyIntroduction;
