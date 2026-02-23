import { RouteProps } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { ListPage } from 'pages/ListPage';
import { NotFoundPage } from 'pages/NotFoundPage';

type AppRouterProps = RouteProps & {
    authOnly?: boolean;
};

export enum AppRoutes {
    MAIN = 'main',
    LIST = 'list',
    //last
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.LIST]: '/list',
    [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRouterProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />,
    },

    [AppRoutes.LIST]: {
        path: RoutePath.list,
        element: <ListPage />,
    },

    //last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.not_found,
        element: <NotFoundPage />,
    },
};
