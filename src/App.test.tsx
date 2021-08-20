import React from 'react';
import { render, screen , fireEvent} from '@testing-library/react';
import App from './App';

test('renders button', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', {name: 'Change to blue'});

  expect(colorButton).toBeInTheDocument();


});



test("Background color of button" , () => {
  render(<App />);
  // const backgroundColor = screen.getByRole("button",{backgroundColor:"red"})
  const backgroundColor = screen.getByRole('button', {name: 'Change to blue'});

  expect(backgroundColor).toHaveStyle({backgroundColor:"red"})
})


test( "clicking", () =>{
  render(<App />);
  const myButton = screen.getByRole("button", {name:"Change to blue"})
  fireEvent.click(myButton);
  expect(myButton).toHaveStyle({backgroundColor:"blue"})

})