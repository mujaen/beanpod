import React, { ReactNode } from 'react'

import { TableWrapper, TableHeadCell } from './style'

export interface ColumnsProps<C> {
  accessor: keyof C
  value: string | number
  width?: string | number
}

interface TableProps<T> {
  columns: ColumnsProps<T>[]
  data?: T[]
  renderItem: (item: T) => ReactNode
}

function Table<T extends unknown>({ columns, data = [], renderItem }: TableProps<T>): JSX.Element {
  return (
    <TableWrapper>
      <table>
        <colgroup>
          {columns?.map(column => (
            <col key={`table-column-${column.value}`} width={column.width}></col>
          ))}
        </colgroup>
        <thead>
          <tr>
            {columns.map(column => (
              <TableHeadCell key={`table-head-${column.value}`}>{column.value}</TableHeadCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => <tr key={`table-row-${index}`}>{renderItem(item)}</tr>)}
        </tbody>
      </table>
    </TableWrapper>
  )
}

export default Table
