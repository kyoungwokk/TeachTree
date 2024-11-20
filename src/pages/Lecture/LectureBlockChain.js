import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LectureBlockChain.css';

function LectureBlockChain() {
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

    // 네비게이션 탭 설정
    const tabs = [
        { name: '프론트엔드', path: '/lecture' },
        { name: '백엔드', path: '/lecture/backend' },
        { name: 'AI', path: '/lecture/ai' },
        { name: '블록체인', path: '/lecture/blockchain' },
        { name: '데이터', path: '/lecture/data' },
        { name: 'VOD', path: '/lecture/vod' }
    ];

    // 강의 리스트 설정
    const lectures = [
        {
            title: '[백엔드] 기본 구조의 이해1',
            description: '백엔드 입문자를 위한 서버 구축 강의',
            image: '/backend.png'
        },
        {
            title: '[백엔드] 기본 구조의 이해2',
            description: '백엔드 실무자를 위한 심화 과정',
            image: '/backend.png'
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

                <img src='/LecturePage.png' alt='lecture Symbol' className='LeturePage-header1-img' />
            </div>

            {/* 네비게이션 탭 */}
            <div className='LecturePage-middle'>
                <div className="nav-tabs">
                    {tabs.map((tab) => (
                        <Link
                            key={tab.name}
                            to={tab.path}
                            className={`nav-tab ${location.pathname === tab.path ? 'active' : ''}`}
                        >
                            {tab.name}
                        </Link>
                    ))}
                </div>

                {/* 백엔드 강의 카드 섹션 */}
                <div className='lecture-backend-container'>
                    {lectures.map((lecture, index) => (
                        <div className='lecture-card-backend' key={index}>
                            <div className='image-container-backend'>
                                <img src={lecture.image} alt={lecture.title} className='lecture-image-backend' />
                            </div>
                            <h3 className='lecture-title-backend'>{lecture.title}</h3>
                            <p className='p-margin-backend'>{lecture.description}</p>
                            <div className='lecture-icons-backend'>
                                <span>♡ 0</span>
                                <span>🛒</span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
}

export default LectureBlockChain;
