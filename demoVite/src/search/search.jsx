import React, {useState} from 'react';
import { SearchPokemon } from './searchfunction';

import './search.css'







export function Search(props) {
    const userName = props.data;
    const [inputValue, setInputValue] = useState('');

    const buttonClick = () => {
        const inputField = document.getElementById('userInput');
        setInputValue(inputField.value);
    };

    const setPokedexNumber = (input) => {
        if (input !== '') {
            return (
                <p>{input}'s number</p>
            );
        }
    };

    const setPokemonType = (input) => {
        if (input !== '') {
            return (
                <p>{input}'s type</p>
            );
        }
    };
    
    const setPokemonWeight = (input) => {
        if (input !== '') {
            return (
                <p>{input}'s Weight</p>
            );
        }
    };

    const setPokemonHeight = (input) => {
        if (input !== '') {
            return (
                <p>{input}'s Height</p>
            );
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
          event.preventDefault(); 
          buttonClick(); 
        }
    };

    return (
        <body>
            <main>
                <div className = 'top'>
                { /*  <div className = "user">
                        User: 
                        <span className = "user-name">{userName}</span>
                    </div>*/}
                    <h3>Please type in a Pokemon name:</h3>
                    <form method = "get" action ="search.jsx">
                        <div>
                            <input
                                type = "text" 
                                id = 'userInput'
                                onKeyPress={handleKeyPress}
                                placeholder = "Pokemon Name" 
                            />
                        </div>
                        <button type = "button" class="btn btn-danger btn-sm" onClick={buttonClick}>Search</button>
                    </form>
                </div>
                <div className = "searches">
                    <h4><strong>Your most recent search: {inputValue}</strong></h4>
                    <h4>{inputValue}</h4>
                    <h5><strong>Pokedex Number</strong> {setPokedexNumber(inputValue)}</h5>
                    <h5><strong>Type</strong> {setPokemonType(inputValue)}</h5>
                    <h5><strong>Height</strong> {setPokemonHeight(inputValue)}</h5>
                    <h5><strong>Weight</strong> {setPokemonWeight(inputValue)}</h5>
               
                </div>

            </main>

            <div className = "container-fluid">
                <h4><strong>Today's most popular search:</strong></h4>
                <h4>{inputValue}</h4>
            </div>
        </body>
    );
}