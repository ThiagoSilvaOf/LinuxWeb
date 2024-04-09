import "/src/styles/Distribuicoes.css"
import DistribuicaoInfo from "../Components/DistribuicaoInfo";

export default function DistribuicoesLinux(){
  return(
    <section className="boxInfo">
      <h1>Distribuições Linux</h1>
      <DistribuicaoInfo 
        image={"https://sysguru.com.br/wp-content/uploads/2021/01/logo-ubuntu-linux.jpg"} 
        info={"Ubuntu é um sistema operacional de código aberto, gratuito e cheio de novos recursos. É conhecido por sua facilidade de uso, tornando-o uma escolha popular para iniciantes em Linux. O Ubuntu oferece suporte a uma ampla gama de aplicativos e é usado tanto para desktops quanto para servidores. Ele é desenvolvido pela Canonical Ltd., que fornece atualizações regulares e suporte de longo prazo."} />

      <DistribuicaoInfo 
      image={"https://1.bp.blogspot.com/-1e5CeHlhy4A/YVOPJKWc8oI/AAAAAAAA8K0/xZqQmn4vk6kLrpET50UfBcO4Kqwl4dmIQCLcBGAsYHQ/s720/fedora.png"} 
      info={"Fedora é uma distribuição Linux com foco em inovação e software de código aberto. É conhecido por ser a primeira distribuição a apresentar novos recursos e tecnologias. O Fedora tem uma forte ênfase na segurança, incluindo recursos como o SELinux por padrão. É patrocinado pela Red Hat Inc., e é a base para o Red Hat Enterprise Linux, que é uma distribuição Linux comercial."} />

      <DistribuicaoInfo 
      image={"https://cdn.icon-icons.com/icons2/2108/PNG/512/debian_icon_130964.png"} 
      info={"Debian é uma das distribuições Linux mais antigas e respeitadas. É conhecido por sua estabilidade e alta qualidade. O Debian utiliza um sistema de gerenciamento de pacotes robusto chamado APT para fornecer atualizações de software. É mantido por uma comunidade de desenvolvedores voluntários de todo o mundo e serve como base para muitas outras distribuições, incluindo o Ubuntu."} />
    </section>
  )
}