import { Sugestao } from "./Sugestao"

export const Sugestoes = () => {
  const titulo = "Sugestões para você"
  const verTudo = "Ver Tudo"
  
  return (
      <div class="sugestoes">
        <div class="titulo">
          {titulo}
          <div>{verTudo}</div>
        </div>
        <Sugestao />
      </div>
  )
}