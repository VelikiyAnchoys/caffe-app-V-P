import "./assets/css/style.css";
import Header from "./components/Header";
import CategoryPage from "./pages/CategoryPage";
import HomePage from "./pages/MenuPage";
import PostDetailPage from "./pages/PostDetailPage";
import PostByCategoryPage from "./pages/PostsByCategoryPage";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/post/:id" element={<PostDetailPage/>}/>
          <Route path="/categories" element={<CategoryPage/>}/>
          <Route path="/category/posts/:id" element={<PostByCategoryPage/>}/>
        </Routes>
      </main>
    </div>  
  );
}

export default App;
