import { lazy } from "react";
import NoLazy from "../01-lazyload/components/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    id: number;
    to: string;
    path: string;
    //Component: React.LazyExoticComponent<() => JSX.Element>;
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent;
    name:string;
}

const LazyLayout = lazy(()=> import( /* webpackChunkName: "LazyLoad" */ '../01-lazyload/layout/LazyLayout'));

export const routes:Route[] = [
    {
        id:1,
        path:'/lazyload/*',
        to:'/lazyload/',
        Component: LazyLayout,
        name: 'LazyLayout Dshboard'
    },
    {
        id:2,
        to:'/lazy2',
        path:'lazy2',
        Component: NoLazy,
        name: 'Lazy-2'
    },
]