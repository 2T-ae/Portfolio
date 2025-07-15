function HomePage() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }}>
      <div>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '30px',
          color: 'black'
        }}>
          Try
        </h1>
        
        <h2 style={{ 
          fontSize: '1.8rem', 
          marginBottom: '25px',
          color: 'black'
        }}>
          Hello, World!
        </h2>
        
        <p style={{ 
          fontSize: '18px', 
          lineHeight: '1.6', 
          marginBottom: '30px',
          color: '#000000ff'
        }}>
          환영합니다! 이곳은 메인 페이지입니다.
        </p>
        
        {/* GitHub 링크 */}
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <button style={{
            padding: '15px 30px',
            backgroundColor: '#667eea',
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
                    </div>
                </div>
            </div>
    );
};

export default HomePage;