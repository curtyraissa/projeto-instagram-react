import { Sugestao } from "./Sugestao"

export const Sugestoes = (props) => {
  return (
    <div className="sugestoes">
      <div className="titulo">
        {props.titulo}
        <div>{props.verTudo}</div>
      </div>
      <Sugestao />
    </div>
  )
}