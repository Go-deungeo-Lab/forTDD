import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button', () => {
    it('renders children correctly', () => {
        render(<Button>Click me</Button>)
        expect(screen.getByRole('button')).toHaveTextContent('Click me')
    })

    it('handles click events', async () => {
        const handleClick = vi.fn()
        render(<Button onClick={handleClick}>Click me</Button>)
        await userEvent.click(screen.getByRole('button'))
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('applies variant classes correctly', () => {
        const { rerender } = render(<Button variant="primary">Button</Button>)
        expect(screen.getByRole('button')).toHaveClass('primary')

        rerender(<Button variant="secondary">Button</Button>)
        expect(screen.getByRole('button')).toHaveClass('secondary')
    })
})