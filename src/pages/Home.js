import { Link } from 'react-router-dom';
import LoginModal from './LoginModal';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Home({ handleLoginClick, isModalOpen, setIsModalOpen }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const dropdownContent = dropdownRef.current.querySelector('.dropdown-content');

    gsap.set(dropdownContent, { autoAlpha: 0, y: -10, display: 'none' });

    const handleMouseEnter = () => {
      gsap.to(dropdownContent, { duration: 0.5, autoAlpha: 1, y: 0, display: 'flex', ease: 'power3.out' });
    };

    const handleMouseLeave = () => {
      gsap.to(dropdownContent, { duration: 0.3, autoAlpha: 0, y: -10, display: 'none', ease: 'power3.in' });
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
      <div>
        {/* 네비게이션 바 */}
        <div className="header-nav">
          <Link to="/" className="logo-link">
            <img src="/MainLogo.png" alt="메인로고" className="logo" />
          </Link>
          <div className="nav-items">
            <Link to="/pages/NoviceClass.js" className="nav-link">
              노베이스 클래스
            </Link>
            <div className="dropdown" ref={dropdownRef}>
              <Link to="/pages/LecturePage.js" className="nav-link">
                강의
              </Link>
              <div className="dropdown-content">
                <Link to="/pages/NoviceClass.js" className="lecture-item">
                  프론트엔드
                </Link>
                <Link to="/pages/LecturePage.js" className="lecture-item">
                  백엔드
                </Link>
                <Link to="/pages/ReviewPage.js" className="lecture-item">
                  AI
                </Link>
                <Link to="/pages/QnaPage.js" className="lecture-item">
                  블록체인
                </Link>
                <Link to="/pages/TreeSpace.js" className="lecture-item">
                  데이터
                </Link>
                <Link to="/pages/LoginPage.js" className="lecture-item">
                  VOD
                </Link>
              </div>
            </div>
            <Link to="/pages/ReviewPage.js" className="nav-link">
              강의 후기
            </Link>
            <Link to="/pages/QnaPage.js" className="nav-link">
              강의 Q&A
            </Link>
            <Link to="/pages/TreeSpace.js" className="nav-link">
              꿈나무 공간
            </Link>
          </div>
          <div className="auth-items">
            <a href="#" className="nav-link" onClick={handleLoginClick}>
              로그인
            </a>
            <Link to="/signup" className="nav-link">
              회원가입
            </Link>
          </div>
        </div>

        {/* 로그인 모달 */}
        <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        {/* 배경 효과 */}
        <div id="circle"></div>
        <div id="circle2"></div>
      </div>
  );
}

export default Home;
