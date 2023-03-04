import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from '@/shared/config/routerConfig/routerConfig';

export function AppRouter() {
  return (
    <Suspense fallback={<div>...loading 1</div>}>
      <Routes>
        {routeConfig.map(({ element, path }) => (
          <Route
            key={path}
            path={path}
            element={(
              <Suspense fallback={<div>...Loading 2</div>}>
                <div className="page-wrapper">
                  {element}
                </div>
              </Suspense>
            )}
          />
        ))}
      </Routes>
    </Suspense>
  );
}
