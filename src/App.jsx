import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// 컴포넌트 imports
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import SplitBackground from './components/Background'; // Background 컴포넌트 import

// 페이지 컴포넌트들
import HomePage from './components/pages/Homepage';
import AboutPage from './components/pages/Aboutpage';
import ProjectsPage from './components/pages/Projectspage';
import WeatherPage from './components/pages/Weatherpage';

function App() {
  // 왼쪽 배경 영역에 들어갈 콘텐츠
  const backgroundContent = (
    <>
      {/* img2.jpg를 중앙에 배치 */}
      <img 
        src="/img2_edited.png"
        alt=""
        style={{
          position: 'absolute',
          top: '35%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: '8px solid white',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
          mask: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          WebkitMask: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          zIndex: 2
        }}
      />

      {/* 이미지 아래 부가 텍스트 */}
      <div style={{
        position: 'absolute',
        top: '70%',
        left: '50%',
        transform: 'translateX(-50%)',
        color: 'white',
        textAlign: 'center',
        zIndex: 3,
        width: '80%'
      }}>
        <p style={{ 
          margin: 0,
          fontSize: '20px',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
        }}>
          If you are not willing to risk the usual,<br /> 
          you will have to settle for the ordinary. <br />
          - Jim Rohn
        </p>
      </div>
    </>
  );

  // 오른쪽 텍스트 영역에 들어갈 콘텐츠
  const textContent = (
    <div style={{ 
      width: '100%', 
      height: '100%', // minHeight 대신 height 사용
      position: 'relative'
    }}>
      {/* 헤더 */}
      <div style={{
        position: 'sticky', // fixed 대신 sticky 사용하여 스크롤 시 상단 고정
        top: 0,
        right: 0,
        zIndex: 10,
        fontSize: '18px',
        backgroundColor: '#000000', // 배경색 추가로 내용과 겹치지 않게
        padding: '10px 0'
      }}>
        <Header />
      </div>

      {/* 페이지 내용 */}
      <div style={{
        width: '100%',
        color: 'white',
        padding: '40px 40px 80px 40px', // 상단 패딩 줄임
        boxSizing: 'border-box',
        // minHeight 제거하여 내용에 따라 높이 조절
      }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/weather" element={<WeatherPage />} />
        </Routes>
      </div>
    </div>
  );

  return (
    <Router>
      <div style={{
        width: '100%',
        margin: 0,
        padding: 0,
        overflowX: 'hidden',
      }}>
        <SplitBackground
          src="/bluesky.jpg"
          backgroundRatio={0.5} // 50:50 비율
          overlay={true}
          overlayColor="linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)"
          textAreaColor="#000000"
          height="100vh"
        >
          {backgroundContent}
        </SplitBackground>
        
        {/* 별도로 텍스트 콘텐츠 렌더링 */}
        <div style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '50%',
          height: '100vh',
          backgroundColor: '#000000',
          zIndex: 3,
          overflowY: 'auto', // 세로 스크롤 활성화
          overflowX: 'hidden' // 가로 스크롤 숨김
        }}>
          {textContent}
        </div>
      </div>
    </Router>
  );
}

export default App;