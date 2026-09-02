export default function Home() {
  return (
    <div style={{minHeight:'100vh',background:'#0a0a0a',color:'white',fontFamily:'sans-serif'}}>
      <div style={{maxWidth:800,margin:'0 auto',padding:'40px 24px'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <h2 style={{letterSpacing:2}}>GUARDIAN LINK</h2>
          <span style={{background:'#22c55e',padding:'4px 12px',borderRadius:20,fontSize:12}}>● LIVE</span>
        </div>
        
        <div style={{marginTop:80}}>
          <h1 style={{fontSize:48,lineHeight:1.1,margin:0}}>Protection that<br/>moves with you.</h1>
          <p style={{color:'#888',fontSize:18,marginTop:16}}>Invite trusted guardians. Share live location in emergencies. Built for South Africa.</p>
          
          <div style={{display:'flex',gap:12,marginTop:32}}>
            <button style={{background:'white',color:'black',padding:'14px 28px',borderRadius:30,border:0,fontWeight:'bold',fontSize:16}}>Create Safe Circle</button>
            <button style={{background:'#222',color:'white',padding:'14px 28px',borderRadius:30,border:'1px solid #333',fontSize:16}}>How it works</button>
          </div>
        </div>

        <div style={{marginTop:80,display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:16}}>
          <div style={{background:'#171717',padding:20,borderRadius:16}}>
            <div style={{fontSize:24}}>🛡️</div>
            <h4>Trusted Guardians</h4>
            <p style={{color:'#666',fontSize:14}}>Only people YOU choose get alerted.</p>
          </div>
          <div style={{background:'#171717',padding:20,borderRadius:16}}>
            <div style={{fontSize:24}}>📍</div>
            <h4>Live SOS</h4>
            <p style={{color:'#666',fontSize:14}}>One tap shares live location.</p>
          </div>
          <div style={{background:'#171717',padding:20,borderRadius:16}}>
            <div style={{fontSize:24}}>⚡</div>
            <h4>Instant</h4>
            <p style={{color:'#666',fontSize:14}}>Deploys in seconds, not minutes.</p>
          </div>
        </div>

        <p style={{marginTop:60,color:'#333',fontSize:12}}>guardian-link-pearl.vercel.app • Deployed from Pretoria • {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
