import Counter from "./components/Counter.jsx"
import { Routes, Route, Link } from "react-router-dom"
import './index.scss'
import {HomePageAsync} from "./pages/HomePage/HomePageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from "react";

const App = () => {
    return (
        <div className="app">
            <Counter/>
            <Link to={'/'}> Главная</Link>
            <Link to={'/about'}> О сайте</Link>
            <Suspense fallback={<div>...loading</div>} >
                <Routes>
                    <Route path={'/'} element={<HomePageAsync />}/>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>

        </div>
    )
}

export default App;
