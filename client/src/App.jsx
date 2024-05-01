import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import FooterCom from "./components/footer"
import CommentSection from "./components/CommentSection"

function App() {

  return (
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/comment" element={<CommentSection/>}/>
        </Routes>
        <FooterCom/>
      </BrowserRouter>
  )
}

export default App
