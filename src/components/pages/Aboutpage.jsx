import { FaReact, FaNodeJs, FaGitAlt, FaJsSquare, FaPython } from 'react-icons/fa';

function AboutPage() {
  // 공통 스타일 정의
  const commonCardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '25px',
    borderRadius: '15px',
    marginBottom: '30px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
  };

  const iconStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    fontSize: '14px',
    backgroundColor: 'rgba(102, 126, 234, 0.3)',
    color: 'white',
    padding: '8px 16px',
    borderRadius: '20px',
    border: '1px solid rgba(102, 126, 234, 0.5)',
  };

  return (
    <div style={{
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start', // 왼쪽 정렬
      textAlign: 'left', // 텍스트 왼쪽 정렬
    }}>
      <h1 style={{
        fontSize: '2.0rem',
        fontWeight: 'bold',
        marginBottom: '30px',
        color: 'white',
        width: '100%'
      }}>
        About Me
      </h1>

      {/* 개발자 소개 섹션 */}
      <div style={commonCardStyle}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'white' }}>개발자 소개</h3>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px', color: '#ffffff' }}>
          안녕하세요! 저는 현재 조선대학교 컴퓨터공학과에 재학중인 25학번 윤영태입니다.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px', color: '#ffffff' }}>
          React, JavaScript를 공부하고 있으며, 새로운 기술을 배우는 것을 즐깁니다.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px', color: '#ffffff' }}>
          지금 보고 계신 사이트는 1학년 1학기 여름방학때 자바 스크립트와 리액트를 공부하면서 만든 포트폴리오입니다.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', marginBottom: '10px', color: '#ffffff' }}>
          앞으로도 여러 경험을 쌓고, 이를 통해 성장해 나갈 것입니다.
        </p>
      </div>

      {/* 기술 스택 섹션 */}
      <div style={commonCardStyle}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'white' }}>기술 스택</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          {[{
            name: 'React',
            icon: <FaReact size={24} color="#61DBFB" />
          },
          {
            name: 'JavaScript',
            icon: <FaJsSquare size={24} color="#F7DF1E" />
          },
          {
            name: 'Node.js',
            icon: <FaNodeJs size={24} color="#68A063" />
          },
          {
            name: 'Git',
            icon: <FaGitAlt size={24} color="#F1502F" />
          }].map(({ name, icon }, index) => (
            <div key={index} style={iconStyle}>
              {icon}
              <span>{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 연락처 섹션 */}
      <div style={commonCardStyle}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', color: 'white' }}>연락처</h3>
        <div style={{ color: '#ffffff', fontSize: '16px' }}>
          <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <img
              src="https://img.shields.io/badge/Gmail-black?style=for-the-badge&logo=gmail&logoColor=white"
              alt="Gmail"
              style={{ marginRight: '10px' }}
            />
            aprien258@gmail.com
          </p>
          <p style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
            <img
              src="https://img.shields.io/badge/github-black?style=for-the-badge&logo=github&logoColor=white"
              alt="GitHub"
              style={{ marginRight: '10px' }}
            />
            github.com/2T-ae
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;