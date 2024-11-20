import './App.css';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import { Routes, Route, BrowserRouter, Link, useLocation } from "react-router-dom";
import NoviceClass from './pages/NoviceClass';
import LecturePage from './pages/LecturePage';
import ReviewPage from './pages/ReviewPage';
import QnaPage from './pages/QnaPage';
import TreeSpace from './pages/TreeSpace';
import Sign from './pages/SignUp';
import LoginModal from './pages/LoginModal';
import Lecturebackend from './pages/Lecture/Lecturebackend';
import Lectureai from './pages/Lecture/Lectureai';
import LectureBlockChain from './pages/Lecture/LectureBlockChain';
import MyPage from "./pages/MyPage";



gsap.registerPlugin(ScrollTrigger);

function MainPage() {
    const cardsRef = useRef(null);

    // 카드 애니메이션 처리
    useEffect(() => {
        if (!cardsRef.current) return;
        const cards = cardsRef.current.querySelectorAll('.card');

        gsap.fromTo(
            cards,
            { y: 500, autoAlpha: 0 },
            {
                y: 0,
                autoAlpha: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: "#middle",
                    start: "top 80%",
                    end: "top 30%",
                    scrub: 1,
                    onEnter: () => {
                        gsap.to(cards, { y: 0, autoAlpha: 1, stagger: 0.2 });
                    },
                    onLeaveBack: () => {
                        gsap.to(cards, { y: 500, autoAlpha: 0 });
                    }
                }
            }
        );
    }, []);

    // 모든 슬라이더에 대한 설정
    useEffect(() => {
        const sliders = document.querySelectorAll('.slider');

        sliders.forEach((slider) => {
            const slideWidth = 194; // 슬라이드의 너비
            const margin = 46; // 각 슬라이드 간의 마진 (좌우로 3px씩)
            const slidesPerClick = 5; // 한 번에 이동할 슬라이드 수
            let slideIndex = 0;

            const showSlide = (index) => {
                const totalSlides = slider.children.length;
                const maxIndex = totalSlides - slidesPerClick;

                // 슬라이드 인덱스가 범위를 벗어나지 않도록 조정
                if (index > maxIndex) slideIndex = maxIndex;
                if (index < 0) slideIndex = 0;

                // 슬라이드를 이동시키는 transform 설정
                slider.style.transform = `translateX(-${slideIndex * (slideWidth + margin)}px)`;
            };

            const nextButton = slider.parentElement.querySelector('.next');
            const prevButton = slider.parentElement.querySelector('.prev');

            // 이벤트 리스너 등록
            nextButton.addEventListener('click', () => {
                slideIndex += slidesPerClick;
                showSlide(slideIndex);
            });

            prevButton.addEventListener('click', () => {
                slideIndex -= slidesPerClick;
                showSlide(slideIndex);
            });
        });

        // cleanup function to remove event listeners
        return () => {
            sliders.forEach((slider) => {
                const nextButton = slider.parentElement.querySelector('.next');
                const prevButton = slider.parentElement.querySelector('.prev');

                nextButton.removeEventListener('click', () => {});
                prevButton.removeEventListener('click', () => {});
            });
        };
    }, []);

    return (
        <div className="main-page">
            <div className='maincircle'>
                <div>
                    <h1>Teach Tree</h1>
                    <p>무료강의들과 노베이스 클래스<br/>오리지널 예제 파일을 받아보세요</p>
                </div>
                <div id="circle"></div>
                <div id="circle2"></div>
            </div>

            <div id="middle">
                <div id="middle-content" ref={cardsRef}>

                    <div className="middle-header">
                        <p>노베이스 클래스의 대표 강의 카테고리</p>
                        <h2>클래스별 강좌</h2>
                    </div>
                    <div className="middle-cards">
                        <div className="card red">
                            <h1>프론트엔드</h1>
                            <p>On-Device AI, AR 등<br />2024 실무 트렌드 반영 iOS</p>
                            <div className="learn-more">더 알아보기 &gt;</div>
                        </div>
                        <div className="card green">
                            <h1>백엔드</h1>
                            <p>최신 백엔드 기술과 실무 활용법<br />트렌드에 맞는 강좌 제공</p>
                            <div className="learn-more">더 알아보기 &gt;</div>
                        </div>
                        <div className="card blue">
                            <h1>AI</h1>
                            <p>AI, 머신러닝 기반 프로젝트<br />실무 사례 학습 가능</p>
                            <div className="learn-more">더 알아보기 &gt;</div>
                        </div>
                        <div className="card orange">
                            <h1>데이터</h1>
                            <p>데이터 분석 및 시각화<br />트렌드 주도 강의 제공</p>
                            <div className="learn-more">더 알아보기 &gt;</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="middle2">
                <div className="middle2-header"></div>
                <div className="middle2-content">
                    <div className="middle2-left">
                        <h2 className='green_font'>Teach Tree는 어떤 학습을 제공하나요?</h2>
                        <br />
                        <h1>Teach Tree는
                            <br />IT분야의 기반을 다질 수 있는
                            <br />학습기회를 제공합니다.</h1>
                        <p>경제적, 사회적 배경에 상관 없이
                            <br />누구나 잠재력을 펼칠 수 있는 사회를 만들어 갑니다.</p>
                        <Link to='/novice-class' className='square_teachtree'>
                            <div>
                                <h3 className='square_h3'>노베이스 클래스</h3>
                            </div>
                        </Link>
                    </div>
                    <div className="middle2-right">
                        <img src="circle3.png" alt="circle" className='circle3' />
                    </div>
                </div>
            </div>

            <div id="slider-section">
                <div className="slider-header">0원! 유료강의보다 좋은 무료강의들 👀
                    <p>무료강의부터 가볍게 시작해 보세요</p>
                </div>
                <div className="slider-wrapper">
                    <div className="slider">
                        <div className="slide">강의 1</div>
                        <div className="slide">강의 2</div>
                        <div className="slide">강의 3</div>
                        <div className="slide">강의 4</div>
                        <div className="slide">강의 5</div>
                        <div className="slide">강의 6</div>
                        <div className="slide">강의 7</div>
                        <div className="slide">강의 8</div>
                        <div className="slide">강의 9</div>
                        <div className="slide">강의 10</div>
                    </div>
                    <button className="prev">◀</button>
                    <button className="next">▶</button>
                </div>
            </div>

            <div id="slider-section1">
                <div className="slider-header">왕초보도 할 수 있어요 👍
                    <p>이미 검증된 쉽고 친절한 입문 강의!!</p>
                </div>
                <div className="slider-wrapper">
                    <div className="slider">
                        <div className="slide">강의 1</div>
                        <div className="slide">강의 2</div>
                        <div className="slide">강의 3</div>
                        <div className="slide">강의 4</div>
                        <div className="slide">강의 5</div>
                        <div className="slide">강의 6</div>
                        <div className="slide">강의 7</div>
                        <div className="slide">강의 8</div>
                        <div className="slide">강의 9</div>
                        <div className="slide">강의 10</div>
                    </div>
                    <button className="prev">◀</button>
                    <button className="next">▶</button>
                </div>
            </div>
            <div id="middle3">
                <div className="middle3-header">다양한 서비스를 신청해보세요.
                    <p>Teach Tree의 지식공유자 ˙ 비즈니스 ˙ 대학생 신청방법에 대해 알아보세요.</p>
                </div>
                <div className="middle3-square">
                    <div className="middle3-square2" style={{ backgroundImage: "url('123123.jpg')" }}></div>
                    <div className="middle3-square2" style={{ backgroundImage: "url('123123.jpg')" }}></div>
                    <div className="middle3-square2" style={{ backgroundImage: "url('123123.jpg')" }}></div>
                </div>
            </div>
        </div>
    );
}


