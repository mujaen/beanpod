import { ComponentProps, ChangeEvent } from 'react'

export interface SelectProps extends ComponentProps<'select'> {
  options?: Option[]
  onChange: (value: ChangeEvent<HTMLSelectElement>) => void
}

interface Option {
  accessor: string
  value: string
}
