import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="layout">
      {/* 공통 네비게이션 */}
      <header>
        <nav>
          <Link to="/novice-class">노베이스 클래스</Link>
          <Link to="/lecture">강의</Link>
          <Link to="/review">강의 후기</Link>
          <Link to="/qna">강의 Q&A</Link>
          <Link to="/tree-space">꿈나무 공간</Link>
        </nav>
      </header>

      <main>
        {/* 여기서 각 페이지가 렌더링됩니다 */}
        <Outlet />
      </main>

      <footer>
        {/* 공통 푸터 */}
      </footer>
    </div>


  );
}

export default Layout;
