import { Usuario } from "./Usuario"

export const Story = () => {
  const objStory = [
    { src: "assets/9gag.svg", alt: "9gag" },
    { src: "assets/meowed.svg", alt: "meowed" },
    { src: "assets/barked.svg", alt: "barked" },
    { src: "assets/nathanwpylestrangeplanet.svg", alt: "nathanwpylestrangeplanet" },
    { src: "assets/wawawicomics.svg", alt: "wawawicomics" },
    { src: "assets/respondeai.svg", alt: "respondeai" },
    { src: "assets/filomoderna.svg", alt: "filomoderna" },
    { src: "assets/memeriagourmet.svg", alt: "memeriagourmet" }
  ]

  return (
    <>
      {objStory.map(i =>
        <div className="story">
          <div className="imagem">
            <img src="assets/9gag.svg" alt="9gag" />
          </div>
          <Usuario>
            9gag
          </Usuario>
        </div>
      )}

    </>
  )
}