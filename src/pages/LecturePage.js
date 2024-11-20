import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LecturePage.css';
import LectureCard from "../components/LectureCard";

function LecturePage() {
    const location = useLocation();

    useEffect(() => {
        // 페이지 진입 시 body 스타일 변경
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';

        // 페이지를 벗어날 때 스타일 원래대로 복원
        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, []);

    const tabs = [
        { name: '프론트엔드', path: '/lecture' },
        { name: '백엔드', path: '/lecture/backend' },
        { name: 'AI', path: '/lecture/ai' },
        { name: '블록체인', path: '/lecture/blockchain' },
        { name: '데이터', path: '/lecture/data' },
        { name: 'VOD', path: '/lecture/vod' }
    ];

    const lectures = [
        {
            title: '[프론트엔드] 기본 구조의 이해1-2',
            description: '개발 입문자를 위한 웹 사이트 제작',
            image: 'lecture1.png'
        },
        {
            title: '[프론트엔드] 기본 구조의 이해2-2',
            description: '개발 입문자를 위한 웹 사이트 제작의 정석',
            image: 'lecture2.png'
        },
        {
            title: '[프론트엔드] 기본 구조의 이해2',
            description: '개발 입문자를 위한 웹 사이트 제작의 정석',
            image: 'lecture3.png'
        },
        {
            title: '[프론트엔드] 기본 구조의 이해2',
            description: '개발 입문자를 위한 웹 사이트 제작의 정석',
            image: 'lecture3.png'
        }
    ];

    return (
        <div className='LecturePage-body'>
            {/* 상단 네비게이션 섹션 */}
            <div className='LeturePage-header1-square'>
                <div className='LeturePage-header1-text'>
                    <h1>강의</h1>
                    <p>각 클래스별 무료 강의부터 스페셜 VOD까지</p>
                </div>
                <img src='LecturePage.png' alt='Q&A Symbol' className='LeturePage-header1-img' />
            </div>

            {/* 네비게이션 탭 */}
            <div className='LecturePage-middle'>
                <div className="nav-tabs">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.path}
                            className={`nav-tab ${tab.className} ${location.pathname === tab.path ? 'active' : ''}`}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>

                {/* 카드 섹션 */}
                <div className='lecture-container'>
                    {lectures.map((lecture, index) => {
                        console.log('Lecture:', lecture); // lecture 출력
                        return <LectureCard lecture={lecture} key={index}/>;
                    })}
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

export default LecturePage;
