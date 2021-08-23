import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';

test('renders button correctly ', () => {
    render(<App/>);
    // is the button loaded
    const colorButton = screen.getByRole('button', {name: 'Change to blue'});
    expect(colorButton).toBeInTheDocument();

    // what is the intial color
    expect(colorButton ).toHaveStyle({backgroundColor: "red"})


    //when button is clicked  does the color and text change
    fireEvent.click(colorButton) ;
    expect(colorButton ).toHaveStyle({backgroundColor: "blue"})
    expect(colorButton).toHaveTextContent("Change to red")
});

test( "Can the button be disabled" , () => {
    render(<App/>);
    const myButton = screen.getByRole("button", {name: "Change to blue"})
    const checkBox = screen.getByRole("checkbox")

    fireEvent.click(checkBox);
    expect(myButton).toBeDisabled()
    fireEvent.click(checkBox);
    expect(myButton).toBeEnabled()
})
