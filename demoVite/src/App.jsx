import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { Search } from './search/search';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {
    return (
        <div>
            <BrowserRouter>
                    <menu className="navbar-nav">
                        <li className='nav-item'>
                            <NavLink className='nav-link' to=''>
                                Login
                            </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='search'>
                                Search
                            </NavLink>
                        </li>
                        <Routes>
                            <Route 
                                path='/'
                                element={
                                    <Login/>
                                }
                                exact
                            />
                            <Route path='/search' element={<Search />} />
                        </Routes>
                        <footer>
                            <div className = "container-sm">
                                <span className="text-reset">Matt Banks:</span>
                                <a href="https://github.com/mattyb4/startup.git">GitHub</a>
                            </div>
                        </footer>
                    </menu>
                
            </BrowserRouter>
        </div>
        
    );
}

export default App;