// Header.jsx 파일
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div style={{
      display: 'flex', 
      justifyContent: 'flex-end', // 오른쪽 정렬
      alignItems: 'center',
      padding: '20px',  // 헤더의 상하 여백
    }}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/projects" style={linkStyle}>Projects</Link>
      <Link to="/weather" style={linkStyle}>Weather</Link>
    </div>
  );
}

// 스타일 정의
const linkStyle = {
  marginLeft: '20px',  // 링크들 간의 간격
  marginRight: '20px',  // 링크들 간의 간격
  textDecoration: 'none',  // 링크 밑줄 제거
  color: '#00d0ffff',  // 링크 색상
  fontSize: '18px',
  fontWeight: 'bold',
  transition: 'color 0.3s ease',  // 색상 변화 효과
};

export default Header;
