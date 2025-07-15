function AboutPage() {
  return (
    <div style={{ 
      width: '100%', 
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      paddingTop: '40px'
    }}>
      <div>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          marginBottom: '30px',
          color: 'white'
        }}>
          About Me
        </h1>
        
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '20px',
            color: 'white'
          }}>
            개발자 소개
          </h3>
          
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.6', 
            marginBottom: '20px',
            color: '#000000ff'
          }}>
            안녕하세요! 저는 개발에 열정을 가진 개발자입니다. 
          </p>
          
          <p style={{ 
            fontSize: '16px', 
            lineHeight: '1.6', 
            marginBottom: '20px',
            color: '#000000ff'
          }}>
            React, JavaScript를 공부하고 있으며, 새로운 기술을 배우는 것을 즐깁니다.
          </p>
        </div>
        
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '25px',
          borderRadius: '15px',
          marginBottom: '30px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '20px',
            color: 'white'
          }}>
            기술 스택
          </h3>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px'
          }}>
            {['React', 'JavaScript', 'Node.js', 'Git'].map((tech) => (
              <span key={tech} style={{
                backgroundColor: 'rgba(102, 126, 234, 0.3)',
                color: 'white',
                padding: '8px 16px',
                borderRadius: '20px',
                fontSize: '14px',
                border: '1px solid rgba(102, 126, 234, 0.5)'
              }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div style={{
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          padding: '25px',
          borderRadius: '15px',
          border: '1px solid rgba(255, 255, 255, 0.2)'
        }}>
          <h3 style={{ 
            fontSize: '1.5rem', 
            marginBottom: '20px',
            color: 'white'
          }}>
            연락처
          </h3>
          
          <div style={{ color: '#000000ff', fontSize: '16px' }}>
            <p style={{ marginBottom: '10px' }}>📧 Email: aprien258@gmail.com</p>
            <p style={{ marginBottom: '10px' }}>🐙 GitHub: github.com/2T-ae</p>
            <p>💼 LinkedIn: linkedin.com/in/yourprofile</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage