import { Story } from "./Story"

export const Stories = () => {
  const objStory = [
    { src: "assets/9gag.svg", alt: "9gag", nome: "9gag" },
    { src: "assets/meowed.svg", alt: "meowed", nome: "meowed" },
    { src: "assets/barked.svg", alt: "barked", nome: "barked" },
    { src: "assets/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet", nome: "nathanwpylestrangeplanet"},
    { src: "assets/wawawicomics.svg", alt: "wawawicomics", nome: "wawawicomics" },
    { src: "assets/respondeai.svg", alt: "respondeai", nome: "respondeai" },
    { src: "assets/filomoderna.svg", alt: "filomoderna", nome: "filomoderna" },
    { src: "assets/memeriagourmet.svg", alt: "memeriagourmet", nome: "memeriagourmet" }
  ]

  return (
    <>
      {objStory.map(i =>
        <div className="stories">
          <Story key={i.alt} src={i.src} alt={i.alt} nome={i.nome}/>
          <div className="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
          </div>
        </div>
      )}
    </>
  )
}