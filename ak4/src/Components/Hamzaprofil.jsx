function Hamzaprofil() {
  return (
    <section style={{
      marginTop: '30px',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '10px',
      maxWidth: '600px'
    }}>
      <h2>Min Profil</h2>
      <p><strong>Navn:</strong> Hamza Ali</p>
      <p><strong>Alder:</strong> 19</p>
      <p><strong>Sted:</strong> Sarpsborg</p>
      <p><strong>Interesser:</strong> Programmering, Fotball, Musikk</p>
      <p><strong>Favorittfarge:</strong> Rød</p>
      <p><strong>Favoritt artist:</strong> Drake</p>
      <p><strong>Studium:</strong> Informasjonssystemer</p>
      <p><strong>Epost:</strong> <a href="mailto:Hamzafa@hiof.no">Hamzafa@hiof.no</a></p>
      
      <img 
        src="/Musashi.jpg" 
        alt="Bilde av Hamza Ali" 
        style={{ 
          marginTop: '20px', 
          maxWidth: '100%', 
          borderRadius: '8px' 
        }} 
      />
    </section>
  )
}

export default Hamzaprofil