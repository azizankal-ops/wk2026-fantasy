export default function Home() {
  return (
    <main style={{
      backgroundColor: '#0d1b3e',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{color: '#D4AF37', fontSize: '2.5rem', marginBottom: '10px'}}>
        🏆 WK 2026 Fantasy League
      </h1>
      <p style={{color: '#aaa', fontSize: '1.1rem', marginBottom: '40px'}}>
        Stel je elftal samen en strijd met je collega's!
      </p>
      <a href="/login" style={{
        backgroundColor: '#D4AF37',
        color: '#0d1b3e',
        padding: '14px 32px',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1.1rem'
      }}>
        Inloggen / Registreren
      </a>
    </main>
  )
}
