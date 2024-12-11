import React, {useState} from 'react';
import { SearchPokemon } from './searchfunction';

import './search.css'



function errorChecker(input) {
    const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
    fetch(url)
        .then(response => {
            if (response.ok && input) {
                document.getElementById("statusMessage").textContent = "Here is info on " + input;
            } else if (response.ok && !input) {
                document.getElementById("statusMessage").textContent = input;
            } else {
                document.getElementById("statusMessage").textContent = "Error - invalid input. Please check your spelling and try again";
            }
        })
}


export function Search(props) {
    const userName = props.data;
    const [inputValue, setInputValue] = useState('');

    const buttonClick = () => {
        const inputField = document.getElementById('userInput');
        setInputValue(inputField.value.toLowerCase());
        saveSearch(inputValue);
    };

    function saveSearch(input) {
        const newSearch = { name: input };
        fetch('/api/search', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(newSearch),
        });
    }

    const retrieveSearch = () => {
        const [value, setValue] = useState('');
        fetch('/api/test')
            .then((response) => response.json())
            .then((testing) => {
                setValue(testing.test);
            })
        return (
            <p>{value}</p>
        )
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
                    setNumberValue(`#${data.id}`); 
                } else {
                    setNumberValue(''); 
                }
            })
            .catch(() => {
                setNumberValue(''); 
            });

        if (input !== '') {
            return (
                <p>{numberValue}</p>
            );
        }
    };

    const setPokemonType = (input) => {
        const [typeValue, setTypeValue] = useState('');
        const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    setTypeValue('');
                    throw new Error('Invalid response');
                }
                return response.json();
            })
            .then(data => {
                if (data && data.types) {
                    const names = data.types.map(typeEntry => typeEntry.type.name).join(' ');
                    setTypeValue(names);
                } else {
                    setTypeValue('');
                }
            })
            .catch(() => {
                setTypeValue('');
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
            .then(response => {
                if (!response.ok) {
                    setWeightValue('');
                    throw new Error('Invalid response');
                }
                return response.json();
            })
            .then(data => {
                setWeightValue(`${data.weight/10} kilograms`);
            });
        if (input !== '') {
            return (
                <p>{weightValue}</p>
            );
        }
    };

    const setPokemonHeight = (input) => {
        const [heightValue, setHeightValue] = useState('');
        const url = 'https://pokeapi.co/api/v2/pokemon/' + input;
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    setHeightValue('');
                    throw new Error('Invalid response');
                }
                return response.json();
            })
            .then(data => {
                setHeightValue(`${data.height/10} meters`);
            });
        if (input !== '') {
            return (
                <p>{heightValue}</p>
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
                        <button type = "button" className="btn btn-danger btn-sm" onClick={buttonClick}>Search</button>
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
                <h4><strong>Today's most recent search:</strong></h4>
                <h4>{retrieveSearch()}</h4>
            </div>
        </body>
    );
}

export default Search;