import { lazy } from "react";

type JSXComponent = () => JSX.Element;

interface Route {
    id: number;
    to: string;
    path: string;
    //Component: React.LazyExoticComponent<() => JSX.Element>;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
}

const Lazy1 = lazy(()=> import( /* webpackChunkName: "LazyPage1" */ '../01-lazyload/components/pages/LazyPages1'));
const Lazy2 = lazy(()=> import( /* webpackChunkName: "LazyPage2" */ '../01-lazyload/components/pages/LazyPages2'));
const Lazy3 = lazy(()=> import( /* webpackChunkName: "LazyPage3" */ '../01-lazyload/components/pages/LazyPages3'));

export const routes:Route[] = [
    {
        id:1,
        to:'/lazy1',
        path:'lazy1',
        Component: Lazy1,
        name: 'Lazy-1'
    },
    {
        id:2,
        to:'/lazy2',
        path:'lazy2',
        Component: Lazy2,
        name: 'Lazy-2'
    },
    {
        id:3,
        to:'/lazy3',
        path:'lazy3',
        Component: Lazy3,
        name: 'Lazy-3'
    },
]