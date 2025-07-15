function AboutContent() {
  return (
    <div style={{ textAlign: 'center' }}>
      <h3 style={{
        color: 'white',
        fontSize: '1.8rem',
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
        marginBottom: '20px'
      }}>
        About Me
      </h3>
      <p style={{
        color: 'black',
        fontSize: '1.1rem',
        textShadow: '1px 1px 2px rgba(0,0,0,0.7)',
        maxWidth: '400px',
        margin: '0 auto'
      }}>
        개발자 소개 내용이 여기에 표시됩니다.
      </p>
    </div>
  );
}

export default AboutContent;
