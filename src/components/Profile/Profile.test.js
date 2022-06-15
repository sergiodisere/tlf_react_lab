import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render } from '@testing-library/react'
import Profile from './Profile'

const profile = {
    username: "livingapp",
    avatar: "https://cdn.fakercloud.com/avatars/markwienands_128.jpg",
    bio: "Distinctio sit est veniam veniam rem. Rerum ullam corporis. Vero ex autem dolor. Sequi quia mollitia. Omnis cumque repellendus odio doloremque rerum dolor consequatur optio."
  }
describe('Component <Profile/>', () => {
    let component; 
    
    beforeEach(()=>component = render(<Profile/>))

    test('Render content PROFILE', () => {
        console.log(component)
        component.getByText('@')
    })
    
})
