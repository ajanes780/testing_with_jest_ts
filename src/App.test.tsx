import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import App from './App';
import {camelCaseBreaker} from "./App"
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

test( "Can the button be disabled and enabled " , () => {
    render(<App/>);
    const myButton = screen.getByRole("button", {name: "Change to blue"})
    const checkBox = screen.getByRole("checkbox", {name:"Disable Button"})
    fireEvent.click(checkBox);
    expect(myButton).toBeDisabled()
    fireEvent.click(checkBox);
    expect(myButton).toBeEnabled()
})

test("Disabled button turns grey when disabled and back to red when enabled", ()=> {
    render(<App/>);
    const myButton = screen.getByRole("button", {name: "Change to blue"})
    const checkBox = screen.getByRole("checkbox", {name:"Disable Button"})
    // disable the button
    fireEvent.click(checkBox);
    expect(myButton).toHaveStyle({backgroundColor:"grey"})
    //enable the button
    fireEvent.click(checkBox);
    expect(myButton).toHaveStyle({backgroundColor:"red"})
})
// This describe block describes all the test being run here
describe('Spaces before camel case letters', () =>{

    test("Works for no inner capital letters", () =>{
        expect(camelCaseBreaker("Red")).toBe("Red")
    })

    test("Works for one inner capital letter", ()=>{
        expect(camelCaseBreaker("MidnightBlue")).toBe("Midnight Blue")
    })

    test("Works for multiple inner capital letters", ()=> {
        expect(camelCaseBreaker("MediumVioletRed")).toBe("Medium Violet Red")
    })
})