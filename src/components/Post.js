import { Usuario } from "./Usuario"

export const Post = () => {
  const objPost = [
    { srcTopo: "assets/meowed.svg", altTopo: "meowed", srcPost: "assets/gato-telefone.svg", altPost: "gato-telefone", srcLike: "assets/respondeai.svg", altLike: "respondeai", like: 101.523 },
    { srcTopo: "assets/barked.svg", altTopo: "barked", srcPost: "assets/dog.svg", altPost: "dog", srcLike: "assets/adorable_animals.svg", altLike: "adorable_animals", like: 99.159 },
    { srcTopo: "assets/meowed.svg", altTopo: "meowed", srcPost: "assets/gato-telefone.svg", altPost: "gato-telefone", srcLike: "assets/respondeai.svg", altLike: "respondeai", like: 1 }
  ]

  return (
    <>
      {objPost.map(i =>
        <div className="post">
          <div className="topo">
            <Usuario>
              <img src={i.srcTopo} alt={i.altTopo} />
              {i.altTopo}
            </Usuario>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img src={i.srcPost} alt={i.altPost} />
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon name="heart-outline"></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon name="bookmark-outline"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={i.srcLike} alt={i.altLike} />
              <div className="texto">
                Curtido por <strong>{i.altLike}</strong> e <strong>outras {i.like} {i.like === 1 ? "pessoa" : "pessoas"}</strong>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  )
}