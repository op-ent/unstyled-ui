import { describe, it, expect } from 'vitest'
import { generateClassName } from '../../src'

describe('generateClassName', () => {
    it('should include all classes if `unstyled` is false', () => {
        const result = generateClassName('foo', 'bar', 'baz')(false)
        expect(result).toBe('foo bar baz')
    })
    it('should only include the first class if `unstyled` is true', () => {
        const result = generateClassName('foo', 'bar', 'baz')(true)
        expect(result).toBe('foo')
    })
    it('should return the same class if only is provided', () => {
        const a = generateClassName('foo')(true)
        const b = generateClassName('foo')(false)
        expect(a).toBe(b)
    })
})
