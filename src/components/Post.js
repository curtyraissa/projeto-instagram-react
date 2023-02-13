import { useState } from "react"
import { Usuario } from "./Usuario"

export const Post = (props) => {
  const [heart, setHeart] = useState(true)
  const [bookmark, setBookmark] = useState(true)

  return (
    <>
      <div className="post">
        <div className="topo">
          <Usuario>
            <img src={props.srcTopo} alt={props.altTopo} />
            {props.altTopo}
          </Usuario>
          <div className="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div className="conteudo">
          <img onClick={() => {setHeart(!heart)}} src={props.srcPost} alt={props.altPost} data-test="post-image"/>
        </div>

        <div className="fundo">
          <div className="acoes">
            <div>
              <ion-icon onClick={() => {setHeart(!heart)}} class={(heart === true) ? "black" : "red"} name={(heart === true) ? "heart-outline" : "heart"} data-test="like-post"></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon onClick={() => {setBookmark(!bookmark) }} name={(bookmark === true) ? "bookmark-outline" : "bookmark"} data-test="save-post"></ion-icon>
            </div>
          </div>

          <div className="curtidas">
            <img src={props.srcLike} alt={props.altLike} />
            <div className="texto" data-test="likes-number">
              Curtido por <strong>{props.altLike}</strong> e <strong>outras {(heart === true) ? props.like : (props.like + 0.001)} {props.like === 1 ? "pessoa" : "pessoas"}</strong>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}