import { render } from "react-dom"
import App from "./app/App"
import {BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "@/app/providers/ThemeProvider";

import '@/shared/config/i18/i18';

render(
    <BrowserRouter>
        <ThemeProvider >
            <App/>
        </ThemeProvider>
    </BrowserRouter>,
    document.querySelector('#root')
)

//Todo: Изменить порядок загрузки файлов стилей
