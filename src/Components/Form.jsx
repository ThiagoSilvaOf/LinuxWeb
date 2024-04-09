export default function Form(props){
  return(
    <form>
      <label>{props.label}</label>
      {props.type === "textarea" ? 
        <textarea className="pt-3 pl-2 rounded border border-blue-300 w-full" placeholder={props.placeholder} rows={6} /> :
        <input className="h-12 pl-2 rounded border border-blue-300 w-full" type={props.type} placeholder={props.placeholder} />
      }
    </form>
  )
}