import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../features/nav/Navbar'
import { shallow, mount, configure } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })


describe('App component', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = render(<Router>
      <App />
    </Router>);
  })

  test('renders learn react link', () => {

    const linkElement = screen.getByText(/One-vents/);
    expect(linkElement).toBeInTheDocument();
  });

  test("Should render navbar for home route", () => {
    // Arrange
    // wrapper.
    // console.log(hi)
    // Act


  });
})

