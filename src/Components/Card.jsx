export default function Card(props){
  return(
    <section className="card">
      <img src={props.image}/>
      <h1>{props.title}</h1>
      <p>{props.subtitle}</p>
    </section>
  )
  
}