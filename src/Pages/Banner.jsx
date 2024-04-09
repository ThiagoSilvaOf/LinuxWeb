import "/src/styles/Banner.css"

export default function Banner(){
  return(
    <section id="home" className="sectionBanner">
      <img width={256} src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Tux.svg/800px-Tux.svg.png" />
      <h1>Aprenda sobre o que é Linux</h1>
      <h2>Conheça esse incrivel sistema operacional</h2>
    </section>
  )
}