import Jogos from "./components/Jogos/Jogos"
import LandingPage from "./components/LandingPage/LandingPage"
import { Routes, Route } from "react-router-dom"
import Loja from "./components/Loja/Loja"
import Ajuda from "./components/Ajuda/Ajuda"
import Header from "./components/Header/Header"
import Launcher from "./components/Launcher/Launcher"
import TodosJogos from "./components/TodosJogos/TodosJogos"
import Downloaded from "./components/Downloaded/Downloaded"
import GameDetails from "./components/GameDetails/GameDetails"

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/launcher" element={<Launcher />} />
        <Route path="/todosjogos" element={<TodosJogos />} />
        <Route path="/downloaded" element={<Downloaded />} />
        <Route path="/game/:number" element={<GameDetails />} />
      </Routes>
    </>
  )
}

export default App