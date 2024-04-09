export default function DistribuicaoInfo(props){
  return(
    <div className="containerInfo">
      <img src={props.image} />
      <p>{props.info}</p>
    </div>
  )
}