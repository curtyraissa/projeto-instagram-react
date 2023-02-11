import { Sugestao } from "./Sugestao"

export const Sugestoes = () => {
  const titulo = "Sugestões para você"
  const verTudo = "Ver Tudo"
  
  return (
      <div className="sugestoes">
        <div className="titulo">
          {titulo}
          <div>{verTudo}</div>
        </div>
        <Sugestao />
      </div>
  )
}