import React from 'react';
import { Link } from 'react-router-dom';
import './QnaPage.css';

function QnaPage() {
    return (
        <div>
            {/* 강의 Q&A 섹션 */}
            <div className='header1-square'>
                <div className='header1-text'>
                    <h1>강의 Q&A</h1>
                    <p>묻고 답하는 질문응답 공간</p>
                </div>
                <img src='Q&A.png' alt='Q&A Symbol' className='header1-img' />
            </div>

            {/* 클래스별 커뮤니티 섹션 */}
            <div className='header1-square2'>
                <div className='header1-text2'>
                    <h1>클래스별 커뮤니티</h1>
                    <div className="community-buttons">
                        <Link to='/novice-class' className='community-button'>노베이스 클래스</Link>
                        <Link to='/lecture' className='community-button'>강의</Link>
                        <Link to='/review' className='community-button'>강의 후기</Link>
                        <Link to='/qna' className='community-button selected'>강의 Q&A</Link>
                        <Link to='/tree-space' className='community-button'>꿈나무 공간</Link>
                    </div>

                    {/* 검색 키워드 입력 필드 */}
                    <div className="search-container">
                        <input type="text" className="search-input" placeholder="질문 키워드" />
                    </div>
                </div>

                {/* 가운데 이미지와 텍스트 */}
                <div className='center-content'>
                    <img src='post.png' alt='Center Symbol' className='center-img' />
                    <p className='center-text'>게시물이 없습니다.</p>
                    <Link to='/novice-class' className='community-button1 selected1'>글쓰기</Link>
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
        </div>
    );
}

export default QnaPage;
