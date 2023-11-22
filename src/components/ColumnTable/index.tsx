import React, { ReactNode } from 'react'

import { Wrapper } from './style'

interface ColumnTableProps<T> {
  data: T
  renderItem: (item: T) => ReactNode
}

function ColumnTable<T extends unknown>({ data, renderItem }: ColumnTableProps<T>): JSX.Element {
  return <Wrapper>{renderItem(data)}</Wrapper>
}

export default ColumnTable
