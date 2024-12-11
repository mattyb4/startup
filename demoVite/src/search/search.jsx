import React, {useState} from 'react';
import { SearchPokemon } from './searchfunction';

import './search.css'



function errorChecker(input) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
    fetch(url)
        .then(response => {
            if (response.ok) {
                document.getElementById("statusMessage").textContent = "Info found";
            } else {
                document.getElementById("statusMessage").textContent = "Error: invalid input";
            }
        })
}


export function Search(props) {
    const userName = props.data;
    const [inputValue, setInputValue] = useState('');

    const buttonClick = () => {
        const inputField = document.getElementById('userInput');
        setInputValue(inputField.value);
    };



    const setPokedexNumber = (input) => {
        const [numberValue, setNumberValue] = useState('');
        const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
        fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid response');
            }
            return response.json();
        })
        .then(data => {
            if (data && data.id) {
                setNumberValue(data.id); // Only set if valid data
            } else {
                setNumberValue(''); // Reset if data is invalid
            }
        })
        .catch(() => {
            setNumberValue(''); // Reset if fetch or parsing fails
        });

        if (input !== '') {
            return (
                <p>#{numberValue}</p>
            );
        }
    };

    const setPokemonType = (input) => {
        const [typeValue, setTypeValue] = useState('');
        const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                const names = data.types.map(typeEntry => typeEntry.type.name).join(' ');
                setTypeValue(names);
            });
        if (input !== '') {
            return (
                <p>{typeValue}</p>
            );
        }
    };
    
    const setPokemonWeight = (input) => {
        const [weightValue, setWeightValue] = useState('');
        const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setWeightValue(data.weight);
            });
        if (input !== '') {
            return (
                <p>{weightValue/10} kilograms</p>
            );
        }
    };

    const setPokemonHeight = (input) => {
        const [heightValue, setHeightValue] = useState('');
        const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setHeightValue(data.height);
            });
        if (input !== '') {
            return (
                <p>{heightValue/10} meters</p>
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
                    <h4 id = "statusMessage">checking API...{errorChecker(inputValue)}</h4>
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