import { Usuario } from "./Usuario";

export const Sugestao = () => {
  const objSugestao = [
    { src: "assets/bad.vibes.memes.svg", nome: "bad vibes memes", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/chibirdart.svg", nome: "chibirdart", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram", seguir: "Seguir" },
    { src: "assets/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você", seguir: "Seguir" },
    { src: "assets/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você", seguir: "Seguir" }
  ];

  return (
    <>
      {objSugestao.map(i =>
        <div className="sugestao">
          <Usuario>
            <img src={i.src} alt={i.nome} />
            <div className="texto">
              <div className="nome">{i.nome}</div>
              <div className="razao">{i.razao}</div>
            </div>
          </Usuario>
          <div className="seguir">{i.seguir}</div>
        </div>
      )}
    </>

  )
}
