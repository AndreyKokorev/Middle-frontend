import React, {Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "@/shared/config/routerConfig/routerConfig";

const AppRouter = () => {
    return (
        <Suspense fallback={<div>...loading</div>} >
            <Routes>
                {routeConfig.map(({ element, path}) =>(
                    <Route
                        key={path}
                        path={path}
                        element={element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

type A<T = {}> = {
    [Property in keyof T]: T[Property]
}

export default AppRouter;
