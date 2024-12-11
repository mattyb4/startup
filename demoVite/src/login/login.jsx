import React from 'react';
import { useNavigate } from 'react-router-dom';


import './login.css';

export function Login(props) {
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const navigate = useNavigate();

    async function loginUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    async function createUser() {
        localStorage.setItem('userName', userName);
        props.onLogin(userName);
    }

    return (
        <body>
            <main>
                <div className = "login">
                    <h1>Welcome to Pokemon Search</h1>
                    <form method = "get" action = "search.html">
                        <div>
                            <span>@</span>
                            <input type="text" value = {userName} onChange={(e) => setUserName(e.target.value)} placeholder="username" />
                        </div>
                        <div>
                            <span>🔒</span>
                            <input type="password" placeholder="password" />
                        </div>
                        <button type = "button" className="btn btn-primary" onClick={() => {loginUser(); navigate('/search');}}>Login</button>
                        <button type = "button" className="btn btn-dark" onClick={() => createUser()}>Create</button>
                    </form>
                </div>
                <div className = "images">
                    <img className = "pikachu" src="/pikachu.jpeg" alt="Pikachu" />
                    <img className = "starters" src="/starters.jpg" alt="starters" />
                </div>
            </main>
        </body>
    )
}