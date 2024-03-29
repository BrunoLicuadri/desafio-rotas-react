
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "./routes/HomePage"
import WelcomePg from "./routes/HomePage/WelcomePg"
import ProductPg from "./routes/HomePage/ProductPg"
import Computers from "./routes/HomePage/ProductPg/Computers"
import Eletronics from "./routes/HomePage/ProductPg/Eletronics"
import Books from "./routes/HomePage/ProductPg/Books"
import AboutUs from "./routes/HomePage/AboutUs"
import NotFound from "./routes/HomePage/NotFound"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<Navigate to="/home"/>} />
          <Route path="home" element={<WelcomePg />} />
          <Route path="products" element={<ProductPg/>} >
            <Route path="computers" element={<Computers/>}/>
            <Route path="eletronics" element={<Eletronics/>}/>
            <Route path="books" element={<Books/>}/>
          </Route>
          <Route path="about" element={<AboutUs/>} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    
    </BrowserRouter>
  )
}

export default App
