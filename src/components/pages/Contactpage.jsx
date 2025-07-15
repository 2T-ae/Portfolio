function ContactPage() {
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
  );
}

export default ContactPage;
