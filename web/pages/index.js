export default function Home() {
  return (
    <>
      <header style={{background:'#fdf6f0', padding:'3rem 1rem', textAlign:'center'}}>
        <h1 style={{margin:0, color:'#5c3d2e'}}>Elena Attianese PhotoStudio</h1>
        <p style={{margin:'.5rem 0 0', color:'#7d5d54'}}>Matrimoni, cerimonie e eventi speciali</p>
        <a href="https://wa.me/393928273162" style={{display:'inline-block', marginTop:'1.5rem', background:'#25d366', color:'#fff', padding:'.8rem 1.4rem', borderRadius:'6px', textDecoration:'none'}}>Chiedi un preventivo su WhatsApp</a>
      </header>

      <section style={{padding:'3rem 1rem', textAlign:'center'}}>
        <h2>Portfolio</h2>
        <p>Le emozioni catturate diventano ricordi per sempre.<br/>Scorri le gallery qui sotto e richiedi il tuo servizio.</p>
        {/* placeholder per le foto – le aggiungiamo subito dopo */}
      </section>
    </>
  )
}
