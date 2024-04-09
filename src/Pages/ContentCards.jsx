import "/src/styles/ContentCards.css"
import Card from "../Components/Card";

export default function ContentCards(){
  return(
    <section id="informacoes">
      <div className="contentInformation">
        <h1>Vantagens de usar Linux</h1>
        <p>Descubra algumas vantagens do Linux</p>
      </div>
      
      <div className="gridCards">
        <Card 
          image={"https://www.hostmidia.com.br/img/blog/upload/xg-o-que-e-open-source.jpg"} 
          title={"Código Aberto e Gratuito "}
          subtitle={"O Linux é distribuído sob licenças de código aberto, permitindo acesso ao código-fonte. Isso possibilita personalização, modificação e distribuição, sendo uma opção econômica, pois muitas distribuições Linux são gratuitas."} />
        
        <Card 
          image={"https://img.freepik.com/vetores-premium/programacao-de-seguranca-do-computador-servidor_18660-1606.jpg"} 
          title={"Estabilidade e Segurança"}
          subtitle={"O Linux é geralmente mais estável e seguro que o Windows. Sua arquitetura e separação de privilégios minimizam riscos de vírus e malware. A comunidade de código aberto responde rapidamente a problemas de segurança."} />
        
        <Card 
          image={"https://www.hostnet.com.br/wp-content/uploads/2020/06/velocidade-desempenho-sites.jpg"} 
          title={"Desempenho "}
          subtitle={"O Linux oferece melhor desempenho em sistemas com recursos limitados, como máquinas antigas ou dispositivos embarcados. É conhecido por sua eficiência e baixo consumo de recursos."} />
        
        <Card 
          image={"https://www.alura.com.br/artigos/assets/cli-interface-linha-comandos/ms-dos-windows.png"} 
          title={"Ambiente de Linha de Comando "}
          subtitle={" O Linux possui um ambiente de linha de comando poderoso, valorizado por administradores de sistemas e desenvolvedores. Isso facilita a automação de tarefas, o gerenciamento de arquivos e a execução de comandos complexos."} /> 
        
        <Card 
          image={"https://b3441385.smushcdn.com/3441385/wp-content/uploads/2023/11/OIG.HAYUZT729SNwGLL5EJHf.jpg?lossy=2&strip=1&webp=1"} 
          title={"Customização e Flexibilidade"}
          subtitle={"O Linux permite alta customização, permitindo aos usuários ajustar e configurar o sistema conforme suas preferências. Isso é útil para programadores, desenvolvedores e administradores de sistemas que precisam de controle total sobre o ambiente de trabalho."} /> 
        
        <Card 
          image={"https://dkrn4sk0rn31v.cloudfront.net/uploads/2021/04/configurando-ambiente-de-desenvolvimento-python-no-linux.png"} 
          title={"Ferramentas de Desenvolvimento "}
          subtitle={"Muitas ferramentas de desenvolvimento e ambientes de programação são nativamente suportados no Linux. Isso faz dele uma escolha popular para desenvolvedores que trabalham em diferentes linguagens e plataformas."} /> 
      </div>
    </section>
  )
}


