import React from 'react'
import { render, screen } from '@testing-library/react'
import { Button } from '../src'

describe('Button', async () => {
    it('should render', async () => {
        render(<Button>Button</Button>)
        expect(screen.getByText('Button')).toBeInTheDocument()
    })
})
