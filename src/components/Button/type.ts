import { ComponentProps } from 'react'

export interface ButtonProps extends ComponentProps<'button'> {
  size?: 'small' | 'medium' | 'large' | 'wide'
}
