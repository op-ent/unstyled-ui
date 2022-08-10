import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ThemeProvider, Button } from '../src'

describe('Button', () => {
    it('should render', () => {
        render(
            <ThemeProvider>
                <Button>Button</Button>
            </ThemeProvider>
        )
        expect(screen.getByText('Button')).toBeInTheDocument()
    })
})
