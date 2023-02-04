import Counter from "./components/Counter.jsx"
import { Routes, Route, Link } from "react-router-dom"
import './styles/index.scss'
import {HomePageAsync} from "./pages/HomePage/HomePageAsync";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {Suspense} from "react";
import {useTheme} from "./theme/useTheme";


const App = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle theme</button>
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
