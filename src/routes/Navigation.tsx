import { Suspense } from 'react';
import { Routes, Route, NavLink, Navigate,BrowserRouter } from 'react-router-dom';
import { routes } from './routes';

import logo from '../logo.svg'


export const Navigation = () => {
    return (
      <Suspense fallback={<span>LOADING...</span>}>
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={ logo } alt="React Logo" />
                    <ul>
                      {
                        routes.map( link => (
                          <li key={link.id}>
                              <NavLink to={link.to} className={ ({ isActive }) => isActive ? 'nav-active' : '' }>{link.name}</NavLink>
                          </li>
                        ))
                      }
                    </ul>
                </nav>


                <Routes>
                    {
                      routes.map( route => (
                        <Route key={route.id} path={route.path} element={ <route.Component/> } />
                      ))
                    }
                    <Route path="/*" element={ <Navigate to={routes[0].to} replace /> } />
                </Routes>

            </div>
        </BrowserRouter>
      </Suspense>
    )
}