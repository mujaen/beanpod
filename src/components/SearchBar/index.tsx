import React, { useState } from 'react'

import { Wrapper } from './style'

import Select from '#components/Select'
import Input from '#components/Input'
import Button from '#components/Button'

export interface ColumnsProps {
  accessor: string
  value: string
}

interface SearchProps {
  searchField: ColumnsProps[]
  onCreate: (data: ReturnData) => void
}

interface ReturnData {
  type: string
  value: string
}

function SearchBar({ searchField = [{ accessor: '', value: '' }], onCreate }: SearchProps) {
  const [selectField, setSelectField] = useState(searchField[0].accessor)
  const [textField, setTextField] = useState('')

  return (
    <Wrapper>
      <Select
        options={searchField}
        defaultValue={selectField}
        onChange={value => setSelectField(value.target.value)}
      />
      <Input onChange={value => setTextField(value.target.value)} />
      <Button
        onClick={() =>
          onCreate({
            type: selectField,
            value: textField,
          })
        }
      >
        검색
      </Button>
    </Wrapper>
  )
}

export default SearchBar
