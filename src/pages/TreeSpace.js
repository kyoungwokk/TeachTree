import React from 'react';
import { Link } from 'react-router-dom';
import './TreeSpace.css';

function TreeSpace() {
    return (
      <div>
        {/* 강의 Q&A 섹션 */}
        <div className='Tree-header-square'>
          <div className='Tree-header-text'>
            <h1>커뮤니티</h1>
            <p>Teach Tree 수료생들의 성장을 공유하는 장소</p>
          </div>
          <img src='chat.png' alt='chat Symbol' className='Tree-header-img' />
        </div>

      <div className='header2-square'>
        <div className='header2-text'>
          <h1>새롭게 오픈한<br/>커뮤니티</h1>
        </div>   
        <div className="community2-cards">
            <div className="community2-card">
              <div className="card2-content"></div>
              <div className="card2-footer"></div>
            </div>
            <div className="community2-card">
              <div className="card2-content"></div>
              <div className="card2-footer"></div>
            </div>
            <div className="community2-card">
              <div className="card2-content"></div>
              <div className="card2-footer"></div>
            </div>
          </div>
      </div>
       {/* 클래스별 커뮤니티 섹션 */}
       <div className='tree-header-square2'>
        <div className='tree-header-text2'>
          <h1>클래스별 커뮤니티</h1>
          <div className="tree-community-buttons">
            <Link to='/novice-class' className='tree-community-button'>노베이스 클래스</Link>
            <Link to='/lecture' className='tree-community-button'>강의</Link>
            <Link to='/review' className='tree-community-button'>강의 후기</Link>
            <Link to='/qna' className='tree-community-button tree-selected'>강의 Q&A</Link>
            <Link to='/tree-space' className='tree-community-button'>꿈나무 공간</Link>
          </div>
        </div>
        
        {/* 가운데 이미지와 텍스트 */}
        <div className='tree-center-content'>
          <img src='post.png' alt='Center Symbol' className='tree-center-img' />
          <p className='tree-center-text'>게시물이 없습니다.</p>
          <Link to='/novice-class' className='tree-community-button1 tree-selected1'>글쓰기</Link>
        </div>
      </div>
      
      {/* Contact us 섹션 */}
      <div className='header1-square3'>
        <div className='header1-text3'>
          <h1>Contact us.</h1>
        </div>
        
        <div className="contact-cards">
            <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=new" target="_blank" rel="noopener noreferrer" className="contact-card">
              <h2>파트너십 / 강의 제안 <span>&#8599;</span></h2>
              <p>qpffo1234@gmail.com</p>
              <span className="contact-link">메일 보내기</span>
            </a>

            <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer" className="contact-card">
              <h2>유튜브 채널 바로가기 <span>&#8599;</span></h2>
              <p>http://www.youtube.com</p>
              <span className="contact-link">유튜브 채널 방문하기</span>
            </a>

            <a href="https://open.kakao.com/o/grMPA6Xg" target="_blank" rel="noopener noreferrer" className="contact-card">
              <h2>오픈채팅방 참여하기 <span>&#8599;</span></h2>
              <p>참여코드: Teach23</p>
              <span className="contact-link">오픈채팅방 참여하기</span>
            </a>
          </div>
        </div>
            <div id="Tree-middle4">
          <div class="Tree-footer-links">
              <div class="Tree-footer-section">
                <p>Teach Tree 설명</p>
                <p>Teach Tree 리뷰</p>
                <p>커뮤니티</p>
                <p>이용약관</p>
              </div>
              <div class="Tree-footer-section">
                <p>멘토링 소개</p>
                <p>지식 공유</p>
                <p>강의 · 기능 요청</p>
                <p>비지니스</p>
              </div>
              <div class="Tree-footer-section">
                <p>강의 Q&A</p>
                <p>강의 후기</p>
              </div>
              <div class="Tree-footer-section">
                <p>코드 등록</p>
                <p>수강코드 등록</p>
                <p>포인트코드 등록</p>
              </div>
              <div class="Tree-footer-section">
                <p>공지사항</p>
                <p>자주 묻는 질문</p>
                <p>신고센터</p>
                <p>수료증 확인</p>
              </div>
            </div>
            <div class="Tree-footer-info">
              <img src="MainLogo.png" alt="middleLogo" class="Tree-middleLogo" />
              <p>㈜티처트리 | 대표자: 김경욱 | 사업자 번호: 123-45-67890</p>
              <p>연락처: 070-1234-5678 | 대표 번호: 010-4008-0424</p>
              <p>개인정보보호책임자: 김동현 | 이메일: info@teachtree.com</p>
              <p>주소: 경기도 부천시 부천로 53번길 37-2</p>
            </div>
        </div>
    </div>
    );
  }
  
  export default TreeSpace;
  