import React from 'react'
import './Introduce.css';

const Introduce = () => {
  return (
    <div className="Introduce_title">
      <nav>
        <a>회사소개</a>
      </nav>
      <div className="Introduce_text">
        <h1 className="fs80 fw300 font_Buda">we are</h1>
        <h2 className="fs30 fw400 font_Nanum">overview</h2>
        <h3 className="fs60 fw400 font_Buda">카라멜라는,</h3>
        <p className="fs50 fw400 font_Nanum">
          지속적으로 변화하는 기술 시대에 적응하며 다양한 경험을 통해 차별화된 전략과 새로운 가능성을 창조합니다.
        </p>
        <p className="fs30 fw400 font_Nanum">
          웹서비스 소프트웨어 구축 역량과 우수한 AI 기술 역량을 가지고 있으며 끊임없는 연구/개발 중심의 기술혁신과 구성원들의 성장을 목표로 새로운 가치를 창출하기 위해 노력하고 있습니다.
        </p>
      </div>
      <div className="fs80 fw300 font_Boda taC">
        <div className="introduce-container1">
          <div className="center-content">
            caramella
          </div>
        </div>
      </div>

      <div className="introduce-container2">
        <div className="box">
        </div>
        <div className="fs30 fw300 font_Buda taL">
          <p>회사명</p>
          <p>사업부서</p>
          <p>주소</p>
          <p>사원수</p>
          <p>설립일</p>
          <p>주요사업</p>
          <p>등등 기본정보?</p>
        </div>
      </div>

      <div className="group-container">
        <div className='fs80 taC gc2'>- 조직도 -</div>
        <div className="group gc2">카라멜라</div>
        <div className="group gc1">기획팀</div>
        <div className="group gc2">개발팀</div>
        <div className="group gc3">디자인팀</div>
        <br></br>
      </div>


      <div className="tec-text">
        <div className="fs40 fw400 font_Nanum taC">
          이제껏 경험 해보지 못했던 새로운 서비스를 위해
          <br></br> 창의성과 열정을 바탕으로 끊임없이 노력하고 있습니다.
        </div>
        <div className="tec-container1">
          <div className="tec-grid">
            <div className="tec-box"></div>
            <div className="fs100 fw600 font_Nanum">270건</div>
            <div className="fs40 fw400 font_Nanum">프로젝트</div>
          </div>
          <div className="tec-grid">
            <div className="tec-box"></div>
            <div className="fs100 fw600 font_Nanum">30개</div>
            <div className="fs40 fw400 font_Nanum">특허 및 저작권</div>
          </div>
          <div className="tec-grid">
            <div className="tec-box"></div>
            <div className="fs100 fw600 font_Nanum">50개</div>
            <div className="fs40 fw400 font_Nanum">인증서</div>
          </div>
        </div>
      </div>















    </div>
  );
};

export default Introduce;