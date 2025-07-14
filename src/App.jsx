import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ProfileImage from './components/profile/Profile'
import Background from './components/Background'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Background
      src="/bluesky.jpg"
      alt="전체 사이트 배경"
      type="cover"
      height="100vh"  // 전체 뷰포트 높이
      overlay={true}
      overlayColor="rgba(0, 0, 0, 0.1)"
    >
      {/* 전체 콘텐츠를 Background 안에 넣기 */}
      <div style={{ 
        width: '100%', 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}>
        
        <Header />
        
        {/* 메인 히어로 섹션 */}
        <section style={{ 
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px'
        }}>
          <h1 style={{ 
            color: 'white', 
            textAlign: 'center',
            fontSize: '3rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.7)',
            marginBottom: '30px'
          }}>
          </h1>
          
          <div style={{ margin: '20px 0' }}>
            <ProfileImage
              src="/img1.jpg"
              alt="프로필 사진"
              size="large"
              shape="square"
            />
          </div>
          
          <h2 style={{ 
            color: 'white',
            textAlign: 'center',
            fontSize: '2rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
            margin: '30px 0'
          }}>
            Hello, World!
          </h2>
          
          <div className="card" style={{
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '30px',
            borderRadius: '15px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)'
          }}>
            <button onClick={() => setCount((count) => count + 1)}>
              +1
            </button>
            
            <button onClick={() => setCount((count) => count - 1)}>
              -1
            </button>
            
            <p>
              <code>Count is {count}</code>
            </p>
          </div>
        </section>
        
        <Footer />
      </div>
    </Background>
  )
}

export default App