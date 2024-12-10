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
                <div className="navbar">
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
                        <Route path='/login' element={<Login />} />
                        <Route path='/search' element={<Search />} />
                    </Routes>
                    <footer>
                        <div class = "containter-fluid">
                            <span class="text-reset">Matt Banks:</span>
                            <a className='text-reset' href="https://github.com/mattyb4/startup.git">GitHub</a>
                        </div>
                    </footer>
                </div>
            </BrowserRouter>
        </div>
        
    );
}

export default App;