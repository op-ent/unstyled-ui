import { describe, it, expect } from 'vitest'
import { kebabize } from '../../src'

describe('kebabize', () => {
    it('should turn string into kebab case', () => {
        expect(kebabize('button')).toBe('button')
        expect(kebabize('buttonGroup')).toBe('button-group')
    })
})
