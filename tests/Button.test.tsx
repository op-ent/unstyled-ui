// import * as ReactDOM from 'react-dom'
// import { Button } from '../src'

// describe('Button', () => {
//     it('renders without crashing', () => {
//         const div = document.createElement('div')
//         ReactDOM.render(<Button />, div)
//         ReactDOM.unmountComponentAtNode(div)
//     })
// })

import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import { Button } from '../src'

describe('Button', async () => {
    it('should render', async () => {
        render(<Button>Button</Button>)
        expect(screen.getByText('Button')).toBeInTheDocument()
    })
})