function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation(); // 현재 경로를 가져옴
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const pagesWithAutoHeight = [
            "/novice-class",
            "/lecture",
            "/review",
            "/qna",
            "/tree-space",
            "/sign-up"
        ];

        if (pagesWithAutoHeight.includes(location.pathname)) {
            document.body.style.height = "auto";
        } else {
            document.body.style.height = "";
        }
    }, [location]);

    const handleLoginClick = (event) => {
        event.preventDefault();
        setIsModalOpen(true);
    };

    useEffect(() => {
        const token = localStorage.getItem('jwtToken'); // 로컬 스토리지에서 'token' 키 확인

        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [isModalOpen]);

    useEffect(() => {
        if (!dropdownRef.current) return;
        const dropdownContent = dropdownRef.current.querySelector('.dropdown-content');

        const handleMouseEnter = () => {
            gsap.to(dropdownContent, { duration: 0.5, display: 'block', autoAlpha: 1, y: 0 });
        };

        const handleMouseLeave = () => {
            gsap.to(dropdownContent, { duration: 0.5, display: 'none', autoAlpha: 0, y: -10 });
        };

        const dropdown = dropdownRef.current;
        dropdown.addEventListener('mouseenter', handleMouseEnter);
        dropdown.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            dropdown.removeEventListener('mouseenter', handleMouseEnter);
            dropdown.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <div className="App">
            {location.pathname !== '/sign-up' && ( // 회원가입 페이지가 아닐 때만 헤더 표시
                <div className='header-nav'>
                    <Link to='/' className='logo-link'>
                        <img src='/MainLogo.png' alt='메인로고' className='logo' />
                    </Link>
                    <div className='nav-items'>
                        <Link to='/novice-class' className='nav-link'>노베이스 클래스</Link>
                        <div className="dropdown" ref={dropdownRef}>
                            <Link to='/lecture' className='nav-link'>강의</Link>
                            <div className="dropdown-content">
                                <Link to='/lecture' className='lecture-item'>프론트엔드</Link>
                                <Link to='/lecture/backend' className='lecture-item'>백엔드</Link>
                                <Link to='/lecture/ai' className='lecture-item'>AI</Link>
                                <Link to='/lecture/BlockChain' className='lecture-item'>블록체인</Link>
                                <Link to='/lecture/data' className='lecture-item'>데이터</Link>
                                <Link to='/lecture/vod' className='lecture-item'>VOD</Link>
                            </div>
                        </div>

                        <Link to='/review' className='nav-link'>강의 후기</Link>
                        <Link to='/qna' className='nav-link'>강의 Q&A</Link>
                        <Link to='/tree-space' className='nav-link'>꿈나무 공간</Link>
                    </div>
                    {isLoggedIn ? (
                        <div className='auth-items'>
                            <Link to='/mypage' className='nav-link'>마이페이지</Link>
                        </div>
                    ):(
                        <div className='auth-items'>
                            <a href='/login' className='nav-link' onClick={handleLoginClick}>로그인</a>
                            <Link to='/sign-up' className='nav-link'>회원가입</Link>
                        </div>
                    )

                    }
                </div>
            )}

            <LoginModal isOpen={isModalOpen} onClose={() => {setIsModalOpen(false); console.log(isModalOpen)}} />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/novice-class" element={<NoviceClass />} />
                <Route path="/lecture" element={<LecturePage />} />
                <Route path="/lecture/backend" element={<Lecturebackend />} />
                <Route path="/lecture/BlockChain" element={<LectureBlockChain />} />
                <Route path="/lecture/ai" element={<Lectureai/>} />
                <Route path="/review" element={<ReviewPage />} />
                <Route path="/qna" element={<QnaPage />} />
                <Route path="/tree-space" element={<TreeSpace />} />
                <Route path="/sign-up" element={<Sign />} />
                <Route path="/mypage" element={<MyPage />} />
            </Routes>

            {location.pathname !== '/sign-up' && ( // 회원가입 페이지가 아닐 때만 footer 표시
                <div id="middle4">
                    <div className="footer-links">
                        <div className="footer-section">
                            <p>Teach Tree 설명</p>
                            <p>Teach Tree 리뷰</p>
                            <p>커뮤니티</p>
                            <p>이용약관</p>
                        </div>
                        <div className="footer-section">
                            <p>멘토링 소개</p>
                            <p>지식 공유</p>
                            <p>강의 · 기능 요청</p>
                            <p>비지니스</p>
                        </div>
                        <div className="footer-section">
                            <p>강의 Q&A</p>
                            <p>강의 후기</p>
                        </div>
                        <div className="footer-section">
                            <p>코드 등록</p>
                            <p>수강코드 등록</p>
                            <p>포인트코드 등록</p>
                        </div>
                        <div className="footer-section">
                            <p>공지사항</p>
                            <p>자주 묻는 질문</p>
                            <p>신고센터</p>
                            <p>수료증 확인</p>
                        </div>
                    </div>

                    <div className="footer-info">
                        <img src="/MainLogo.png" alt="middleLogo" className='middleLogo' />
                        <p>㈜티처트리 | 대표자: 김경욱 | 사업자 번호: 123-45-67890</p>
                        <p>연락처: 070-1234-5678 | 대표 번호: 010-4008-0424</p>
                        <p>개인정보보호책임자: 김동현 | 이메일: info@teachtree.com</p>
                        <p>주소: 경기도 부천시 부천로 53번길 37-2</p>
                    </div>
                </div>
            )}
        </div>
    );
}


function RootApp() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default RootApp;
