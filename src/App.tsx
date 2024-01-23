import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormularioCategoria from './components/categoria/cardCategorias/formularioCategoria/FormularioCateogoria';
import ListaCategorias from './components/categoria/listaCategorias/ListaCategorias';

import Home from './pages/home/Home';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import DeletarCategoria from './components/categoria/cardCategorias/deletarCategoria/deletarCategoria';


function App() {
  return (
    <>
       <BrowserRouter>
      <Navbar />
      <div className="min-h-[80vh]">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Categorias" element={<ListaCategorias />} />
        <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
        <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />   {/* :id = Ã© uma variavel que vem pela url do Front, que represenda o id do item que vai ser editado */}
        <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
       

        </Routes>
      </div>

      <Footer />
      </BrowserRouter>
    </>

  );
}
export default App;






