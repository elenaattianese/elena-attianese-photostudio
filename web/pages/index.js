export default function Home() {
  const photos = [
    {src:'https://source.unsplash.com/600x400?wedding', desc:'Matrimonio'},
    {src:'https://source.unsplash.com/600x400?communion', desc:'Comunione'},
    {src:'https://source.unsplash.com/600x400?event', desc:'Evento'}
  ];

  return (
    <>
      <header style={{background:'#fdf6f0', padding:'3rem 1rem', textAlign:'center'}}>
        <h1 style={{margin:0, color:'#5c3d2e'}}>Elena Attianese PhotoStudio</h1>
        <p style={{margin:'.5rem 0 0', color:'#7d5d54'}}>Matrimoni, cerimonie e eventi speciali</p>
        <a href="https://wa.me/393928273162" style={{display:'inline-block', marginTop:'1.5rem', background:'#25d366', color:'#fff', padding:'.8rem 1.4rem', borderRadius:'6px', textDecoration:'none'}}>Chiedi un preventivo su WhatsApp</a>
      </header>

      <section style={{padding:'3rem 1rem', textAlign:'center'}}>
        <h2>Portfolio</h2>
        <div style={{display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center', marginTop:'1.5rem'}}>
          {photos.map((p,i)=>(
            <div key={i} style={{flex:'0 0 280px'}}>
              <img src={p.src} alt={p.desc} style={{width:'100%', borderRadius:'8px'}}/>
              <p style={{margin:'.5rem 0', color:'#555'}}>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
