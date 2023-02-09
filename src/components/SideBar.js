import { Sugestoes } from "./Sugestoes"

export const SideBar = () => {
  const userName = "catanacomics"
  const links = "Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma"
  const copyright = "© 2021 INSTAGRAM DO FACEBOOK"

  return (
    <div class="sidebar">
      <div class="usuario">
        <img src="assets/img/catanacomics.svg" alt="imagem de perfil" />
        <div class="texto">
          <span>
            <strong>{userName}</strong>
            <ion-icon name="pencil"></ion-icon>
          </span>
        </div>
      </div>

      <Sugestoes />

      <div class="links">
        {links}
      </div>

      <div class="copyright">
       {copyright}
      </div>
    </div>
  )
}
