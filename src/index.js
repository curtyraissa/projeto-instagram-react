import ReactDOM from "react-dom"
import { NavBar } from "./components/NavBar"
import { Sugestao } from "./components/Sugestao"

function App() {
    return (
        <>
            <NavBar src="../assets/logo.svg"/>
            <Sugestao />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"))