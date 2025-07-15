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
        textShadow: '1px 1px 2px rgba(255, 255, 255, 0.7)',
        margin: '20px 0'
      }}>
        Welcome to My Space
      </h3>
    </>
  );
}

export default MainContent;
