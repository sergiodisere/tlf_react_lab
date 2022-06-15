import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Home from './Home'


describe('Component <Home/>', () => {
    let component; 
    
    beforeEach(()=>component = render(<Home/>))

    test('Render content HOME', () => {
        component.getByPlaceholderText('Search...')
    })
    
})
