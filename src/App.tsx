
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./routes/HomePage"
import WelcomePg from "./components/WelcomePg"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<WelcomePg />} />

        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
