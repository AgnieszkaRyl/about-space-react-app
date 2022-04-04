import './App.css';
import Home from "./pages/Home/Home.jsx";
import Article from "./pages/Article/Article";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Loading from "./pages/Loading/Loading";
import Favourite from "./pages/Favourite/Favourite";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/articles/:id" element={<Article/>}/>
                <Route path="/loading" element={<Loading/>}/>
                <Route path="/fav" element={<Favourite/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
