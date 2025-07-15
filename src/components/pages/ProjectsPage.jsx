function ProjectsPage() {
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
          프로젝트 1<br></br><a href='https://github.com/2T-ae/portfolio' style={{ color: 'lightblue' }}>포트폴리오</a>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
