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
        height: '100vh', 
        margin: 0, 
        padding: 0,
        overflowX: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'row',  // 페이지를 좌우로 나누기 위해 'row'로 설정
      }}>
        {/* 왼쪽 배경 (bluesky.jpg) */}
        <div 
          style={{
            width: '50%',  // 왼쪽 절반 차지
            height: '100vh',  // 화면 전체 높이
            backgroundImage: `url('/bluesky.jpg')`,  // 배경을 bluesky.jpg로 설정
            backgroundPosition: 'center center',
            backgroundSize: 'cover',  // 배경 이미지가 화면을 덮도록 설정
            backgroundRepeat: 'no-repeat',  // 반복되지 않도록 설정
            position: 'relative',  // img1.jpg 배치할 기준으로 설정
          }}
        >
          {/* img1.jpg를 중앙에 배치 */}
          <img 
            src="/img2.jpg"  // public 폴더의 img1.jpg 파일을 사용
            alt="프로필 사진"
            style={{
              position: 'absolute',
              top: '50%',  // 배경의 중앙에 배치
              left: '50%',
              transform: 'translate(-50%, -50%)',  // 이미지 중앙 정렬
              width: '500px',  // 이미지 크기 설정 (필요에 따라 변경)
              height: '500px',
              borderRadius: '10px',  // 이미지 테두리 둥글게
              objectFit: 'cover',  // 이미지가 영역을 꽉 채우도록 설정
            }}
          />
        </div>

        {/* 텍스트 영역 (오른쪽 50%) */}
        <div 
          style={{
            width: '50%',  // 오른쪽 절반 차지
            height: '100vh',  // 화면 전체 높이
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#000000',  // 텍스트 색상
            padding: '20px',
          }}
        >
          {/* 헤더 */}
          <div style={{
            position: 'absolute',
            top: 20,
            right: 20,
            zIndex: 10,
            fontSize: '18px',  // 헤더와 비슷한 글자 크기
          }}>
            <Header />
          </div>

          {/* 페이지 내용 */}
          <div style={{
            width: '100%',
            textAlign: 'center',
            color: 'white',  // 텍스트 색상
          }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
            </Routes>
          </div>

          {/* 푸터 */}
          <div style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            zIndex: 10,
            fontSize: '18px',  // 헤더와 비슷한 글자 크기
            color: 'blue',  // 푸터 텍스트 색상 (원하는 색상으로 수정 가능)
            textAlign: 'right',  // 오른쪽 정렬
          }}>
            <Footer />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;