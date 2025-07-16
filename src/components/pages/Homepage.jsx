function HomePage() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%', 
      display: 'flex', 
      flexDirection: 'column',  // 세로로 정렬
      justifyContent: 'center',  // 세로 중앙 정렬
      alignItems: 'center',  // 가로 중앙 정렬
      textAlign: 'center', // 텍스트도 가운데 정렬
      color: 'white',  // 텍스트 색상
    }}>
      <h1 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        marginBottom: '30px',
        color: '#3cffc8ff',
      }}>
        Hello, World!
      </h1>

      <h2 style={{ 
        fontSize: '1.8rem', 
        marginBottom: '25px' 
      }}>
        #1 Portfolio
      </h2>

      <p style={{ 
        fontSize: '18px', 
        lineHeight: '1.6', 
        marginBottom: '30px',
      }}>
        환영합니다! 이곳은 메인 페이지입니다.<br></br>
        현재는 제작중이므로 미완성 상태입니다.
      </p>

      {/* GitHub Repository 버튼 */}
      <div style={{ 
        marginTop: '20px',  // 버튼과 텍스트 사이의 간격
        display: 'flex',
        gap: '20px',
        alignItems: 'center'
      }}>
        <button style={{
          padding: '15px 30px',
          backgroundColor: '#344fc9ff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}>
          <a 
            href="https://github.com/2T-ae/portfolio" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              display: 'block',
              width: '100%',
              height: '100%'
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repository
          </a>
        </button>

        <button style={{
          padding: '15px 30px',
          backgroundColor: '#344fc9ff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          fontSize: '16px',
          cursor: 'pointer',
          transition: 'background-color 0.3s ease'
        }}>
          <a 
            href="https://github.com/2T-ae/portfolio" 
            style={{ 
              color: 'white', 
              textDecoration: 'none',
              display: 'block',
              width: '100%',
              height: '100%'
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Notion
          </a>
          </button>
        </div>
      </div>
  );
}

export default HomePage;
