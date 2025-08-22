import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import NotFound from "./pages/NotFound";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";


function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/logement/:id" element={<Housing/>} />
        <Route path="*" element={<NotFound/>} />
        <Route path="/404" element={<NotFound/>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App