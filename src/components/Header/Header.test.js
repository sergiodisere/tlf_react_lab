import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Header from './Header'
import { BrowserRouter } from 'react-router-dom';


describe('Component <Header/>', () => {
    let component; 
    
    beforeEach(()=>component = render(<BrowserRouter><Header/></BrowserRouter>))

    test('Render content HEADER', () => {
        component.getByText('Three Pics')
    })
    
})
