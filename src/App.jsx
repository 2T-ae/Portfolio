import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// 컴포넌트 imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

// 페이지 컴포넌트들
import HomePage from './components/pages/Homepage';
import AboutPage from './components/pages/Aboutpage';
import ProjectsPage from './components/pages/Projectspage';

function App() {
  return (
    <Router>
      <div style={{
        width: '100%',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        minHeight: '100vh',
      }}>

        {/* 왼쪽 배경 (bluesky.jpg) */}
        <div
          style={{
            width: '50%',
            height: '100vh',
            backgroundImage: `url('/bluesky.jpg')`,
            backgroundPosition: 'center center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'fixed', // fixed로 변경
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          {/* 그라데이션 오버레이 */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
            }}
          />
          
          {/* img2.jpg를 중앙에 배치 */}
          <img 
            src="/img2.jpg"
            alt="프로필 사진"
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '400px',
              height: '400px',
              borderRadius: '10px',
              objectFit: 'cover',
              mask: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
              WebkitMask: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
              zIndex: 2
            }}
          />
        </div>

        {/* 텍스트 영역 (오른쪽 50%) */}
        <div 
          style={{
            width: '50%',
            marginLeft: '50%', // 왼쪽 여백으로 배경 공간 확보
            minHeight: '100vh',
            backgroundColor: '#000000', // 배경색 명시적으로 설정
            color: 'white',
            position: 'relative',
            zIndex: 3,
          }}
        >
          {/* 헤더 */}
          <div style={{
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 10,
            fontSize: '18px',
          }}>
            <Header />
          </div>

          {/* 페이지 내용 */}
          <div style={{
            width: '100%',
            color: 'white',
            padding: '80px 40px 80px 40px', // 상하 패딩 충분히 확보
            boxSizing: 'border-box',
            minHeight: '100vh', // 최소 높이 보장
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>

          {/* 푸터 */}
          <div style={{
            padding: '20px 40px',
            fontSize: '18px',
            color: 'blue',
            textAlign: 'right',
          }}>
            {/* 푸터 컴포넌트가 필요하면 여기에 추가 */}
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;