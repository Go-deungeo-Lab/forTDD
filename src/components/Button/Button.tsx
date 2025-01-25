import { ButtonHTMLAttributes } from 'react'
import './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
}

export const Button = ({
                           variant = 'primary',
                           children,
                           className,
                           ...props
                       }: ButtonProps) => {
    return (
        <button
            className={`button ${variant} ${className || ''}`}
            {...props}
        >
            {children}
        </button>
    )
}