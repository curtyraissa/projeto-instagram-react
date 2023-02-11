import { Sugestoes } from "./Sugestoes"
import { Usuario } from "./Usuario"

export const SideBar = () => {
  const objSideBar = [
    { src: "assets/catanacomics.svg", alt: "imagem de perfil", perfil: "catanacomics" }
  ]
  const links = "Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"
  const copyright = "© 2021 INSTAGRAM DO FACEBOOK"

  const titulo = "Sugestões para você"
  const verTudo = "Ver Tudo"

  return (
    <div className="sidebar">
      {objSideBar.map(i =>
        <Usuario>
          <img src={i.src} alt={i.alt} />
          <div className="texto">
            <span>
              <strong>{i.perfil}</strong>
              <ion-icon name="pencil"></ion-icon>
            </span>
          </div>
        </Usuario>
      )}
      <Sugestoes titulo={titulo} verTudo={verTudo} />

      <Links>
        {links}
      </Links>

      <Copyright>
        {copyright}
      </Copyright>
    </div>
  )
}

const Links = (props) => {
  return (
    <div className="links">
      {props.children}
    </div>
  )
}

const Copyright = (props) => {
  return (
    <div className="copyright">
      {props.copyright}
    </div>
  )
}