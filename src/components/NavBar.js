const objNames = [
  "paper-plane-outline",
  "compass-outline",
  "heart-outline",
  "person-outline"
]

export const NavBar = ({src}) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          <ion-icon name="logo-instagram"></ion-icon>
          <div className="separador"></div>
          <img src={src} alt="logo" />
        </div>

        <div className="pesquisa">
          <input type="text" placeholder="Pesquisar" />
        </div>

        <div className="icones">
          {objNames.map((n) => <ion-icon name={n}></ion-icon>)}
        </div>

        <div className="icones-mobile">
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>
      </div>
    </div>
  )
}
