import "/src/styles/Contato.css"
import Form from "../Components/Form";

export default function Contato() {
  return (
    <section id="contato">
      <h1 id="titulo" className="flex justify-center text-2xl font-bold mt-28 sm:text-5xl">Entre em contato</h1>
      
      <div className="formGrid gap-3 max-w-screen-md mx-auto mt-10 px-6">
        <div className="nome">
          <Form label={"Nome:"} type={"Text"} placeholder={"Digite seu nome"} />
        </div>
        <div className="email">
          <Form
            label={"Email:"}
            type={"Text"}
            placeholder={"Digite seu e-mail"}
          />
        </div>
        <div className="celular">
          <Form
            label={"Celular:"}
            type={"tel"}
            placeholder={"(xx) xxxx-xxxx"}
          />
        </div>
        <div className="mensagem">
          <Form
            label={"Mensagem:"}
            type={"textarea"}
            placeholder={"Digite sua mensagem..."}
          />
        </div>
        <button className="btn uppercase w-full py-2 rounded-md bg-blue-500 mb-14 shadow-lg sm:px-5 w-full sm:w-auto justify-self-start sm:justify-self-end">Enviar</button>
      </div>
    </section>
  );
}
