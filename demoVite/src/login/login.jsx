import React from 'react';

import './login.css';

export function Login({props}) {

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
                            <input type="text" placeholder="username@email.com" />
                        </div>
                        <div>
                            <span>🔒</span>
                            <input type="password" placeholder="password" />
                        </div>
                        <button type = "submit" className="btn btn-primary">Login</button>
                        <button type = "submit" className="btn btn-dark">Create</button>
                    </form>
                </div>
                <div className = "images">
                    <img className = "pikachu" src="src/assets/pikachu.jpeg" alt="Pikachu" />
                    <img className = "starters" src="src/assets/starters.jpg" alt="starters" />
                </div>
            </main>
        </body>
    )
}