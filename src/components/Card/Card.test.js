import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Card from './Card'

const post = {
    id: "94711bb7-7bab-4e5a-8850-388cf87b3211",
    created_at: "2022-02-27T20:05:16.264Z",
    likes: 87,
    author: "@Helena_Raynor25",
    image: "http://placeimg.com/640/480/city",
    content: "Sed quas sunt laborum voluptatem sunt. Architecto nihil temporibus architecto magni delectus quas ipsa. Voluptatum laboriosam temporibus magnam totam aperiam ea accusamus aut.",
    comments: 84
}

describe('Component <Card/>', () => {
    let component; 
    const mockHandler = jest.fn()

    beforeEach(()=>component = render(<Card post={post} handleLike={mockHandler}/>))

    test('Render content CARD', () => {
        component.getByText('@Helena_Raynor25')
    })
    
    test('Clicking button like in CARD', () => {
        const button = component.getByText('87')
        fireEvent.click(button)
        expect(mockHandler).toHaveBeenCalledTimes(1)
    })
})
