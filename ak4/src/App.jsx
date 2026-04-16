import Hamzaprofil from './Components/Hamzaprofil'


function App() {
  return (
    <div style={{
      backgroundColor: 'white',
      minHeight: '100vh',
      padding: '40px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Velkommen til vår oppgave UIN23</h1>
      
      {/* Her kommer Hamza sin profil */}
      <Hamzaprofil />
    </div>
  )
}

export default App