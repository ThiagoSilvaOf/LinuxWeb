import "../App.css";

export default function LinkInstalacao(){
  return(
    <div className="boxLink" id="instalacao" style={{
      backgroundImage: 'url("https://t.ctcdn.com.br/CUDCJzALg79-tw1Gd_50-01Uqr4=/2000x1125/smart/i820755.jpeg")',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      padding: '288px 16px'
    }}>
      <section style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBlock: '20px',
        maxWidth: '800px',
        margin: '0 auto',
        borderRadius: '8px',
        backgroundColor: '#ffffff',
        boxShadow: '-2px -1px 11px -4px rgba(0,0,0,0.77)'
      }}>
        <h1 style={{
          fontWeight: 'bold',
          fontSize: '22px',
          marginTop: '12px'
        }}>Como Instalar o Linux</h1>
        <button style={{
          fontWeight: 'bold',
          textTransform: 'uppercase',
          backgroundColor: '#4F84D8',
          marginBlock: '20px',
          border: '2px solid #0044b3',
          borderRadius: '8px',
          padding: '10px 20px'
        }}>Veja o Passo a Passo</button>
      </section>
    </div>
  )
}
