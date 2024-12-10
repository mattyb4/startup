import React from 'react';
import './search.css'

export function Search(props) {
    return (
        <body>
            <main>
                <div className = 'top'>
                    <div className = "user">
                        User: 
                        <span className = "user-name">Username</span>
                    </div>
                    <h3>Please type in a Pokemon name:</h3>
                    <form method = "get" action ="search.jsx">
                        <div>
                            <input type = "text" placeholder = "Pokemon Name" />
                        </div>
                        <button type = "submit" class="btn btn-danger btn-sm">Search</button>
                    </form>
                </div>
                <div className = "searches">
                    <h4><strong>Your most recent searches:</strong></h4>
                    <h4>Pikachu</h4>
                    <p>Info about Pikachu</p>
                    <h4>Bulbasaur</h4>
                    <p>Info about Bulbasaur</p>
                    <h4>Charmander</h4>
                    <p>Info about Charmander</p>
                </div>

            </main>

            <div className = "container-fluid">
                <h4><strong>Today's most popular search:</strong></h4>
                <h4>Placeholder text</h4>
            </div>
        </body>
    );
}