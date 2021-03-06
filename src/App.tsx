import React, {useState} from 'react';

import './App.css';

export const camelCaseBreaker = (e: string) => {
    return e.replace(/\B([A-Z])\B/g, ' $1')

}

const App = () => {
    const [buttonColor, setButtonColor] = useState('MidnightBlue');
    const [disabled, setDisabled] = useState(false);

    const newButtonColor = buttonColor === "MediumVioletRed" ? 'MidnightBlue' : "MediumVioletRed";

    return (
        <div>
            <button
                style={{backgroundColor: disabled ? "grey" : buttonColor, color: 'white'}}
                onClick={() => setButtonColor(newButtonColor)}
                disabled={disabled}
            >Change to {camelCaseBreaker(newButtonColor)}</button>
            <br/>
            <input
                type="checkbox"
                id="disable-button-checkbox"
                defaultChecked={disabled}
                aria-checked={disabled}
                onChange={(e) => setDisabled(e.target.checked)}/>
            <label htmlFor="disable-button-checkbox"> Disable Button</label>
        </div>
    );
}

export default App;