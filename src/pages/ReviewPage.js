import React from 'react';
import './ReviewPage.css';
import { Link } from 'react-router-dom';
function ReviewPage() {
    return (
        <div>
            {/* 강의 Q&A 섹션 */}
            <div className='Review-header1-square'>
                <div className='Review-header1-text'>
                    <h1>강의 후기</h1>
                    <p>각 클래스별 무료 강의부터 스페셜 VOD까지</p>
                </div>
                <img src='Review.png' alt='Review Symbol' className='Review-header1-img' />
            </div>
            {/*포토 후기 섹션*/}
            <div className='Review-header2-square'>
                <div className='Review-header2-text'>
                    <h1>수강생들의 생생한 포토 후기</h1>
                </div>
                <div className="Review-community2-cards">
                    <div className="Review-community2-card">
                        <div className="Review-card2-content"></div>
                        <div className="Review-card2-footer"></div>
                    </div>
                    <div className="Review-community2-card">
                        <div className="Review-card2-content"></div>
                        <div className="Review-card2-footer"></div>
                    </div>
                    <div className="Review-community2-card">
                        <div className="Review-card2-content"></div>
                        <div className="Review-card2-footer"></div>
                    </div>
                </div>
            </div>

            {/* 클래스별 커뮤니티 섹션 */}
            <div className='Review-header-square2'>
                <div className='Review-header-text2'>
                    <h1>강의별로 더 많은 후기를 만나보세요</h1>
                    <div className="Review-community-buttons">
                        <Link to='/novice-class' className='Review-community-button'>노베이스 클래스</Link>
                        <Link to='/lecture' className='Review-community-button'>강의</Link>
                        <Link to='/review' className='Review-community-button Review-selected'>강의 후기</Link>
                        <Link to='/qna' className='Review-community-button'>강의 Q&A</Link>
                        <Link to='/tree-space' className='Review-community-button'>꿈나무 공간</Link>
                    </div>
                </div>
            </div>
            {/* 가운데 이미지와 텍스트 */}
            <div className='Review-center-content'>
                <img src='post.png' alt='Center Symbol' className='Review-center-img' />
                <p className='Review-center-text'>게시물이 없습니다.</p>
                <Link to='/novice-class' className='Review-community-button1 Review-selected1'>글쓰기</Link>
            </div>

            {/*그라데이션*/}
            <div className='Review-middle'>
                <img src='circle4.png' alt='Center Symbol' className='Review-circle4' />
                <div>
                    <h1>&nbsp;멤버쉽 가입으로 100개 이상의 유료 강좌 영상들과<br/>Teach Tree 오리지널 예제 파일까지 함께 받아보세요</h1>
                </div>
                <div className='Review-middle-button1'>
                    <Link to='/novice-class' className='Review-middle-button Review-middle-selected'>멤버쉽 보러가기</Link>
                </div>
            </div>
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

export default ReviewPage;
  