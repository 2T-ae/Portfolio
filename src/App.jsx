import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

// 컴포넌트 imports
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { FixedSplitBackground } from './components/Background'

// 페이지 컴포넌트들
import HomePage from './components/pages/Homepage'
import AboutPage from './components/pages/Aboutpage'

function App() {
  return (
    <Router>
      <div style={{ 
        width: '100%', 
        height: '100vh', 
        margin: 0, 
        padding: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
        position: 'relative'
      }}>
        <FixedSplitBackground
          src="/bluesky.jpg"
          alt="전체 사이트 배경"
          type="cover"
          fixedHeight="100vh"
          overlay={true}
          overlayColor="rgba(0, 0, 0, 0.1)"
          backgroundRatio={2/3}
          textAreaColor="#000000"
          direction="horizontal"
          textContent={
            <div style={{ 
              width: '100%', 
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
            </div>
          }
        >
          {/* 왼쪽 배경 영역 위의 공통 콘텐츠 */}
          <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}>
            {/* 헤더 */}
            <div style={{ 
              position: 'absolute',
              top: 20,
              left: 0,
              right: 0,
              zIndex: 10,
              height: '60px'
            }}>
              <Header />
            </div>
            
            {/* 메인 콘텐츠 영역 */}
            <div style={{
              position: 'absolute',
              top: '60px',
              bottom: '60px',
              left: 0,
              right: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 20px'
            }}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
              </Routes>
            </div>
            
            {/* 푸터 */}
            <div style={{ 
              position: 'absolute',
              bottom: 20,
              left: 0,
              right: 0,
              zIndex: 10,
              height: '60px'
            }}>
              <Footer />
            </div>
          </div>
        </FixedSplitBackground>
      </div>
    </Router>
  )
}

// 메인 페이지 배경 콘텐츠
function MainContent() {
  return (
    <>
      <div style={{ margin: '20px 0' }}>
        <img 
          src="/img1.jpg" 
          alt="프로필 사진"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '10px',
            objectFit: 'cover'
          }}
        />
      </div>
      
      <h3 style={{
        color: 'white',
        textAlign: 'center',
        fontSize: '1.5rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        margin: '20px 0'
      }}>
        Welcome to My Space
      </h3>
    </>
  )
}

// About 페이지 배경 콘텐츠
function AboutContent() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{
        color: 'white',
        fontSize: '1.8rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        marginBottom: '20px'
      }}>
        About Me
      </h3>
      <p style={{
        color: 'white',
        fontSize: '1.1rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        maxWidth: '400px'
      }}>
        개발자 소개 내용이 여기에 표시됩니다.
      </p>
    </div>
  )
}

// Projects 페이지 배경 콘텐츠
function ProjectsContent() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{
        color: 'white',
        fontSize: '1.8rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        marginBottom: '20px'
      }}>
        My Projects
      </h3>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px',
        maxWidth: '400px'
      }}>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '10px',
          color: 'white'
        }}>
          프로젝트 1
        </div>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '20px',
          borderRadius: '10px',
          color: 'white'
        }}>
          프로젝트 2
        </div>
      </div>
    </div>
  )
}

// Contact 페이지 배경 콘텐츠
function ContactContent() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{
        color: 'white',
        fontSize: '1.8rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        marginBottom: '20px'
      }}>
        Contact Me
      </h3>
      <div style={{ color: 'white', fontSize: '1.1rem' }}>
        <p>Email: your.email@example.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourprofile</p>
      </div>
    </div>
  )
}

export default App;