import React from 'react';

import './login.css';

export function Login({userName}) {
    return (
        <body>
            <main>
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
                    <button type = "submit" class="btn btn-primary">Login</button>
                    <button type = "submit" class="btn btn-dark">Create</button>
                </form>
                <div className = "images">
                    <img className = "pikachu" src="src/assets/pikachu.jpeg" alt="Pikachu" />
                    <img className = "starters" src="src/assets/starters.jpg" alt="starters" />
                </div>
            </main>
        </body>
    )
}