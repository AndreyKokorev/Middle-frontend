import { RouteProps } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';

export enum AppRoutes {
    HOME = 'home',
    ABOUT = 'about',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.ABOUT]: 'about',
  [AppRoutes.HOME]: '/',
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.home,
    element: <HomePage />,
  },
  {
    path: RoutePath.about,
    element: <AboutPage />,
  },
];
