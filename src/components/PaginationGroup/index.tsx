import React from 'react'

import { PaginationGroupProps } from './type'
import { Wrapper, PrevButtonWrapper, NextButtonWrapper, IconButton } from './style'
import Button from './Button'

/**
 * @description
 * 페이지 처리 기능을 제공하는 컴포넌트
 *
 * @example
 * import PaginationGroup from 'components/PaginationGroup'
 *
 * function App() {
 *    return <PaginationGroup page={currentPage} totalPage={16} paginateTo={handlePageChange} />
 * }
 *
 * export default App
 *
 * @returns JSX.Element
 */
function PaginationGroup({ page, totalPage, paginateTo }: PaginationGroupProps) {
  const VISIBLE_PAGE_COUNT = 5
  const start = Math.floor((page - 1) / VISIBLE_PAGE_COUNT) * VISIBLE_PAGE_COUNT
  const end = Math.ceil(page / VISIBLE_PAGE_COUNT) * VISIBLE_PAGE_COUNT

  /**
   * 처음 버튼 클릭 시 동작되는 함수
   *
   * @returns
   * @memberof PaginationButtonGroup
   */
  const handleFirstButtonClick = () => {
    if (page === 1) {
      return
    }
    paginateTo(1)
  }

  /**
   * 이전 버튼 클릭 시 동작되는 함수
   *
   * @returns
   * @memberof PaginationButtonGroup
   */
  const handlePrevButtonClick = () => {
    if (page === 1) {
      return
    }
    paginateTo(page - 1)
  }

  /**
   * 다음 버튼 클릭 시 동작되는 함수
   *
   * @returns
   * @memberof PaginationButtonGroup
   */
  const handleNextButtonClick = () => {
    if (page === totalPage) {
      return
    }
    paginateTo(page + 1)
  }

  /**
   * 마지막 버튼 클릭 시 동작되는 함수
   *
   * @returns
   * @memberof PaginationButtonGroup
   */
  const handleLastButtonClick = () => {
    if (page === totalPage) {
      return
    }
    paginateTo(totalPage)
  }

  /**
   * 페이지 버튼 클릭 시 동작되는 함수
   *
   * @returns
   * @params {number} index
   * @memberof PaginationButtonGroup
   */
  const handlePageButtonClick = (index: number) => () => paginateTo(index)

  const pages = Array(totalPage)
    .fill(null)
    .map((x, i) => i + 1)
    .map(index => (
      <Button
        key={`paginate-${index}`}
        isSelected={index === page}
        onClick={handlePageButtonClick(index)}
      >
        {index}
      </Button>
    ))
    .slice(start, end)

  return (
    <Wrapper>
      <PrevButtonWrapper>
        <Button isDisabled={page === 1} onClick={handleFirstButtonClick}>
          <IconButton icon="arrow_first" width={24} height={24} />
        </Button>
        <Button isDisabled={page === 1} onClick={handlePrevButtonClick}>
          <IconButton icon="arrow_left" width={24} height={24} />
        </Button>
      </PrevButtonWrapper>
      {pages}
      <NextButtonWrapper>
        <Button isDisabled={page === totalPage} onClick={handleNextButtonClick}>
          <IconButton icon="arrow_right" width={24} height={24} />
        </Button>
        <Button isDisabled={page === totalPage} onClick={handleLastButtonClick}>
          <IconButton icon="arrow_last" width={24} height={24} />
        </Button>
      </NextButtonWrapper>
    </Wrapper>
  )
}

export default PaginationGroup
